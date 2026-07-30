import { useMemo } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { useGame } from "../context/GameContext";
import { TEMAS, DIFICULDADES } from "../data/temas";
import { QUESTOES_DB } from "../data/questoes";
import { filterPool } from "../lib/gameLogic";
import { colors, spacing, radius } from "../theme/tokens";
import { Chip } from "../components/Chip";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  const { state, setTema, setDificuldade, iniciarRodada } = useGame();

  const poolCount = useMemo(
    () => filterPool(QUESTOES_DB, state.tema, state.dificuldade).length,
    [state.tema, state.dificuldade]
  );

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Bora revisar direito hoje?</Text>

      <Text style={styles.sectionLabel}>Tema</Text>
      <View style={styles.chipGrid}>
        {TEMAS.map((tema) => (
          <Chip
            key={tema}
            label={tema}
            selected={state.tema === tema}
            color={colors.temas[tema]}
            onPress={() => setTema(tema)}
          />
        ))}
      </View>

      <Text style={styles.sectionLabel}>Dificuldade</Text>
      <View style={styles.chipRow}>
        {DIFICULDADES.map((d) => (
          <Chip
            key={d.value}
            label={d.label}
            selected={state.dificuldade === d.value}
            color={d.value === "facil" ? colors.success : d.value === "media" ? colors.mediaDificuldade : colors.danger}
            onPress={() => setDificuldade(d.value)}
          />
        ))}
      </View>

      <Text style={styles.poolInfo}>{poolCount} questões disponíveis nesse filtro</Text>

      <Pressable
        style={[styles.ctaPrimary, poolCount === 0 && styles.ctaDisabled]}
        disabled={poolCount === 0}
        onPress={() => {
          iniciarRodada();
          navigation.navigate("Game");
        }}
      >
        <Text style={styles.ctaPrimaryText}>Iniciar rodada</Text>
      </Pressable>

      <Pressable style={styles.ctaSecondary} onPress={() => navigation.navigate("History")}>
        <Text style={styles.ctaSecondaryText}>Ver histórico</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  title: { fontSize: 23, fontWeight: "600", color: colors.fg, marginTop: spacing.md },
  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.xl, marginBottom: spacing.sm },
  chipGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  poolInfo: { fontSize: 13, color: colors.muted, marginTop: spacing.lg },
  ctaPrimary: { marginTop: spacing.xl, backgroundColor: colors.accent, borderRadius: radius.lg, paddingVertical: spacing.lg, alignItems: "center", minHeight: 44 },
  ctaDisabled: { opacity: 0.4 },
  ctaPrimaryText: { color: "#fff", fontSize: 17, fontWeight: "600" },
  ctaSecondary: { marginTop: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, paddingVertical: spacing.md + 3, alignItems: "center", minHeight: 44 },
  ctaSecondaryText: { color: colors.fg, fontSize: 15, fontWeight: "600" }
});
