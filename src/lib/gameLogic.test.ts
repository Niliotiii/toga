import { shuffle, filterPool, buildRodada, sortearTema, tierFor, calcEstrelas, isNovoRecorde } from "./gameLogic";
import { QUESTOES_DB } from "../data/questoes";
import { HistoricoEntry } from "../types";

test("filterPool returns only questions matching tema", () => {
  const pool = filterPool(QUESTOES_DB, "Direito Penal");
  expect(pool.length).toBeGreaterThan(0);
  pool.forEach((q) => {
    expect(q.tema).toBe("Direito Penal");
  });
});

test("buildRodada never returns more than `size` questions and never duplicates", () => {
  const rodada = buildRodada(QUESTOES_DB, "Direito Penal", 5);
  expect(rodada.length).toBeLessThanOrEqual(5);
  const ids = rodada.map((q) => q.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("buildRodada caps at pool size when pool is smaller than requested size", () => {
  const rodada = buildRodada(QUESTOES_DB, "Direito Penal", 999);
  const poolSize = filterPool(QUESTOES_DB, "Direito Penal").length;
  expect(rodada.length).toBe(poolSize);
});

test("shuffle preserves all elements", () => {
  const input = [1, 2, 3, 4, 5];
  const out = shuffle(input);
  expect(out.sort()).toEqual(input.sort());
});

test("sortearTema only returns temas with at least one question", () => {
  const result = sortearTema(QUESTOES_DB, ["Direito Penal"]);
  expect(result).not.toBeNull();
  const pool = filterPool(QUESTOES_DB, result!.tema);
  expect(pool.length).toBeGreaterThan(0);
});

test("tierFor maps percentage to the correct tier", () => {
  expect(tierFor(100).tag).toBe("perfect");
  expect(tierFor(85).tag).toBe("great");
  expect(tierFor(65).tag).toBe("good");
  expect(tierFor(45).tag).toBe("meh");
  expect(tierFor(10).tag).toBe("low");
});

test("calcEstrelas thresholds match prototype (>=90 -> 3, >=60 -> 2, >0 -> 1, else 0)", () => {
  expect(calcEstrelas(95)).toBe(3);
  expect(calcEstrelas(70)).toBe(2);
  expect(calcEstrelas(20)).toBe(1);
  expect(calcEstrelas(0)).toBe(0);
});

test("isNovoRecorde is true only when pct beats the best prior aproveitamento for the same tema", () => {
  const historico: HistoricoEntry[] = [
    { id_rodada: "1", data_hora: "2026-01-01T00:00:00Z", tema: "Direito Penal", questoes_total: 5, acertos: 3, aproveitamento: 60 }
  ];
  expect(isNovoRecorde(historico, "Direito Penal", 80)).toBe(true);
  expect(isNovoRecorde(historico, "Direito Penal", 40)).toBe(false);
  expect(isNovoRecorde(historico, "Constitucional", 10)).toBe(false); // no prior history for this tema
});
