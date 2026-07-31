import { View, StyleSheet } from "react-native";
import { colors } from "../theme/tokens";
import { MascotFace } from "./MascotFace";

interface Props {
  size?: number;
}

export function ParachuteMascot({ size = 40 }: Props) {
  const canopyWidth = size * 1.5;
  const canopyHeight = size * 0.75;

  return (
    <View style={styles.wrap}>
      <View
        style={[
          styles.canopy,
          { width: canopyWidth, height: canopyHeight, borderTopLeftRadius: canopyHeight, borderTopRightRadius: canopyHeight }
        ]}
      />
      <View style={[styles.strings, { width: canopyWidth * 0.6 }]}>
        <View style={styles.string} />
        <View style={styles.string} />
      </View>
      <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
        <MascotFace size={size * 0.55} color={colors.fg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center" },
  canopy: { backgroundColor: colors.accent, borderWidth: 1, borderColor: colors.accentText },
  strings: { flexDirection: "row", justifyContent: "space-between", height: 8 },
  string: { width: 1, height: 8, backgroundColor: colors.muted },
  avatar: {
    marginTop: -2,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }
});
