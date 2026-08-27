const fs = require('fs');
const file = 'src/screens/HomeScreen.tsx';
let code = fs.readFileSync(file, 'utf8');

if (!code.includes('import Slider')) {
  code = code.replace(
    'import { MaterialCommunityIcons } from "@expo/vector-icons";',
    'import { MaterialCommunityIcons } from "@expo/vector-icons";\nimport Slider from "@react-native-community/slider";',
  );
}

if (!code.includes('setQtdQuestoes')) {
  code = code.replace(
    'const { state, setTema, toggleCronometro, sortearAleatorio, iniciarRodada } = useGame();',
    'const { state, setTema, setQtdQuestoes, toggleCronometro, sortearAleatorio, iniciarRodada } = useGame();',
  );
}

if (!code.includes('Quantidade de Questões')) {
  const sliderSection = `
      <View style={styles.sliderSection}>
        <View style={styles.sliderHeader}>
          <Text style={styles.sectionLabel}>Quantidade de Questões</Text>
          <Text style={styles.sliderValue}>{state.qtdQuestoes}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={5}
          maximumValue={100}
          step={5}
          value={state.qtdQuestoes}
          onSlidingComplete={(val) => setQtdQuestoes(val)}
          minimumTrackTintColor={colors.accent}
          maximumTrackTintColor={colors.border}
          thumbTintColor={colors.accent}
        />
      </View>
`;

  code = code.replace(
    '<Text style={styles.sectionLabel}>Tema</Text>',
    sliderSection + '\n      <Text style={styles.sectionLabel}>Tema</Text>',
  );
}

code = code.replace(
  '  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.xl, marginBottom: spacing.sm },',
  '  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.xl, marginBottom: spacing.sm },\n  sliderSection: { marginTop: spacing.lg },\n  sliderHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },\n  sliderValue: { fontSize: 16, fontWeight: "600", color: colors.fg },\n  slider: { width: "100%", height: 40, marginTop: spacing.xs },',
);

// fix margins if sliderSection was missing them originally
code = code.replace(
  /marginTop: spacing\.xl, marginBottom: spacing\.sm/g,
  'marginTop: spacing.sm, marginBottom: spacing.sm',
); // Just to adjust spacing between Qtd de Questões and Tema, we will manually fix in next step if it's wrong

fs.writeFileSync(file, code);
