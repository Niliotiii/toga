import { View, Image, StyleSheet } from "react-native";
import { colors } from "../theme/tokens";

interface Props {
  size?: number;
}

export function ParachuteMascot({ size = 40 }: Props) {
  const canopyWidth = size * 1.5;
  const canopyHeight = size * 0.75;
  const avatarInner = size * 0.7;

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
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: avatarInner, height: avatarInner, borderRadius: avatarInner / 2 }}
        />
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
