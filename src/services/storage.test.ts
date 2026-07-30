import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getHistorico,
  addHistoricoEntry,
  getMetaDiaria,
  registrarRespostaMeta,
  getCronometroPref,
  setCronometroPref,
  META_ALVO
} from "./storage";

beforeEach(async () => {
  await AsyncStorage.clear();
});

test("getHistorico returns an empty array when nothing is stored", async () => {
  expect(await getHistorico()).toEqual([]);
});

test("addHistoricoEntry prepends a new entry with generated id and timestamp", async () => {
  const before = await getHistorico();
  expect(before.length).toBe(0);
  const after = await addHistoricoEntry({
    tema: "Direito Penal",
    dificuldade: "facil",
    questoes_total: 5,
    acertos: 4,
    aproveitamento: 80
  });
  expect(after.length).toBe(1);
  expect(after[0].tema).toBe("Direito Penal");
  expect(typeof after[0].id_rodada).toBe("string");
  expect(typeof after[0].data_hora).toBe("string");
});

test("addHistoricoEntry orders most recent first", async () => {
  await addHistoricoEntry({ tema: "A", dificuldade: "facil", questoes_total: 5, acertos: 1, aproveitamento: 20 });
  await addHistoricoEntry({ tema: "B", dificuldade: "media", questoes_total: 5, acertos: 4, aproveitamento: 80 });
  const hist = await getHistorico();
  expect(hist[0].tema).toBe("B");
  expect(hist[1].tema).toBe("A");
});

test("getMetaDiaria resets respondidas when the stored date is not today", async () => {
  const meta = await getMetaDiaria();
  expect(meta.respondidas).toBe(0);
  expect(meta.data).toBe(new Date().toISOString().slice(0, 10));
});

test("registrarRespostaMeta increments respondidas and caps display logic at META_ALVO", async () => {
  for (let i = 0; i < META_ALVO + 2; i++) await registrarRespostaMeta();
  const meta = await getMetaDiaria();
  expect(meta.respondidas).toBe(META_ALVO + 2);
});

test("cronometro preference defaults to false and persists when set", async () => {
  expect(await getCronometroPref()).toBe(false);
  await setCronometroPref(true);
  expect(await getCronometroPref()).toBe(true);
});
