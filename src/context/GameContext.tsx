import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { Dificuldade, Questao } from "../types";
import { QUESTOES_DB } from "../data/questoes";
import { TEMAS, DIFICULDADES } from "../data/temas";
import { buildRodada, sortearTemaEDificuldade, shuffle } from "../lib/gameLogic";
import { registrarRespostaMeta, getCronometroPref, setCronometroPref } from "../services/storage";

const ROUND_SIZE = 5;
const POWERUP_MAX = 2;

interface GameState {
  tema: string;
  dificuldade: Dificuldade;
  cronometroAtivo: boolean;
  rodada: Questao[];
  indice: number;
  acertos: number;
  combo: number;
  comboMax: number;
  respondida: boolean;
  powerups: { pular: number; eliminar: number; bomba: number };
  eliminadasQuestaoAtual: boolean;
  bombadasQuestaoAtual: boolean;
}

const initialState: GameState = {
  tema: TEMAS[0],
  dificuldade: "media",
  cronometroAtivo: false,
  rodada: [],
  indice: 0,
  acertos: 0,
  combo: 0,
  comboMax: 0,
  respondida: false,
  powerups: { pular: 1, eliminar: 1, bomba: 1 },
  eliminadasQuestaoAtual: false,
  bombadasQuestaoAtual: false
};

interface GameContextValue {
  state: GameState;
  setTema(t: string): void;
  setDificuldade(d: Dificuldade): void;
  toggleCronometro(): Promise<void>;
  sortearAleatorio(): void;
  iniciarRodada(): void;
  responder(indiceEscolhido: number): void;
  usarPular(): void;
  usarEliminar(): number[];
  usarBomba(): number[];
  avancar(): void;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;
  // Mirrors "used eliminar for the current question" synchronously, so two
  // back-to-back calls to usarEliminar() within the same JS tick (no render
  // in between) can't both pass the outer guard off a stale stateRef
  // snapshot. Reset alongside eliminadasQuestaoAtual in iniciarRodada/avancar.
  const usedEliminarThisQuestionRef = useRef(false);
  // Mirrors "used bomba for the current question" synchronously, mirroring
  // usedEliminarThisQuestionRef above.
  const usedBombaThisQuestionRef = useRef(false);
  // Tracks whether the user has manually toggled cronometro since mount.
  // The storage-hydration effect below resolves asynchronously and must
  // never clobber a toggle the user already performed while it was still
  // in flight, so it checks this ref before applying its result.
  const userToggledCronometroRef = useRef(false);

  useEffect(() => {
    getCronometroPref().then((v) => {
      if (userToggledCronometroRef.current) return;
      setState((s) => ({ ...s, cronometroAtivo: v }));
    });
  }, []);

  const setTema = useCallback((t: string) => setState((s) => ({ ...s, tema: t })), []);
  const setDificuldade = useCallback((d: Dificuldade) => setState((s) => ({ ...s, dificuldade: d })), []);

  const toggleCronometro = useCallback(async () => {
    userToggledCronometroRef.current = true;
    const novo = !stateRef.current.cronometroAtivo;
    // Flip in-memory state synchronously first so the UI (and any screen
    // that mounts right after this call, e.g. GameScreen after a quick
    // "Iniciar rodada" tap) never observes a stale cronometroAtivo while
    // the AsyncStorage write below is still in flight.
    setState((s) => ({ ...s, cronometroAtivo: novo }));
    await setCronometroPref(novo);
  }, []);

  const sortearAleatorio = useCallback(() => {
    const escolha = sortearTemaEDificuldade(QUESTOES_DB, TEMAS, DIFICULDADES.map((d) => d.value));
    if (!escolha) return;
    setState((s) => ({ ...s, tema: escolha.tema, dificuldade: escolha.dificuldade }));
  }, []);

  const iniciarRodada = useCallback(() => {
    usedEliminarThisQuestionRef.current = false;
    usedBombaThisQuestionRef.current = false;
    setState((s) => ({
      ...s,
      rodada: buildRodada(QUESTOES_DB, s.tema, s.dificuldade, ROUND_SIZE),
      indice: 0,
      acertos: 0,
      combo: 0,
      comboMax: 0,
      respondida: false,
      powerups: { pular: 1, eliminar: 1, bomba: 1 },
      eliminadasQuestaoAtual: false,
      bombadasQuestaoAtual: false
    }));
  }, []);

