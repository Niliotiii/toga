const fs = require('fs');
let code = fs.readFileSync('src/screens/HomeScreen.tsx', 'utf8');

// The main branch changed the formatting (prettier / single quotes) and some text ('Bora' to 'Vamos', 'Qtd.' to 'Quantidade').
// We will resolve the conflict by keeping the main branch changes but injecting our logic.

code = code.replace(
  /<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> 8d4d6df \(feat: add interactive slider for round size configuration\)/g,
  (match, p1) => {
     if (match.includes('import { useMemo, useRef } from \'react\';')) {
        return `import { useMemo, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useGame } from '../context/GameContext';
import { TEMAS } from '../data/temas';
import { QUESTOES_DB } from '../data/questoes';
import { filterPool } from '../lib/gameLogic';
import { colors, spacing, radius, type } from '../theme/tokens';
import { Chip } from '../components/Chip';
import { MetaDiariaCard } from '../components/MetaDiariaCard';
import { CronometroSwitch } from '../components/CronometroSwitch';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { InfoIcon } from '../components/icons';`;
     }

     if (match.includes('iniciarRodada,\n  } = useGame();')) {
         return `  const {
    state,
    setTema,
    setQtdQuestoes,
    toggleCronometro,
    sortearAleatorio,
    iniciarRodada,
  } = useGame();
  const insets = useSafeAreaInsets();
  const [sliderValue, setSliderValue] = useState(state.qtdQuestoes);

  useEffect(() => {
    setSliderValue(state.qtdQuestoes);
  }, [state.qtdQuestoes]);`;
     }

     if (match.includes('Quantidade de Questões')) {
         return `      <View style={styles.sliderSection}>
        <View style={styles.sliderHeader}>
          <Text style={[styles.sectionLabel, { marginTop: spacing.lg }]}>
            Quantidade de Questões
          </Text>
          <Text style={styles.sliderValue}>{sliderValue}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={5}
          maximumValue={100}
          step={5}
          value={sliderValue}
          onValueChange={(val) => setSliderValue(val)}`;
     }

     if (match.includes('aboutButton: {')) {
        return `  aboutButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.muted,
    textTransform: 'uppercase',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  sliderSection: { marginTop: spacing.lg },
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  sliderValue: { fontSize: 16, fontWeight: '600', color: colors.fg },
  slider: { width: '100%', height: 40, marginTop: spacing.xs },
  modeRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  sortearButton: {
    width: 44,
    minHeight: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },`;
     }

     return match;
  }
);
fs.writeFileSync('src/screens/HomeScreen.tsx', code);
