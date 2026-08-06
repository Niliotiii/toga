# Power-up "Bomba" — Design

## Contexto

O jogo já tem dois power-ups por rodada: **Pular** (pula a questão) e **Eliminar 2**
(remove 2 das 4 alternativas erradas, com animação de tesoura). Cada questão tem
5 alternativas (1 correta + 4 erradas).

Este design adiciona um terceiro power-up, **Bomba**, mais forte que o Eliminar:
remove 3 das 4 alternativas erradas, deixando apenas a correta + 1 errada.

## Decisões

- **Terceiro power-up adicional**, não substitui o Eliminar. Convive com
  Pular e Eliminar na mesma `powerupsRow`.
- **Ganho por combo**: mesma regra do Eliminar — começa com 1, ganha +1 a cada
  combo múltiplo de 3 acertos seguidos, até um máximo de 2 (`POWERUP_MAX`).
- **Animação**: bombas aparecem sobre as 3 alternativas erradas sorteadas, em
  sequência (com pequeno delay entre elas), e explodem uma a uma — não todas
  de uma vez.

## Estado (`GameContext.tsx`)

- `GameState.powerups` ganha um terceiro campo: `{ pular: number; eliminar: number; bomba: number }`.
- `initialState.powerups.bomba = 1`.
- `GameState` ganha `bombadasQuestaoAtual: boolean` (paralelo a
  `eliminadasQuestaoAtual`), resetado em `iniciarRodada` e `avancar`.
- Em `responder()`, a regra de ganho de power-up por combo
  (`combo % 3 === 0 && powerups.X < POWERUP_MAX`) passa a rodar também para
  `bomba`, com os mesmos parâmetros usados por `eliminar` hoje.
- Nova função `usarBomba(): number[]`, espelhando `usarEliminar()`:
  - Guarda síncrona via ref (`usedBombaThisQuestionRef`) para bloquear duas
    chamadas no mesmo tick antes de qualquer render/efeito atualizar
    `stateRef`.
  - Checa: `!s.respondida`, `s.powerups.bomba > 0`, `!s.bombadasQuestaoAtual`,
    questão existe.
  - Sorteia (`shuffle`) os índices errados e pega os 3 primeiros
    (`errados.slice(0, 3)`).
  - `setState` decrementa `powerups.bomba` e marca `bombadasQuestaoAtual: true`,
    revalidando as mesmas condições dentro do updater (mesmo padrão de
    `usarEliminar`, incluindo o check de `currQ.id !== q.id`).
  - Retorna os 3 índices removidos.

## UI (`GameScreen.tsx`)

- Novo ícone `BombIcon` em `icons.tsx`, estilo Material Symbols (mesmo padrão
  visual dos ícones existentes: `Svg` com um único `Path`, viewBox
  `"0 -960 960 960"`).
- Novo `PowerupButton` na `powerupsRow`, label "Bomba", `count={state.powerups.bomba}`.
  Desabilitado quando: `respondida`, `powerups.bomba <= 0`,
  `bombadasQuestaoAtual`, ou qualquer animação de power-up já em andamento
  (`scissorsActive`, `pularAnimating`, ou o novo `bombaActive`).
- `handleBomba()`:
  - Se `bombaActive || scissorsActive || pularAnimating`, retorna sem ação.
  - Chama `usarBomba()`; se vazio, retorna.
  - Se `reducedMotion`: aplica `setEliminadas((prev) => [...prev, ...removidos])`
    direto, sem animação (mesmo padrão do Eliminar).
  - Caso contrário, roda a coreografia abaixo.
- **Coreografia da animação** (novo estado local `bombaActive`, e valores
  `Animated` por posição — reaproveitando `rowLayouts` para centralizar sobre
  cada alternativa, como a tesoura já faz):
  - Para cada um dos 3 índices removidos (ordem sorteada, com pequeno delay
    fixo entre o início de cada um, ex. ~150ms):
    1. Ícone de bomba aparece (fade/scale in) centralizado sobre a linha da
       alternativa.
    2. Pequeno "tremor" (scale ou translateX oscilando) simulando o pavio
       aceso, breve (~150–250ms).
    3. Flash de explosão: um círculo (cor de destaque/alerta) faz scale up
       rápido + fade out sobre a linha, e nesse momento o índice é adicionado
       a `eliminadas` (estado visual `"eliminated"`, já existente e usado
       pelo Eliminar).
    4. Ícone de bomba e flash somem antes de iniciar a próxima da sequência.
  - Ao final das 3, `bombaActive` volta a `false`.
- `mostrarMascote("powerup")` pode ser reaproveitada ao acionar a bomba,
  como já acontece implicitamente hoje quando um power-up é ganho (a frase
  já existe em `FRASES.powerup`).

## Fora de escopo

- Não altera o balanceamento do Eliminar nem do Pular.
- Não adiciona persistência/histórico específico de uso de Bomba além do que
  já existe genericamente (nenhum registro por tipo de power-up é persistido
  hoje).
- Não cria nova tela nem configuração de dificuldade baseada nesse power-up.

## Testes

- `GameContext.test.tsx`:
  - Ganho de bomba por combo múltiplo de 3, respeitando `POWERUP_MAX = 2`.
  - `usarBomba()` retorna exatamente 3 índices, todos diferentes de
    `resposta_correta`, sem duplicatas.
  - Guarda contra dupla chamada no mesmo tick (mesmo teste que já existe para
    `usarEliminar`, adaptado).
  - `bombadasQuestaoAtual` e o estoque de bomba resetam corretamente em
    `iniciarRodada`/`avancar`.
- `GameScreen` (novo teste ou extensão de suite existente): clique no botão
  de bomba resulta em 3 alternativas marcadas como eliminadas e o botão fica
  desabilitado após o uso na mesma questão.
