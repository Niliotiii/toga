import { shuffle, filterPool, buildRodada, sortearTemaEDificuldade, tierFor, calcEstrelas, isNovoRecorde } from "./gameLogic";
import { QUESTOES_DB } from "../data/questoes";
import { HistoricoEntry } from "../types";

test("filterPool returns only questions matching tema and dificuldade", () => {
  const pool = filterPool(QUESTOES_DB, "Direito Penal", "facil");
  expect(pool.length).toBeGreaterThan(0);
  pool.forEach((q) => {
    expect(q.tema).toBe("Direito Penal");
    expect(q.dificuldade).toBe("facil");
  });
});

test("buildRodada never returns more than `size` questions and never duplicates", () => {
  const rodada = buildRodada(QUESTOES_DB, "Direito Penal", "media", 5);
  expect(rodada.length).toBeLessThanOrEqual(5);
  const ids = rodada.map((q) => q.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("buildRodada caps at pool size when pool is smaller than requested size", () => {
  const rodada = buildRodada(QUESTOES_DB, "Direito Penal", "media", 999);
  const poolSize = filterPool(QUESTOES_DB, "Direito Penal", "media").length;
  expect(rodada.length).toBe(poolSize);
});

test("shuffle preserves all elements", () => {
  const input = [1, 2, 3, 4, 5];
  const out = shuffle(input);
  expect(out.sort()).toEqual(input.sort());
});

test("sortearTemaEDificuldade only returns combos with at least one question", () => {
  const result = sortearTemaEDificuldade(QUESTOES_DB, ["Direito Penal"], ["facil", "media", "dificil"]);
  expect(result).not.toBeNull();
  const pool = filterPool(QUESTOES_DB, result!.tema, result!.dificuldade);
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

test("isNovoRecorde is true only when pct beats the best prior aproveitamento for the same tema/dificuldade", () => {
  const historico: HistoricoEntry[] = [
    { id_rodada: "1", data_hora: "2026-01-01T00:00:00Z", tema: "Direito Penal", dificuldade: "facil", questoes_total: 5, acertos: 3, aproveitamento: 60 }
  ];
  expect(isNovoRecorde(historico, "Direito Penal", "facil", 80)).toBe(true);
  expect(isNovoRecorde(historico, "Direito Penal", "facil", 40)).toBe(false);
  expect(isNovoRecorde(historico, "Constitucional", "facil", 10)).toBe(false); // no prior history for this combo
});
