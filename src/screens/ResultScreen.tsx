import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { useGame } from "../context/GameContext";
import { tierFor, calcEstrelas, isNovoRecorde } from "../lib/gameLogic";
import { addHistoricoEntry, getHistorico } from "../services/storage";
import { StarRating } from "../components/StarRating";
import { Confetti } from "../components/Confetti";
import { MascotFace } from "../components/MascotFace";
import { colors, spacing, radius } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Result">;

export function ResultScreen({ navigation }: Props) {
  const { state, iniciarRodada } = useGame();
  const insets = useSafeAreaInsets();
  const saved = useRef(false);
  const [recorde, setRecorde] = useState(false);

  const total = state.rodada.length;
  const pct = total ? Math.round((state.acertos / total) * 100) : 0;
  const estrelas = calcEstrelas(pct);
  const tier = tierFor(pct);
  const mascotBorderColor =
    tier.tag === "perfect" || tier.tag === "great" ? colors.success
    : tier.tag === "good" ? colors.accent
    : tier.tag === "meh" ? colors.warn
    : colors.border;

  useEffect(() => {
    if (saved.current) return;
    saved.current = true;
    (async () => {
      const historicoAntes = await getHistorico();
      setRecorde(isNovoRecorde(historicoAntes, state.tema, state.dificuldade, pct));
      await addHistoricoEntry({
        tema: state.tema,
        dificuldade: state.dificuldade,
        questoes_total: total,
        acertos: state.acertos,
        aproveitamento: pct
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { flexGrow: 1, paddingTop: spacing.xxl + insets.top, paddingBottom: spacing.xl + insets.bottom }
      ]}
    >
      <Confetti active={pct > 70} />
      <View style={[styles.mascotAvatar, { borderColor: mascotBorderColor }]}>
        <MascotFace size={34} color={colors.fg} />
      </View>
      <Text style={styles.headline}>{tier.headline}</Text>
      {recorde && <Text style={styles.recorde}>Novo recorde pessoal</Text>}
      <StarRating estrelas={estrelas} />
      <Text style={styles.score}>{state.acertos} / {total}</Text>
      <Text style={styles.pct}>{pct}%</Text>
      <Text style={styles.tema}>{state.tema}</Text>

      <View style={styles.spacer} />

      <View style={styles.actions}>
        <Pressable
          style={styles.ctaPrimary}
          onPress={() => {
            iniciarRodada();
            navigation.navigate("Game");
          }}
        >
          <Text style={styles.ctaPrimaryText}>Jogar novamente</Text>
        </Pressable>
        <Pressable style={styles.ctaSecondary} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.ctaSecondaryText}>Voltar ao início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.xl, alignItems: "center", paddingTop: spacing.xxl },
  mascotAvatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: spacing.md
  },
  headline: { fontSize: 24, fontWeight: "600", color: colors.fg },
  recorde: { marginTop: spacing.sm, fontSize: 12, fontWeight: "700", color: colors.accent, backgroundColor: `${colors.accent}22`, paddingHorizontal: spacing.sm, paddingVertical: 4, borderRadius: radius.pill, overflow: "hidden" },
  score: { fontSize: 52, fontWeight: "600", color: colors.fg, marginTop: spacing.lg },
  pct: { fontSize: 16, color: colors.accent, fontWeight: "700", marginTop: spacing.xs },
  tema: { fontSize: 13, color: colors.muted, marginTop: spacing.sm },
  spacer: { flex: 1, minHeight: spacing.xxl, width: "100%" },
  actions: { width: "100%" },
  ctaPrimary: { backgroundColor: colors.accent, borderRadius: radius.lg, paddingVertical: spacing.lg, alignItems: "center", minHeight: 44 },
  ctaPrimaryText: { color: "#fff", fontSize: 17, fontWeight: "600" },
  ctaSecondary: { marginTop: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, paddingVertical: spacing.md + 3, alignItems: "center", minHeight: 44 },
  ctaSecondaryText: { color: colors.fg, fontSize: 15, fontWeight: "600" }
});
