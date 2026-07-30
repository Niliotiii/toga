import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme/tokens";

interface Props {
  active: boolean;
}

const PIECES = 18;
const { width } = Dimensions.get("window");

export function Confetti({ active }: Props) {
  const anims = useRef(Array.from({ length: PIECES }, () => new Animated.Value(0))).current;

  useEffect(() => {
    if (!active) return;
    const animations = anims.map((v) =>
      Animated.timing(v, { toValue: 1, duration: 1200 + Math.random() * 400, useNativeDriver: true })
    );
    Animated.stagger(30, animations).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  return (
    <View style={styles.wrap} pointerEvents="none" testID="confetti">
      {anims.map((v, i) => (
        <Animated.View
          key={i}
          style={[
            styles.piece,
            {
              left: Math.random() * width,
              backgroundColor: i % 2 === 0 ? colors.accent : colors.success,
              transform: [
                { translateY: v.interpolate({ inputRange: [0, 1], outputRange: [0, 500] }) },
                { rotate: v.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "240deg"] }) }
              ],
              opacity: v.interpolate({ inputRange: [0, 1], outputRange: [1, 0] })
            }
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { ...StyleSheet.absoluteFill, overflow: "hidden" },
  piece: { position: "absolute", top: -10, width: 7, height: 12, borderRadius: 2 }
});
