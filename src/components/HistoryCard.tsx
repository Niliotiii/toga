import { View, Text, StyleSheet } from "react-native";
import { HistoricoEntry } from "../types";
import { colors, radius, spacing } from "../theme/tokens";

interface Props {
  entry: HistoricoEntry;
}

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
  bottom: { flexDirection: "row", justifyContent: "space-between", marginTop: spacing.sm },
  meta: { fontSize: 12.5, color: colors.muted },
  bar: { height: 4, borderRadius: radius.pill, backgroundColor: colors.border, marginTop: spacing.sm, overflow: "hidden" },
  barFill: { height: "100%", backgroundColor: colors.accent }
});
