import { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet } from "react-native";
import { colors, spacing, motion } from "../theme/tokens";

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
  const pop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!tipo) return;
    pop.setValue(0);
    Animated.timing(pop, { toValue: 1, duration: motion.medium, useNativeDriver: true }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tipo, mensagem]);

  const isHappy = tipo === "acerto" || tipo === "powerup";
  const isSad = tipo === "erro" || tipo === "tempo";

  // Happy reactions bounce/scale up; sad reactions shake side to side —
  // mirrors the prototype's mascot-bounce/mascot-shake keyframes.
  const scale = isHappy ? pop.interpolate({ inputRange: [0, 0.35, 0.65, 1], outputRange: [1, 1.18, 0.95, 1] }) : 1;
  const translateX = isSad
    ? pop.interpolate({ inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1], outputRange: [0, -4, 4, -3, 3, 0] })
    : 0;

  return (
    <View style={styles.wrap}>
      <Animated.View
        testID="mascot-avatar"
        style={{ ...styles.avatar, borderColor: borderColorFor(tipo), transform: [{ scale }, { translateX }] }}
      >
        <Image source={require("../../assets/icon.png")} style={styles.avatarImage} />
      </Animated.View>
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
  avatarImage: { width: 34, height: 34, borderRadius: 17 },
  bubble: { fontSize: 12.5, fontWeight: "600", color: colors.fg }
});
