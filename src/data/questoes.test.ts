import { QUESTOES_DB } from "./questoes";
import { TEMAS } from "./temas";

describe("QUESTOES_DB", () => {
  test("every question has a valid tema and in-range resposta_correta", () => {
    // Verify sum of per-theme arrays equals the total — catches accidentally
    // skipping a theme module or breaking the QUESTOES_DB spread.
    const sumByTema = TEMAS.reduce(
      (acc, t) => acc + QUESTOES_DB.filter((q) => q.tema === t).length,
      0
    );
    expect(QUESTOES_DB.length).toBe(sumByTema);
    expect(QUESTOES_DB.length).toBeGreaterThanOrEqual(800);
    QUESTOES_DB.forEach((q) => {
      expect(TEMAS).toContain(q.tema);
      expect(q.resposta_correta).toBeGreaterThanOrEqual(0);
      expect(q.resposta_correta).toBeLessThan(q.alternativas.length);
    });
  });

  // Themes that have reached their full target count. Newer themes being
  // populated only need to be non-empty (>=1).
  const ESTABLISHED_THEMES = [
    "Direito Penal",
    "Constitucional",
    "Direito Civil",
    "Direito Administrativo",
  ];

  test("each established theme has at least 200 questions", () => {
    ESTABLISHED_THEMES.forEach((tema) => {
      const count = QUESTOES_DB.filter((q) => q.tema === tema).length;
      expect(count).toBeGreaterThanOrEqual(200);
    });
  });

  test("every theme in TEMAS is present in the database", () => {
    TEMAS.forEach((tema) => {
      const count = QUESTOES_DB.filter((q) => q.tema === tema).length;
      expect(count).toBeGreaterThan(0);
    });
  });

  test("question ids are globally unique across all themes", () => {
    // The `id` field is used as a dedup key in gameLogic (new Set(ids)) and
    // as an identity guard in GameContext (currQ.id !== q.id). Two different
    // questions sharing an id is a latent cross-theme bug. This test catches
    // accidental reuse of an id that another theme file already claimed —
    // which happened historically when themes were numbered from the same
    // base range without checking other files.
    const ids = QUESTOES_DB.map((q) => q.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates).toEqual([]);
  });
});
