import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistoricoEntry, MetaDiaria } from "../types";

export const HIST_KEY = "@app_direito_historico";
export const META_KEY = "@app_direito_meta_diaria";
export const CRONOMETRO_KEY = "@app_direito_cronometro";
export const TEMPO_QUESTAO_KEY = "@app_direito_tempo_questao";
export const QTD_QUESTOES_KEY = "@app_direito_qtd_questoes";
export const INSTALL_PROMPT_DISMISSED_KEY = "@app_direito_install_prompt_dismissed";
export const META_ALVO = 15;

export async function getHistorico(): Promise<HistoricoEntry[]> {
  const raw = await AsyncStorage.getItem(HIST_KEY);
  return raw ? (JSON.parse(raw) as HistoricoEntry[]) : [];
}

export async function addHistoricoEntry(
  entry: { tema: string; questoes_total: number; acertos: number; aproveitamento: number }
): Promise<HistoricoEntry[]> {
  const hist = await getHistorico();
  const novo: HistoricoEntry = {
    id_rodada: String(Date.now()),
    data_hora: new Date().toISOString(),
    ...entry
  };
  const atualizado = [novo, ...hist];
  await AsyncStorage.setItem(HIST_KEY, JSON.stringify(atualizado));
  return atualizado;
}

function hojeStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function getMetaDiaria(): Promise<MetaDiaria> {
  const raw = await AsyncStorage.getItem(META_KEY);
  const parsed = raw ? (JSON.parse(raw) as MetaDiaria) : null;
  if (!parsed || parsed.data !== hojeStr()) return { data: hojeStr(), respondidas: 0 };
  return parsed;
}

export async function registrarRespostaMeta(): Promise<MetaDiaria> {
  const meta = await getMetaDiaria();
  const atualizado = { ...meta, respondidas: meta.respondidas + 1 };
  await AsyncStorage.setItem(META_KEY, JSON.stringify(atualizado));
  return atualizado;
}

export async function getCronometroPref(): Promise<boolean> {
  return (await AsyncStorage.getItem(CRONOMETRO_KEY)) === "1";
}

export async function setCronometroPref(v: boolean): Promise<void> {
  await AsyncStorage.setItem(CRONOMETRO_KEY, v ? "1" : "0");
}

export async function getInstallPromptDismissed(): Promise<boolean> {
  return (await AsyncStorage.getItem(INSTALL_PROMPT_DISMISSED_KEY)) === "1";
}

export async function setInstallPromptDismissed(): Promise<void> {
  await AsyncStorage.setItem(INSTALL_PROMPT_DISMISSED_KEY, "1");
}

export async function getQtdQuestoesPref(): Promise<number> {
  const raw = await AsyncStorage.getItem(QTD_QUESTOES_KEY);
  return raw ? parseInt(raw, 10) : 5;
}

export async function setQtdQuestoesPref(v: number): Promise<void> {
  await AsyncStorage.setItem(QTD_QUESTOES_KEY, v.toString());
}

export async function getTempoQuestaoPref(): Promise<number> {
  const raw = await AsyncStorage.getItem(TEMPO_QUESTAO_KEY);
  return raw ? parseInt(raw, 10) : 10;
}

export async function setTempoQuestaoPref(v: number): Promise<void> {
  await AsyncStorage.setItem(TEMPO_QUESTAO_KEY, v.toString());
}