  const responder = useCallback((indiceEscolhido: number) => {
    // acertou is computed up front from stateRef (mirroring the usarEliminar
    // pattern below) so registrarRespostaMeta() -- an AsyncStorage side
    // effect -- can be called once from the outer body of responder instead
    // of from inside the setState updater. Updaters are not a safe place for
    // side effects: React may invoke them more than once per commit (e.g.
    // under StrictMode's double-invocation in dev), which would double-count
    // the daily meta counter.
    const s0 = stateRef.current;
    if (s0.respondida) return;
    const q = s0.rodada[s0.indice];
    const acertou = indiceEscolhido === q.resposta_correta;

    setState((s) => {
      if (s.respondida) return s;
      const combo = acertou ? s.combo + 1 : 0;
      let powerups = s.powerups;
      if (acertou && combo > 0 && combo % 3 === 0) {
        powerups = {
          ...powerups,
          eliminar: Math.min(POWERUP_MAX, powerups.eliminar + (powerups.eliminar < POWERUP_MAX ? 1 : 0)),
          bomba: Math.min(POWERUP_MAX, powerups.bomba + (powerups.bomba < POWERUP_MAX ? 1 : 0))
        };
      }
      return {
        ...s,
        respondida: true,
        acertos: acertou ? s.acertos + 1 : s.acertos,
        combo,
        comboMax: Math.max(s.comboMax, combo),
        powerups
      };
    });

    registrarRespostaMeta();
  }, []);

  const usarPular = useCallback(() => {
    setState((s) => {
      if (s.respondida || s.powerups.pular <= 0) return s;
      return { ...s, respondida: true, powerups: { ...s.powerups, pular: s.powerups.pular - 1 } };
    });
  }, []);

  // Indices are computed synchronously from the current (ref-mirrored) state
  // *before* calling setState, rather than being captured from inside the
  // setState updater closure. Updater functions passed to setState are not
  // guaranteed to run synchronously before the enclosing call returns (React
  // may defer invoking them to the render/commit phase), so a variable
  // assigned inside the updater can still be unset when usarEliminar's
  // `return removidos` executes. Computing it up front avoids that race
  // entirely, and the guard conditions are re-checked inside the updater so
  // the state transition itself still only applies once per question.
  const usarEliminar = useCallback((): number[] => {
    const s = stateRef.current;
    const q = s.rodada[s.indice];
    if (
      s.respondida ||
      s.powerups.eliminar <= 0 ||
      s.eliminadasQuestaoAtual ||
      usedEliminarThisQuestionRef.current ||
      !q
    ) {
      return [];
    }
    // Flip synchronously so a second call in the same tick (before any
    // render/effect flushes stateRef) is rejected by the guard above.
    usedEliminarThisQuestionRef.current = true;

    const errados: number[] = [];
    q.alternativas.forEach((_, idx) => {
      if (idx !== q.resposta_correta) errados.push(idx);
    });
    const removidos = shuffle(errados).slice(0, 2);

    setState((curr) => {
      const currQ = curr.rodada[curr.indice];
      if (
        curr.respondida ||
        curr.powerups.eliminar <= 0 ||
        curr.eliminadasQuestaoAtual ||
        !currQ ||
        currQ.id !== q.id
      ) {
        return curr;
      }
      return {
        ...curr,
        eliminadasQuestaoAtual: true,
        powerups: { ...curr.powerups, eliminar: curr.powerups.eliminar - 1 }
      };
    });

    return removidos;
  }, []);

  // Mirrors usarEliminar exactly, removing 3 wrong alternatives instead of 2.
  const usarBomba = useCallback((): number[] => {
    const s = stateRef.current;
    const q = s.rodada[s.indice];
    if (
      s.respondida ||
      s.powerups.bomba <= 0 ||
      s.bombadasQuestaoAtual ||
      usedBombaThisQuestionRef.current ||
      !q
    ) {
      return [];
    }
    usedBombaThisQuestionRef.current = true;

    const errados: number[] = [];
    q.alternativas.forEach((_, idx) => {
      if (idx !== q.resposta_correta) errados.push(idx);
    });
    const removidos = shuffle(errados).slice(0, 3);

    setState((curr) => {
      const currQ = curr.rodada[curr.indice];
      if (
        curr.respondida ||
        curr.powerups.bomba <= 0 ||
        curr.bombadasQuestaoAtual ||
        !currQ ||
        currQ.id !== q.id
      ) {
        return curr;
      }
      return {
        ...curr,
        bombadasQuestaoAtual: true,
        powerups: { ...curr.powerups, bomba: curr.powerups.bomba - 1 }
      };
    });

    return removidos;
  }, []);

  const avancar = useCallback(() => {
    usedEliminarThisQuestionRef.current = false;
    usedBombaThisQuestionRef.current = false;
    setState((s) => {
      const proximoIndice = s.indice + 1;
      if (proximoIndice >= s.rodada.length) return { ...s, indice: proximoIndice };
      return { ...s, indice: proximoIndice, respondida: false, eliminadasQuestaoAtual: false, bombadasQuestaoAtual: false };
    });
  }, []);

  return (
    <GameContext.Provider
      value={{ state, setTema, setDificuldade, toggleCronometro, sortearAleatorio, iniciarRodada, responder, usarPular, usarEliminar, usarBomba, avancar }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within a GameProvider");
  return ctx;
}
