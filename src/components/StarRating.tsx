import { View, StyleSheet } from "react-native";
import { colors } from "../theme/tokens";

interface Props {
  estrelas: 0 | 1 | 2 | 3;
}

export function StarRating({ estrelas }: Props) {
  return (
    <View style={styles.row}>
      {[0, 1, 2].map((i) => (
        <View
          key={i}
          testID="star"
          accessibilityState={{ selected: i < estrelas }}
          style={[styles.star, i < estrelas ? styles.filled : styles.empty]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, justifyContent: "center" },
  star: { width: 32, height: 32, borderRadius: 6 },
  filled: { backgroundColor: "#E8B93F" },
  empty: { backgroundColor: colors.border }
});
