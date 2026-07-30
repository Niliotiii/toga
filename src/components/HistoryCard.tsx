import { View, Text, StyleSheet } from "react-native";
import { HistoricoEntry } from "../types";
import { DIF_LABEL } from "../data/temas";
import { colors, radius, spacing } from "../theme/tokens";

interface Props {
  entry: HistoricoEntry;
}

const DIF_BG: Record<string, string> = { facil: `${colors.success}22`, media: "#F5E1BF", dificil: `${colors.danger}22` };
const DIF_FG: Record<string, string> = { facil: colors.success, media: colors.mediaDificuldade, dificil: colors.danger };

export function HistoryCard({ entry }: Props) {
  const data = new Date(entry.data_hora);
  const dataFmt = data.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  const dot = colors.temas[entry.tema] ?? colors.muted;

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.temaRow}>
          <View style={[styles.dot, { backgroundColor: dot }]} />
          <Text style={styles.tema}>{entry.tema}</Text>
        </View>
        <View style={[styles.difBadge, { backgroundColor: DIF_BG[entry.dificuldade] }]}>
          <Text style={[styles.difText, { color: DIF_FG[entry.dificuldade] }]}>{DIF_LABEL[entry.dificuldade]}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.meta}>{dataFmt}</Text>
        <Text style={styles.meta}>{entry.acertos}/{entry.questoes_total} · {entry.aproveitamento}%</Text>
      </View>
      <View style={styles.bar}>
        <View style={[styles.barFill, { width: `${entry.aproveitamento}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md, backgroundColor: colors.surface },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  temaRow: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  dot: { width: 8, height: 8, borderRadius: 4 },
  tema: { fontSize: 14, fontWeight: "600", color: colors.fg },
  difBadge: { paddingHorizontal: spacing.sm, paddingVertical: 3, borderRadius: radius.pill },
  difText: { fontSize: 11, fontWeight: "700" },
  bottom: { flexDirection: "row", justifyContent: "space-between", marginTop: spacing.sm },
  meta: { fontSize: 12.5, color: colors.muted },
  bar: { height: 4, borderRadius: 4, backgroundColor: colors.border, marginTop: spacing.sm, overflow: "hidden" },
  barFill: { height: "100%", backgroundColor: colors.accent }
});
