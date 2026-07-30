import { Pressable, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

interface ChipProps {
  label: string;
  selected: boolean;
  color?: string;
  onPress: () => void;
}

export function Chip({ label, selected, color, onPress }: ChipProps) {
  const bg = selected ? (color ?? colors.fg) : colors.surface;
  const borderColor = selected ? (color ?? colors.fg) : colors.border;
  const textColor = selected ? colors.surface : colors.fg;
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, { backgroundColor: bg, borderColor }]}
      accessibilityRole="button"
      accessibilityState={{ selected }}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md + 2,
    minHeight: 44,
    justifyContent: "center"
  },
  label: { fontSize: 14, fontWeight: "500" }
});
