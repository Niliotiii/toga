const fs = require('fs');
const file = 'src/screens/HomeScreen.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  '      <View style={styles.sliderSection}>\n        <View style={styles.sliderHeader}>\n          <Text style={styles.sectionLabel}>Qtd. de Questões</Text>\n          <Text style={styles.sliderValue}>{state.qtdQuestoes}</Text>\n        </View>',
  '      <View style={styles.sliderSection}>\n        <View style={styles.sliderHeader}>\n          <Text style={[styles.sectionLabel, { marginTop: spacing.lg }]}>Qtd. de Questões</Text>\n          <Text style={styles.sliderValue}>{state.qtdQuestoes}</Text>\n        </View>'
);

fs.writeFileSync(file, code);
