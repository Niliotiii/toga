# PRD: Toga — Microapp Gamificado de Direito

> Documento atualizado para refletir o estado atual da aplicação. Onde o
> escopo divergiu da concepção original, o texto descreve o comportamento
> efetivamente implementado.

## 1. Visão Geral do Produto
Toga é um microaplicativo focado no treinamento e resolução de questões de
concursos e exames na área do Direito. O app funciona de maneira **100%
offline**, oferecendo rodadas de perguntas geradas aleatoriamente a partir do
tema escolhido pelo usuário. O foco é uma experiência fluida, gamificada e sem
distrações ou dependência de internet. Além do app nativo (Expo/React Native),
o projeto também é distribuído como **PWA** (build web com service worker e
prompt de instalação).

## 2. Objetivos e Restrições
*   **Objetivo Principal:** Permitir a revisão rápida de conceitos de direito através de questões objetivas gamificadas.
*   **Restrição 1 (Offline First):** O app não consome nenhuma API externa. Todo o banco de questões é embutido no código (arquivos TypeScript).
*   **Restrição 2 (Microapp):** Sem sistema de login, perfis complexos ou sincronização em nuvem. Toda a persistência é local.
*   **Stack Tecnológico:** React Native (Expo Managed Workflow), TypeScript e `AsyncStorage` para persistência local. Distribuição também via PWA (`react-native-web`).

---

## 3. Requisitos Funcionais (Funcionalidades)

| Ref | Funcionalidade | Descrição |
| :--- | :--- | :--- |
| **RF01** | **Seleção de Tema** | O usuário escolhe o **Tema** (Direito Penal, Constitucional, Civil, Administrativo, Tributário, Trabalho, Ambiental, Direitos Humanos) antes de iniciar a rodada. Há também um botão de **sortear tema aleatório**. |
| **RF02** | **Quantidade de Questões Configurável** | O usuário define quantas questões terá a rodada através de um **slider** (de 5 a 100, em passos de 5). A preferência é persistida localmente. |
| **RF03** | **Geração de Rodada Aleatória** | O sistema filtra o banco local pelo tema e sorteia *N* questões aleatoriamente para a rodada atual (limitado ao total disponível no tema). |
| **RF04** | **Apresentação da Questão** | Cada questão exibe: contador ("Questão X de N"), indicador de combo, Fonte/Banca, Enunciado e as alternativas objetivas. |
| **RF05** | **Feedback Gamificado Imediato** | Ao selecionar uma alternativa, o app valida a resposta na hora (verde para acerto, vermelho para erro), com um mascote reativo, antes de avançar. |
| **RF06** | **Power-ups** | Durante a rodada o usuário pode usar power-ups desbloqueados por combo: **Pular** questão, **Eliminar** (remove 2 alternativas erradas) e **Bomba** (remove 3 alternativas erradas). |
| **RF07** | **Cronômetro por Questão (opcional)** | Modo cronômetro ativável na Home, com tempo por questão configurável. A preferência e o tempo são persistidos localmente. |
| **RF08** | **Meta Diária** | A Home exibe um card de progresso da meta diária de questões respondidas (alvo padrão de 15/dia), reiniciado a cada dia. |
| **RF09** | **Tela de Resultados** | Ao fim da rodada, exibe pontuação, aproveitamento (%), estrelas ganhas, sinalização de novo recorde por tema e animação de confetes acima de 70%. |
| **RF10** | **Histórico de Rodadas** | Tela que lista todas as rodadas jogadas, armazenadas localmente, exibindo data, tema e pontuação (mais recentes primeiro). |
| **RF11** | **Tela Sobre** | Tela institucional/"Sobre o Toga", acessível pela Home. |
| **RF12** | **Instalação como PWA** | Na versão web, o app oferece prompts de instalação (Android/iOS) e registra um service worker para uso offline. |

---

## 4. Requisitos Não-Funcionais

