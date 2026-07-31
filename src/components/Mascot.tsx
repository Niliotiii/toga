import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme/tokens";
import { MascotFace } from "./MascotFace";

export type MascotTipo = "acerto" | "erro" | "tempo" | "powerup" | null;

interface Props {
  tipo: MascotTipo;
  mensagem: string;
}

function borderColorFor(tipo: MascotTipo): string {
  if (tipo === "acerto" || tipo === "powerup") return colors.success;
  if (tipo === "erro" || tipo === "tempo") return colors.danger;
  return colors.border;
}

export function Mascot({ tipo, mensagem }: Props) {
  return (
    <View style={styles.wrap}>
      <View testID="mascot-avatar" style={{ ...styles.avatar, borderColor: borderColorFor(tipo) }}>
        <MascotFace size={20} color={colors.fg} />
      </View>
      <Text testID="mascot-bubble" style={styles.bubble}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 34 },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  bubble: { fontSize: 12.5, fontWeight: "600", color: colors.fg }
});
