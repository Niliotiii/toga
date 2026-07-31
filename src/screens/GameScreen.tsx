import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { useGame } from "../context/GameContext";
import { AlternativaButton } from "../components/AlternativaButton";
import { PowerupButton } from "../components/PowerupButton";
import { Mascot, MascotTipo } from "../components/Mascot";
import { colors, spacing, radius } from "../theme/tokens";

const TEMPO_QUESTAO = 20;
const FRASES: Record<string, string[]> = {
  acerto: ["Boa!", "Isso aí!", "Mandou bem!", "Show de bola!"],
  erro: ["Quase!", "Próxima você pega!", "Segue o jogo."],
  tempo: ["O tempo voou!", "Foi por pouco!"],
  powerup: ["Power-up liberado!"]
};

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export function GameScreen({ navigation }: Props) {
  const { state, responder, usarPular, usarEliminar, avancar } = useGame();
  const insets = useSafeAreaInsets();
  const [eliminadas, setEliminadas] = useState<number[]>([]);
  const [mascotTipo, setMascotTipo] = useState<MascotTipo>(null);
  const [mascotMsg, setMascotMsg] = useState("");
  const [tempoRestante, setTempoRestante] = useState(TEMPO_QUESTAO);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const q = state.rodada[state.indice];

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

  const handleEliminar = () => {
    const removidos = usarEliminar();
    if (removidos.length) setEliminadas(removidos);
  };

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
            if (state.respondida) {
              if (i === q.resposta_correta) altState = "correct";
              else if (i === selecionada) altState = "wrong";
            }
            if (eliminadas.includes(i)) altState = "eliminated";
            return (
              <AlternativaButton
                key={i}
                letra={String.fromCharCode(65 + i)}
                texto={alt}
                state={altState}
                disabled={state.respondida || eliminadas.includes(i)}
                onPress={() => handleResponder(i)}
                testID="alternativa-button"
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: spacing.xl + insets.bottom }]}>
        <View style={styles.powerupsRow}>
          <PowerupButton
            testID="powerup-eliminar"
            icon="✂️"
            label="Eliminar 2"
            count={state.powerups.eliminar}
            disabled={state.respondida || state.powerups.eliminar <= 0 || state.eliminadasQuestaoAtual}
            onPress={handleEliminar}
          />
          <PowerupButton
            testID="powerup-pular"
            icon="⏭️"
            label="Pular"
            count={state.powerups.pular}
            disabled={state.respondida || state.powerups.pular <= 0}
            onPress={usarPular}
          />
        </View>
        {mascotTipo && <Mascot tipo={mascotTipo} mensagem={mascotMsg} />}
        {state.respondida && (
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
  altList: { gap: spacing.sm, marginTop: spacing.xl },
  footer: { padding: spacing.xl, gap: spacing.sm },
  btnProxima: { backgroundColor: colors.fg, borderRadius: radius.lg, paddingVertical: spacing.lg, alignItems: "center", minHeight: 44 },
  btnProximaText: { color: colors.bg, fontSize: 15.5, fontWeight: "600" }
});