*   **Tecnologia:** React Native via Expo Managed Workflow; TypeScript.
*   **Armazenamento:** `@react-native-async-storage/async-storage` para histórico, meta diária e preferências.
*   **Desempenho:** Transições entre perguntas instantâneas, sem telas de *loading*, já que os dados são locais.
*   **Acessibilidade:** Respeito a "reduced motion" (animações desativadas quando o usuário prefere menos movimento); rótulos de acessibilidade nos controles interativos; botões touch-friendly (mín. 44px).
*   **Interface (UI):** Design minimalista via tokens de tema (`src/theme/tokens.ts`), focado na legibilidade de enunciados longos.
*   **Testes:** Suíte de testes com Jest + `@testing-library/react-native` cobrindo componentes, telas, contexto e lógica de jogo.

---

## 5. Estrutura de Dados e Armazenamento

### 5.1. Banco de Questões (arquivos estáticos em `src/data/`)
O banco é dividido por tema em arquivos TypeScript (`constitucional.ts`,
`direito-penal.ts`, `direito-civil.ts`, etc.) e consolidado em `QUESTOES_DB`
(`src/data/questoes.ts`). Cada questão segue o tipo `Questao` (`src/types.ts`):

```ts
interface Questao {
  id: string;
  tema: string;
  dificuldade: "facil" | "media" | "dificil"; // presente nos dados; não usado como filtro atualmente
  fonte: string;
  enunciado: string;
  alternativas: string[];
  resposta_correta: number; // índice da alternativa correta
}
```

> Observação: o campo `dificuldade` existe no modelo de dados mas ainda **não**
> é utilizado como filtro na seleção de rodada. Ver Seção 7 (Backlog).

### 5.2. Modelo de Histórico (`AsyncStorage`)
Chave: `@app_direito_historico`

```ts
interface HistoricoEntry {
  id_rodada: string;      // timestamp
  data_hora: string;      // ISO string
  tema: string;
  questoes_total: number;
  acertos: number;
  aproveitamento: number; // 0-100
}
```

### 5.3. Outras chaves de `AsyncStorage`
| Chave | Conteúdo |
| :--- | :--- |
| `@app_direito_meta_diaria` | Progresso da meta diária (`{ data, respondidas }`) |
| `@app_direito_cronometro` | Preferência de cronômetro ativo (`"1"`/`"0"`) |
| `@app_direito_tempo_questao` | Tempo por questão em segundos |
| `@app_direito_qtd_questoes` | Quantidade de questões preferida |
| `@app_direito_install_prompt_dismissed` | Se o prompt de instalação PWA foi dispensado |

---

## 6. Fluxo de Telas (User Flow)

Navegação via React Navigation (native stack), com 5 telas:

1.  **Home (`HomeScreen`):** Marca "Toga", card de meta diária, switch de
    cronômetro, botão de sortear tema, slider de quantidade de questões,
    seleção de tema (chips), contagem de questões disponíveis, e os botões
    **"Iniciar rodada"** e **"Ver histórico"**. Acesso à tela Sobre pelo ícone
    de informação.
2.  **Game (`GameScreen`):** Header com "Questão X de N" e combo; corpo com
    fonte e enunciado; alternativas; power-ups (Pular, Eliminar, Bomba);
    mascote reativo e, opcionalmente, cronômetro por questão.
3.  **Result (`ResultScreen`):** Acertos/total, aproveitamento (%), estrelas,
    sinalização de novo recorde e confetes acima de 70%. Salva a rodada no
    histórico. Botões para jogar novamente ou voltar.
4.  **History (`HistoryScreen`):** Lista as rodadas passadas (mais recentes
    primeiro) lendo do `AsyncStorage`.
5.  **About (`AboutScreen`):** Informações sobre o app.

---

## 7. Backlog / Não Implementado

*   **Filtro por Dificuldade:** o campo `dificuldade` está presente nas
    questões e no tipo `Questao`, mas ainda não há UI de seleção nem filtro
    por dificuldade na geração da rodada. Concepção original previa este
    filtro (RF01 original).
