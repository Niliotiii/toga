import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { useGame } from "../context/GameContext";
import { AlternativaButton } from "../components/AlternativaButton";
import { PowerupButton } from "../components/PowerupButton";
import { ScissorsIcon, SkipIcon } from "../components/icons";
import { Mascot, MascotTipo } from "../components/Mascot";
import { ParachuteMascot } from "../components/ParachuteMascot";
import { colors, spacing, radius } from "../theme/tokens";

const TEMPO_QUESTAO = 20;
const FRASES: Record<string, string[]> = {
  acerto: ["Boa!", "Isso aí!", "Mandou bem!", "Show de bola!"],
  erro: ["Quase!", "Próxima você pega!", "Segue o jogo."],
  tempo: ["O tempo voou!", "Foi por pouco!"],
  powerup: ["Power-up liberado!"]
};

function animateTo(value: Animated.Value, toValue: number, duration: number): Promise<void> {
  return new Promise((resolve) => {
    Animated.timing(value, { toValue, duration, useNativeDriver: true }).start(() => resolve());
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export function GameScreen({ navigation }: Props) {
  const { state, responder, usarPular, usarEliminar, avancar } = useGame();
  const insets = useSafeAreaInsets();
  const [eliminadas, setEliminadas] = useState<number[]>([]);
  const [mascotTipo, setMascotTipo] = useState<MascotTipo>(null);
  const [mascotMsg, setMascotMsg] = useState("");
  const [tempoRestante, setTempoRestante] = useState(TEMPO_QUESTAO);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [scissorsActive, setScissorsActive] = useState(false);
  const [pularAnimating, setPularAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rowLayouts = useRef<Record<number, { y: number; height: number }>>({});
  const scissorsY = useRef(new Animated.Value(0)).current;
  const scissorsOpacity = useRef(new Animated.Value(0)).current;
  const scissorsSnip = useRef(new Animated.Value(0)).current;
  const paraquedasY = useRef(new Animated.Value(-80)).current;
  const paraquedasOpacity = useRef(new Animated.Value(0)).current;
  const paraquedasWiggle = useRef(new Animated.Value(0)).current;

  const q = state.rodada[state.indice];

  const centerYFor = (index: number, iconSize: number) => {
    const row = rowLayouts.current[index];
    if (!row) return 0;
    return row.y + row.height / 2 - iconSize / 2;
  };

  const mostrarMascote = (tipo: Exclude<MascotTipo, null>) => {
    const frases = FRASES[tipo];
    setMascotMsg(frases[Math.floor(Math.random() * frases.length)]);
    setMascotTipo(tipo);
  };

  const pararCronometro = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleResponder = (indice: number) => {
    if (!q) return;
    setSelecionada(indice);
    responder(indice);
    // decide mascot reaction based on whether the choice matches resposta_correta
    if (indice === q.resposta_correta) mostrarMascote("acerto");
    else mostrarMascote(indice === -1 ? "tempo" : "erro");
  };

  useEffect(() => {
    setEliminadas([]);
    setMascotTipo(null);
    setMascotMsg("");
    setTempoRestante(TEMPO_QUESTAO);
    setSelecionada(null);
    setScissorsActive(false);
    setPularAnimating(false);
    scissorsOpacity.setValue(0);
    paraquedasOpacity.setValue(0);
    pararCronometro();
    if (state.cronometroAtivo && !state.respondida && q) {
      let ticksRestantes = Math.round(TEMPO_QUESTAO * 10);
      intervalRef.current = setInterval(() => {
        ticksRestantes -= 1;
        setTempoRestante(Math.max(0, ticksRestantes / 10));
        if (ticksRestantes <= 0) {
          pararCronometro();
          handleResponder(-1);
        }
      }, 100);
    }
    return pararCronometro;
    // Keyed on cronometroAtivo too (not just indice): if it flips while a
    // question is already showing (e.g. state was briefly stale right after
    // toggling on Home and starting a round before the toggle's AsyncStorage
    // write settled), the timer must start/stop instead of the effect
    // silently no-op'ing until the next question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.indice, state.cronometroAtivo]);

  useEffect(() => {
    if (state.respondida) pararCronometro();
  }, [state.respondida]);

  if (!q) {
    return <View style={styles.screen} />;
  }

  const ICON_SIZE = 28;

  const handleEliminar = async () => {
    if (scissorsActive || pularAnimating) return;
    const removidos = usarEliminar();
    if (!removidos.length) return;

    // Cut from the bottom-most eliminated row upward, matching "a tesoura subindo".
    const ordenados = [...removidos].sort((a, b) => b - a);

    setScissorsActive(true);
    scissorsSnip.setValue(0);
    scissorsY.setValue(centerYFor(ordenados[0], ICON_SIZE) + 36);
    scissorsOpacity.setValue(0);
    await animateTo(scissorsOpacity, 1, 120);

    for (const idx of ordenados) {
      await animateTo(scissorsY, centerYFor(idx, ICON_SIZE), 260);
      await animateTo(scissorsSnip, 1, 90);
      await animateTo(scissorsSnip, 0, 110);
      setEliminadas((prev) => [...prev, idx]);
    }

    await animateTo(scissorsOpacity, 0, 150);
    setScissorsActive(false);
  };

  const handlePular = async () => {
    if (state.respondida || state.powerups.pular <= 0 || pularAnimating || scissorsActive) return;
    const targetY = centerYFor(q.resposta_correta, 40);

    setPularAnimating(true);
    paraquedasWiggle.setValue(0);
    paraquedasY.setValue(-80);
    paraquedasOpacity.setValue(1);
    usarPular();

    const wiggleLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(paraquedasWiggle, { toValue: 1, duration: 280, useNativeDriver: true }),
        Animated.timing(paraquedasWiggle, { toValue: -1, duration: 280, useNativeDriver: true })
      ])
    );
    wiggleLoop.start();

    await animateTo(paraquedasY, targetY, 900);
    wiggleLoop.stop();
    await animateTo(paraquedasWiggle, 0, 100);
    await wait(250);
    await animateTo(paraquedasOpacity, 0, 220);
    setPularAnimating(false);
  };

  const scissorsRotate = scissorsSnip.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "-32deg"] });
  const paraquedasRotate = paraquedasWiggle.interpolate({ inputRange: [-1, 1], outputRange: ["-8deg", "8deg"] });

  const isUltima = state.indice + 1 >= state.rodada.length;

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: spacing.xl + insets.top }]}>
        <Text style={styles.progress}>Questão {state.indice + 1} de {state.rodada.length}</Text>
        <Text style={[styles.combo, state.combo >= 2 && styles.comboHot]}>Combo {state.combo}</Text>
      </View>

      {state.cronometroAtivo && !state.respondida && (
        <View style={styles.timerRow} testID="timer-row">
          <View style={styles.timerTrack}>
            <View
              style={[
                styles.timerFill,
                {
                  width: `${Math.max(0, Math.min(100, (tempoRestante / TEMPO_QUESTAO) * 100))}%`,
                  backgroundColor: tempoRestante <= 5 ? colors.danger : colors.accent
                }
              ]}
            />
          </View>
          <Text style={[styles.timerText, tempoRestante <= 5 && styles.timerTextUrgent]}>
            {Math.ceil(tempoRestante)}s
          </Text>
        </View>
      )}

      <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: spacing.xl }}>
        <Text style={styles.fonte}>{q.fonte}</Text>
        <Text style={styles.enunciado}>{q.enunciado}</Text>

        <View style={styles.altList}>
          {q.alternativas.map((alt, i) => {
            let altState: "default" | "correct" | "wrong" | "eliminated" = "default";
            if (state.respondida && !pularAnimating) {
              if (i === q.resposta_correta) altState = "correct";
              else if (i === selecionada) altState = "wrong";
            }
            if (eliminadas.includes(i)) altState = "eliminated";
            return (
              <View key={i} onLayout={(e) => { rowLayouts.current[i] = { y: e.nativeEvent.layout.y, height: e.nativeEvent.layout.height }; }}>
                <AlternativaButton
                  letra={String.fromCharCode(65 + i)}
                  texto={alt}
                  state={altState}
                  disabled={state.respondida || eliminadas.includes(i) || scissorsActive}
                  onPress={() => handleResponder(i)}
                  testID="alternativa-button"
                />
              </View>
            );
          })}

          {scissorsActive && (
            <Animated.View
              pointerEvents="none"
              style={[
                styles.scissorsOverlay,
                {
                  opacity: scissorsOpacity,
                  transform: [{ translateY: scissorsY }, { rotate: scissorsRotate }]
                }
              ]}
            >
              <ScissorsIcon size={ICON_SIZE} color={colors.danger} />
            </Animated.View>
          )}

          {pularAnimating && (
            <Animated.View
              pointerEvents="none"
              style={[
                styles.paraquedasOverlay,
                {
                  opacity: paraquedasOpacity,
                  transform: [{ translateY: paraquedasY }, { rotate: paraquedasRotate }]
                }
              ]}
            >
              <ParachuteMascot size={40} />
            </Animated.View>
          )}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: spacing.xl + insets.bottom }]}>
        <View style={styles.powerupsRow}>
          <PowerupButton
            testID="powerup-eliminar"
            icon={<ScissorsIcon size={24} color={colors.fg} />}
            label="Eliminar 2"
            count={state.powerups.eliminar}
            disabled={
              state.respondida ||
              state.powerups.eliminar <= 0 ||
              state.eliminadasQuestaoAtual ||
              scissorsActive ||
              pularAnimating
            }
            onPress={handleEliminar}
          />
          <PowerupButton
            testID="powerup-pular"
            icon={<SkipIcon size={24} color={colors.fg} />}
            label="Pular"
            count={state.powerups.pular}
            disabled={state.respondida || state.powerups.pular <= 0 || pularAnimating || scissorsActive}
            onPress={handlePular}
          />
        </View>
        {mascotTipo && <Mascot tipo={mascotTipo} mensagem={mascotMsg} />}
        {state.respondida && !pularAnimating && (
          <Pressable
            style={styles.btnProxima}
            onPress={() => {
              if (isUltima) {
                avancar();
                navigation.navigate("Result");
              } else {
                avancar();
              }
            }}
          >
            <Text style={styles.btnProximaText}>{isUltima ? "Ver resultado" : "Próxima questão"}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { padding: spacing.xl, paddingBottom: spacing.md, flexDirection: "row", justifyContent: "space-between" },
  progress: { fontSize: 13, fontWeight: "600", color: colors.muted },
  combo: { fontSize: 13, fontWeight: "700", color: colors.muted },
  comboHot: { color: colors.accent },
  timerRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm, paddingHorizontal: spacing.xl, marginBottom: spacing.sm },
  timerTrack: { flex: 1, height: 6, borderRadius: radius.pill, backgroundColor: colors.border, overflow: "hidden" },
  timerFill: { height: "100%", borderRadius: radius.pill },
  timerText: { fontSize: 12, fontWeight: "700", color: colors.muted, minWidth: 30, textAlign: "right" },
  timerTextUrgent: { color: colors.danger },
  body: { flex: 1, paddingHorizontal: spacing.xl },
  powerupsRow: { flexDirection: "row", justifyContent: "center", gap: spacing.lg, marginBottom: spacing.sm },
  fonte: { fontSize: 12, color: colors.muted, fontStyle: "italic" },
  enunciado: { fontSize: 19, lineHeight: 28, fontWeight: "500", color: colors.fg, marginTop: spacing.sm },
  altList: { gap: spacing.sm, marginTop: spacing.xl, position: "relative" },
  scissorsOverlay: { position: "absolute", right: spacing.md, top: 0 },
  paraquedasOverlay: { position: "absolute", left: "50%", marginLeft: -28, top: 0 },
  footer: { padding: spacing.xl, gap: spacing.sm },
  btnProxima: { backgroundColor: colors.fg, borderRadius: radius.lg, paddingVertical: spacing.lg, alignItems: "center", minHeight: 44 },
  btnProximaText: { color: colors.bg, fontSize: 15.5, fontWeight: "600" }
});
