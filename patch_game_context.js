const fs = require('fs');
const file = 'src/context/GameContext.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'import { registrarRespostaMeta, getCronometroPref, setCronometroPref } from "../services/storage";',
  'import { registrarRespostaMeta, getCronometroPref, setCronometroPref, getQtdQuestoesPref, setQtdQuestoesPref } from "../services/storage";'
);

code = code.replace('const ROUND_SIZE = 5;\n', '');

code = code.replace(
  '  tema: string;',
  '  tema: string;\n  qtdQuestoes: number;'
);

code = code.replace(
  '  tema: TEMAS[0],',
  '  tema: TEMAS[0],\n  qtdQuestoes: 5,'
);

code = code.replace(
  '  setTema(t: string): void;',
  '  setTema(t: string): void;\n  setQtdQuestoes(v: number): Promise<void>;'
);

code = code.replace(
  '      setState((s) => ({ ...s, cronometroAtivo: v }));\n    });',
  '      setState((s) => ({ ...s, cronometroAtivo: v }));\n    });\n    getQtdQuestoesPref().then((v) => {\n      setState((s) => ({ ...s, qtdQuestoes: v }));\n    });'
);

code = code.replace(
  '  const setTema = useCallback((t: string) => setState((s) => ({ ...s, tema: t })), []);',
  '  const setTema = useCallback((t: string) => setState((s) => ({ ...s, tema: t })), []);\n\n  const setQtdQuestoes = useCallback(async (v: number) => {\n    setState((s) => ({ ...s, qtdQuestoes: v }));\n    await setQtdQuestoesPref(v);\n  }, []);'
);

code = code.replace(
  '      rodada: buildRodada(QUESTOES_DB, s.tema, ROUND_SIZE),',
  '      rodada: buildRodada(QUESTOES_DB, s.tema, s.qtdQuestoes),'
);

code = code.replace(
  '      value={{ state, setTema, toggleCronometro, sortearAleatorio, iniciarRodada, responder, usarPular, usarEliminar, usarBomba, avancar }}',
  '      value={{ state, setTema, setQtdQuestoes, toggleCronometro, sortearAleatorio, iniciarRodada, responder, usarPular, usarEliminar, usarBomba, avancar }}'
);

fs.writeFileSync(file, code);
