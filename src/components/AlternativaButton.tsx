import { Pressable, Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";
import { CheckIcon, CloseIcon } from "./icons";

type AltState = "default" | "correct" | "wrong" | "eliminated";

interface Props {
  letra: string;
  texto: string;
  state: AltState;
  disabled: boolean;
  onPress: () => void;
  testID?: string;
}

export function AlternativaButton({ letra, texto, state, disabled, onPress, testID }: Props) {
  const border = state === "correct" ? colors.success : state === "wrong" ? colors.danger : colors.border;
  const letterBg = state === "correct" ? colors.success : state === "wrong" ? colors.danger : colors.bg;
  const letterColor = state === "correct" || state === "wrong" ? "#fff" : colors.muted;
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      accessibilityState={{ disabled, selected: state === "correct" || state === "wrong" }}
      style={[styles.alt, { borderColor: border }, state === "eliminated" && styles.eliminated]}
    >
      <View style={[styles.letra, { backgroundColor: letterBg, borderColor: border }]}>
        <Text style={[styles.letraText, { color: letterColor }]}>{letra}</Text>
      </View>
      <Text style={styles.texto}>{texto}</Text>
      {state === "correct" && <CheckIcon size={20} color={colors.success} />}
      {state === "wrong" && <CloseIcon size={20} color={colors.danger} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  alt: { flexDirection: "row", alignItems: "flex-start", gap: spacing.md, borderWidth: 1, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, minHeight: 44 },
  eliminated: { opacity: 0.35 },
  letra: { width: 24, height: 24, borderRadius: 12, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  letraText: { fontSize: 12, fontWeight: "700" },
  texto: { flex: 1, fontSize: 14.5, lineHeight: 21, color: colors.fg }
});
