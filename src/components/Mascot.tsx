import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme/tokens";

export type MascotTipo = "acerto" | "erro" | "tempo" | "powerup" | null;

interface Props {
  tipo: MascotTipo;
  mensagem: string;
}

export function Mascot({ tipo, mensagem }: Props) {
  const getAvatarStyle = () => {
    const baseStyle = {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      backgroundColor: colors.surface
    };

    if (tipo === "acerto" || tipo === "powerup") {
      return { ...baseStyle, borderColor: colors.success };
    } else if (tipo === "erro" || tipo === "tempo") {
      return { ...baseStyle, borderColor: colors.danger };
    }
    return { ...baseStyle, borderColor: colors.border };
  };

  return (
    <View style={styles.wrap}>
      <View testID="mascot-avatar" style={getAvatarStyle()} />
      <Text testID="mascot-bubble" style={styles.bubble}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 34 },
  bubble: { fontSize: 12.5, fontWeight: "600", color: colors.fg }
});
