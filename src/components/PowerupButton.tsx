import { Pressable, Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

interface Props {
  label: string;
  count: number;
  disabled: boolean;
  onPress: () => void;
}

export function PowerupButton({ label, count, disabled, onPress }: Props) {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={[styles.btn, disabled && styles.disabled]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.countBadge}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { flexDirection: "row", alignItems: "center", gap: spacing.xs, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, borderRadius: radius.pill, paddingVertical: spacing.sm, paddingHorizontal: spacing.md, minHeight: 36 },
  disabled: { opacity: 0.4 },
  label: { fontSize: 12.5, fontWeight: "600", color: colors.fg },
  countBadge: { backgroundColor: colors.bg, borderRadius: radius.pill, paddingHorizontal: spacing.xs + 2 },
  countText: { fontSize: 11, color: colors.muted }
});
