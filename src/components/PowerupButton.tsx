import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { colors, radius } from "../theme/tokens";

interface Props {
  icon: React.ReactNode;
  label: string;
  count: number;
  disabled: boolean;
  onPress: () => void;
  testID?: string;
}

export function PowerupButton({ icon, label, count, disabled, onPress, testID }: Props) {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${count} disponíveis`}
      style={[styles.card, disabled && styles.cardDisabled]}
    >
      {icon}
      <View style={styles.countBadge}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2
  },
  cardDisabled: { opacity: 0.35 },
  countBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.fg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4
  },
  countText: { fontSize: 11, fontWeight: "700", color: colors.bg }
});
