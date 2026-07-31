import { useMemo, useRef } from "react";
import { View, Text, Image, ScrollView, Pressable, StyleSheet, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { useGame } from "../context/GameContext";
import { TEMAS, DIFICULDADES } from "../data/temas";
import { QUESTOES_DB } from "../data/questoes";
import { filterPool } from "../lib/gameLogic";
import { colors, spacing, radius, type } from "../theme/tokens";
import { Chip } from "../components/Chip";
import { MetaDiariaCard } from "../components/MetaDiariaCard";
import { CronometroSwitch } from "../components/CronometroSwitch";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { InfoIcon } from "../components/icons";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  const { state, setTema, setDificuldade, toggleCronometro, sortearAleatorio, iniciarRodada } = useGame();
  const insets = useSafeAreaInsets();
  const reducedMotion = useReducedMotion();
  const diceSpin = useRef(new Animated.Value(0)).current;

  const poolCount = useMemo(
    () => filterPool(QUESTOES_DB, state.tema, state.dificuldade).length,
    [state.tema, state.dificuldade]
  );

  const handleSortear = () => {
    if (reducedMotion) {
      sortearAleatorio();
      return;
    }
    diceSpin.setValue(0);
    Animated.timing(diceSpin, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    sortearAleatorio();
  };

  const diceRotate = diceSpin.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] });

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { flexGrow: 1, paddingTop: spacing.xl + insets.top, paddingBottom: spacing.xxl + insets.bottom }
      ]}
    >
      <View style={styles.brandRow}>
        <Image source={require("../../assets/icon.png")} style={styles.brandMark} />
        <Text style={styles.brandName}>Toga</Text>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Bora revisar direito hoje?</Text>
        <Pressable
          style={styles.aboutButton}
          onPress={() => navigation.navigate("About")}
          accessibilityRole="button"
          accessibilityLabel="Sobre o Toga"
          hitSlop={8}
        >
          <InfoIcon size={20} color={colors.muted} />
        </Pressable>
      </View>

      <MetaDiariaCard />

      <View style={styles.modeRow}>
        <CronometroSwitch active={state.cronometroAtivo} onToggle={toggleCronometro} />
        <Pressable style={styles.sortearButton} onPress={handleSortear} accessibilityLabel="Sortear tema e dificuldade">
          <Animated.View style={{ transform: [{ rotate: diceRotate }] }}>
            <MaterialCommunityIcons name="dice-multiple-outline" size={22} color={colors.accentText} />
          </Animated.View>
        </Pressable>
      </View>

      <Text style={styles.sectionLabel}>Tema</Text>
      <View style={styles.chipGrid}>
        {TEMAS.map((tema) => (
          <Chip
            key={tema}
            label={tema}
            selected={state.tema === tema}
            color={colors.temas[tema]}
            onPress={() => setTema(tema)}
          />
        ))}
      </View>

      <Text style={styles.sectionLabel}>Dificuldade</Text>
      <View style={styles.chipRow}>
        {DIFICULDADES.map((d) => (
          <Chip
            key={d.value}
            label={d.label}
            selected={state.dificuldade === d.value}
            color={d.value === "facil" ? colors.success : d.value === "media" ? colors.mediaDificuldade : colors.danger}
            onPress={() => setDificuldade(d.value)}
          />
        ))}
      </View>

      <Text style={styles.poolInfo}>{poolCount} questões disponíveis nesse filtro</Text>

      <View style={styles.spacer} />

      <Pressable
        style={[styles.ctaPrimary, poolCount === 0 && styles.ctaDisabled]}
        disabled={poolCount === 0}
        onPress={() => {
          iniciarRodada();
          navigation.navigate("Game");
        }}
      >
        <Text style={styles.ctaPrimaryText}>Iniciar rodada</Text>
      </Pressable>

      <Pressable style={styles.ctaSecondary} onPress={() => navigation.navigate("History")}>
        <Text style={styles.ctaSecondaryText}>Ver histórico</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.xl, paddingBottom: spacing.xxl },
  brandRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  brandMark: { width: 34, height: 34, borderRadius: radius.sm + 2 },
  brandName: { fontSize: 15, fontWeight: "600", color: colors.muted },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: spacing.lg },
  title: { ...type.title, color: colors.fg, flexShrink: 1 },
  aboutButton: { width: 32, height: 32, alignItems: "center", justifyContent: "center", marginLeft: spacing.sm },
  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.xl, marginBottom: spacing.sm },
  modeRow: { flexDirection: "row", alignItems: "stretch", gap: spacing.sm, marginTop: spacing.lg },
  sortearButton: { width: 44, minHeight: 44, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center" },
  chipGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  poolInfo: { ...type.small, marginTop: spacing.lg },
  spacer: { flex: 1, minHeight: spacing.xl },
  ctaPrimary: { backgroundColor: colors.accent, borderRadius: radius.lg, paddingVertical: spacing.lg, alignItems: "center", minHeight: 44 },
  ctaDisabled: { opacity: 0.4 },
  ctaPrimaryText: { color: "#fff", fontSize: 17, fontWeight: "600" },
  ctaSecondary: { marginTop: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, paddingVertical: spacing.md + 3, alignItems: "center", minHeight: 44 },
  ctaSecondaryText: { color: colors.fg, fontSize: 15, fontWeight: "600" }
});
