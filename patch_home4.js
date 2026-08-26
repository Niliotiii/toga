const fs = require('fs');
const file = 'src/screens/HomeScreen.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'import { useMemo, useRef } from "react";',
  'import { useMemo, useRef, useState, useEffect } from "react";'
);

code = code.replace(
  '  const { state, setTema, setQtdQuestoes, toggleCronometro, sortearAleatorio, iniciarRodada } = useGame();\n  const insets = useSafeAreaInsets();',
  '  const { state, setTema, setQtdQuestoes, toggleCronometro, sortearAleatorio, iniciarRodada } = useGame();\n  const insets = useSafeAreaInsets();\n  const [sliderValue, setSliderValue] = useState(state.qtdQuestoes);\n\n  useEffect(() => {\n    setSliderValue(state.qtdQuestoes);\n  }, [state.qtdQuestoes]);'
);

code = code.replace(
  '<Text style={styles.sliderValue}>{state.qtdQuestoes}</Text>',
  '<Text style={styles.sliderValue}>{sliderValue}</Text>'
);

code = code.replace(
  '          step={5}\n          value={state.qtdQuestoes}\n          onSlidingComplete={(val) => setQtdQuestoes(val)}',
  '          step={5}\n          value={sliderValue}\n          onValueChange={(val) => setSliderValue(val)}\n          onSlidingComplete={(val) => setQtdQuestoes(val)}'
);

fs.writeFileSync(file, code);
