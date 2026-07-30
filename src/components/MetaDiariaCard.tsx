import { useEffect, useState, useCallback, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { getMetaDiaria, META_ALVO } from "../services/storage";
import { colors, radius, spacing } from "../theme/tokens";

export function MetaDiariaCard() {
  const [respondidas, setRespondidas] = useState(0);
  // Read the navigation context directly (instead of useFocusEffect/useNavigation)
  // so this component can render standalone in tests without a NavigationContainer,
  // while still refreshing on focus when it's actually mounted inside one.
  const navigation = useContext(NavigationContext);

  const load = useCallback(() => {
    getMetaDiaria().then((m) => setRespondidas(m.respondidas));
  }, []);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (!navigation) return;
    return navigation.addListener("focus", load);
  }, [navigation, load]);

  const pct = Math.min(100, Math.round((respondidas / META_ALVO) * 100));
  const completo = respondidas >= META_ALVO;

  return (
    <View style={[styles.card, completo && styles.cardComplete]}>
      <View style={styles.top}>
        <Text style={[styles.label, completo && styles.labelComplete]}>
          {Math.min(respondidas, META_ALVO)} / {META_ALVO} hoje
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct}%` }, completo && styles.fillComplete]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: spacing.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, backgroundColor: colors.surface },
  cardComplete: { borderColor: colors.success },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  label: { fontSize: 13, fontWeight: "600", color: colors.muted },
  labelComplete: { color: colors.success },
  track: { height: 6, borderRadius: 4, backgroundColor: colors.border, marginTop: spacing.sm, overflow: "hidden" },
  fill: { height: "100%", backgroundColor: colors.accent, borderRadius: 4 },
  fillComplete: { backgroundColor: colors.success }
});
