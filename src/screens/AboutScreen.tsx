import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { ChevronLeftIcon } from "../components/icons";
import { colors, spacing, type } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "About">;

export function AboutScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: spacing.lg + insets.top }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn} accessibilityLabel="Voltar">
          <ChevronLeftIcon size={20} color={colors.fg} />
        </Pressable>
        <Text style={styles.title}>Sobre o Toga</Text>
      </View>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: spacing.xxl + insets.bottom }]}>
        <Text style={styles.paragraph}>
          O Toga é um microapp gratuito e 100% offline para treinar a resolução de questões de
          concursos e exames na área do Direito.
        </Text>
        <Text style={styles.paragraph}>
          As questões são baseadas em provas públicas de bancas examinadoras (CESPE/CEBRASPE, FGV,
          VUNESP, FCC, entre outras). O app serve para você validar e exercitar seu conhecimento —
          não para substituir o estudo da lei, da doutrina ou da jurisprudência.
        </Text>
        <Text style={styles.disclaimerLabel}>Aviso importante</Text>
        <Text style={styles.paragraph}>
          O conteúdo apresentado não deve ser considerado uma verdade absoluta. Gabaritos podem
          conter imprecisões, entendimentos podem mudar com o tempo e a legislação pode ser
          atualizada após a publicação de uma questão. Sempre confirme informações relevantes em
          fontes oficiais antes de utilizá-las para fins de prova ou prática profissional.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { flexDirection: "row", alignItems: "center", gap: spacing.md, padding: spacing.lg },
  backBtn: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 18, fontWeight: "600", color: colors.fg },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.sm, gap: spacing.md },
  paragraph: { ...type.body, color: colors.fg },
  disclaimerLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.warn,
    textTransform: "uppercase",
    letterSpacing: 0.4,
    marginTop: spacing.sm
  }
});
