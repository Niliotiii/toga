import { Pressable, View, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

interface Props {
  active: boolean;
  onToggle: () => void;
}

export function CronometroSwitch({ active, onToggle }: Props) {
  return (
    <Pressable
      onPress={onToggle}
      style={styles.row}
      accessibilityRole="switch"
      accessibilityState={{ checked: active }}
    >
      <View>
        <Text style={styles.title}>Contrarrelógio</Text>
        <Text style={styles.sub}>20s por questão</Text>
      </View>
      <View style={[styles.track, active && styles.trackOn]}>
        <View style={[styles.thumb, active && styles.thumbOn]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, backgroundColor: colors.surface, minHeight: 44 },
  title: { fontSize: 14.5, fontWeight: "600", color: colors.fg },
  sub: { fontSize: 12, color: colors.muted },
  track: { width: 44, height: 26, borderRadius: radius.pill, backgroundColor: colors.border, justifyContent: "center" },
  trackOn: { backgroundColor: colors.accent },
  thumb: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#fff", marginLeft: 2 },
  thumbOn: { marginLeft: 20 }
});
