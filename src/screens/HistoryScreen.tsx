import { useCallback, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { getHistorico } from "../services/storage";
import { HistoricoEntry } from "../types";
import { HistoryCard } from "../components/HistoryCard";
import { ChevronLeftIcon } from "../components/icons";
import { colors, spacing } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "History">;

export function HistoryScreen({ navigation }: Props) {
  const [historico, setHistorico] = useState<HistoricoEntry[]>([]);
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      getHistorico().then(setHistorico);
    }, [])
  );

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: spacing.lg + insets.top }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn} accessibilityLabel="Voltar">
          <ChevronLeftIcon size={20} color={colors.fg} />
        </Pressable>
        <Text style={styles.title}>Histórico de rodadas</Text>
      </View>
      {historico.length === 0 ? (
        <Text style={styles.empty}>Você ainda não jogou nenhuma rodada. Volte ao início e comece a treinar.</Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(item) => item.id_rodada}
          contentContainerStyle={[styles.list, { paddingBottom: spacing.xxl + insets.bottom }]}
          renderItem={({ item }) => <HistoryCard entry={item} />}
          ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { flexDirection: "row", alignItems: "center", gap: spacing.md, padding: spacing.lg },
  backBtn: { width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 18, fontWeight: "600", color: colors.fg },
  list: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xxl },
  empty: { textAlign: "center", padding: spacing.xxl, color: colors.muted, fontSize: 14 }
});
