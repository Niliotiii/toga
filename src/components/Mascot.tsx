import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme/tokens";

export type MascotTipo = "acerto" | "erro" | "tempo" | "powerup" | null;

interface Props {
  tipo: MascotTipo;
  mensagem: string;
}

export function Mascot({ mensagem }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatar} />
      <Text testID="mascot-bubble" style={styles.bubble}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 34 },
  avatar: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
  bubble: { fontSize: 12.5, fontWeight: "600", color: colors.fg }
});
