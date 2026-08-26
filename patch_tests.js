const fs = require('fs');

// Patch GameContext.test.tsx
let file = 'src/context/GameContext.test.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'test("iniciarRodada builds a rodada of up to 5 questions and resets round state", async () => {',
  'test("iniciarRodada builds a rodada based on qtdQuestoes and resets round state", async () => {'
);
// We expect it to be 5 as it defaults to 5 in state

fs.writeFileSync(file, code);

// Patch GameScreen.test.tsx
file = 'src/screens/GameScreen.test.tsx';
code = fs.readFileSync(file, 'utf8');

code = code.replace(
  '// Answer through all questions in the (5-or-fewer) rodada\n  for (let i = 0; i < 5; i++) {',
  '// Answer through all questions in the rodada\n  for (let i = 0; i < 5; i++) {'
);

fs.writeFileSync(file, code);
