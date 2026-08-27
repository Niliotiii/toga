const fs = require('fs');
const file = 'src/services/storage.ts';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'export const CRONOMETRO_KEY = "@app_direito_cronometro";',
  'export const CRONOMETRO_KEY = "@app_direito_cronometro";\nexport const QTD_QUESTOES_KEY = "@app_direito_qtd_questoes";'
);

code += `
export async function getQtdQuestoesPref(): Promise<number> {
  const raw = await AsyncStorage.getItem(QTD_QUESTOES_KEY);
  return raw ? parseInt(raw, 10) : 5;
}

export async function setQtdQuestoesPref(v: number): Promise<void> {
  await AsyncStorage.setItem(QTD_QUESTOES_KEY, v.toString());
}
`;

fs.writeFileSync(file, code);
