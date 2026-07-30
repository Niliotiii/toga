# PRD: Microapp Gamificado de Direito

## 1. Visão Geral do Produto
Um microaplicativo focado no treinamento e resolução de questões de concursos e exames na área do Direito. O app funciona de maneira **100% offline**, oferecendo rodadas de perguntas geradas aleatoriamente com base em filtros de tema e dificuldade escolhidos pelo usuário. O foco principal é proporcionar uma experiência fluida, gamificada e sem distrações ou dependência de internet.

## 2. Objetivos e Restrições
*   **Objetivo Principal:** Permitir a revisão rápida de conceitos de direito através de questões objetivas gamificadas.
*   **Restrição 1 (Offline First):** O app não consumirá nenhuma API externa. Todo o banco de questões será embutido no código (JSON).
*   **Restrição 2 (Microapp):** Sem sistema de login, perfis complexos ou sincronização em nuvem.
*   **Stack Tecnológico:** React Native (usando Expo) e `AsyncStorage` para persistência local de dados.

---

## 3. Requisitos Funcionais (Funcionalidades)

| Ref | Funcionalidade | Descrição |
| :--- | :--- | :--- |
| **RF01** | **Seleção de Parâmetros** | O usuário deve poder escolher o **Tema** (ex: Direito Penal, Constitucional) e a **Dificuldade** (Fácil, Média, Difícil) antes de iniciar a rodada. |
| **RF02** | **Geração de Rodada Aleatória** | O sistema deve filtrar o banco de dados local com base nos parâmetros e sortear *N* questões de forma aleatória para a rodada atual. |
| **RF03** | **Apresentação da Questão** | Cada tela de questão deve exibir: Enunciado, as alternativas objetivas, e a **Fonte/Banca** (ex: *CESPE, FGV 2026*). |
| **RF04** | **Feedback Gamificado Imediato** | Ao selecionar uma alternativa, o app deve validar a resposta na hora (verde para acerto, vermelho para erro) antes de avançar para a próxima. |
| **RF05** | **Tela de Resultados** | Ao fim de uma rodada, exibir a pontuação, aproveitamento (%), estrelas ganhas na rodada e um botão para voltar ao início. |
| **RF06** | **Histórico de Rodadas** | O usuário deve ter acesso a uma tela que lista todas as rodadas jogadas no passado, armazenadas localmente, exibindo data, tema e pontuação. |

---

## 4. Requisitos Não-Funcionais

*   **Tecnologia:** React Native (via Expo Managed Workflow).
*   **Armazenamento:** `@react-native-async-storage/async-storage` para o histórico.
*   **Desempenho:** A transição entre perguntas deve ser instantânea, sem telas de carregamento (*loading*), já que os dados são locais.
*   **Interface (UI):** Design minimalista, focado na legibilidade (fontes adequadas para leitura longa de enunciados) e botões grandes (touch-friendly).

---

## 5. Estrutura de Dados e Armazenamento

### 5.1. Banco de Questões (Arquivo Estático `questoes.json`)
O arquivo central do app conterá o array de questões.
```json
{
  "id": "q001",
  "tema": "Direito Penal",
  "dificuldade": "dificil",
  "fonte": "CESPE / CEBRASPE - 2026",
  "enunciado": "A respeito dos crimes contra o patrimônio, assinale a opção correta.",
  "alternativas": [
    "Alternativa A...",
    "Alternativa B...",
    "Alternativa C...",
    "Alternativa D..."
  ],
  "resposta_correta": 1 
}
```

### 5.2. Modelo de Histórico (`AsyncStorage`)
Chave: `@app_direito_historico`
```json
[
  {
    "id_rodada": "1697045102",
    "data_hora": "2026-07-30T10:00:00Z",
    "tema": "Direito Penal",
    "dificuldade": "dificil",
    "questoes_total": 5,
    "acertos": 4,
    "aproveitamento": 80
  }
]
```

---

## 6. Fluxo de Telas (User Flow)

O aplicativo será composto por apenas 4 telas (navegação usando React Navigation):

1.  **Tela Inicial (Home):**
    *   Título do App.
    *   *Dropdowns* ou botões para selecionar Tema e Dificuldade.
    *   Botão grande central: **"Iniciar Rodada"**.
    *   Botão secundário: **"Ver Histórico"**.
2.  **Tela de Gameplay (Questões):**
    *   Header: "Questão 1 de 5" | "🔥 Combo: 2".
    *   Corpo: Fonte da questão (em itálico/cinza), Enunciado.
    *   Botões: 4 ou 5 alternativas.
    *   Ação: Ao clicar, anima cor e revela o botão "Próxima Questão".
3.  **Tela de Resumo da Rodada:**
    *   Animação simples (ex: confetes se > 70%).
    *   Mostra Acertos/Total e a Porcentagem.
    *   Salva os dados silenciosamente no AsyncStorage neste momento.
    *   Botão: **"Jogar Novamente"** ou **"Voltar ao Início"**.
4.  **Tela de Histórico:**
    *   Lista (FlatList) lendo do AsyncStorage.
    *   Exibe *Cards* de cada rodada ordenados da mais recente para a mais antiga.