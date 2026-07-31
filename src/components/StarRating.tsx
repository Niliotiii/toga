import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, spacing } from "../theme/tokens";

interface Props {
  estrelas: 0 | 1 | 2 | 3;
}

// Same five-point star path used by the original prototype (app.js starSvg()).
const STAR_PATH = "M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z";

export function StarRating({ estrelas }: Props) {
  return (
    <View style={styles.row}>
      {[0, 1, 2].map((i) => {
        const filled = i < estrelas;
        return (
          <View key={i} testID="star" accessibilityState={{ selected: filled }}>
            <Svg width={36} height={36} viewBox="0 0 24 24">
              <Path
                d={STAR_PATH}
                fill={filled ? colors.gold : "none"}
                stroke={filled ? colors.gold : colors.border}
                strokeWidth={1.6}
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.sm, justifyContent: "center" }
});
