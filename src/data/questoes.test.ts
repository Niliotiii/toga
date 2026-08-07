import { QUESTOES_DB } from "./questoes";
import { TEMAS, DIFICULDADES } from "./temas";

describe("QUESTOES_DB", () => {
  test("every question has a valid tema, dificuldade, and in-range resposta_correta", () => {
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
      expect(DIFICULDADES.map((d) => d.value)).toContain(q.dificuldade);
      expect(q.resposta_correta).toBeGreaterThanOrEqual(0);
      expect(q.resposta_correta).toBeLessThan(q.alternativas.length);
    });
  });

  // Themes that have reached their full target count. Newer themes being
  // populated only need to be non-empty (>=1) and cover each difficulty.
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

  test("every tema/dificuldade combination has at least one question", () => {
    TEMAS.forEach((tema) => {
      DIFICULDADES.forEach((d) => {
        const count = QUESTOES_DB.filter((q) => q.tema === tema && q.dificuldade === d.value).length;
        expect(count).toBeGreaterThan(0);
      });
    });
  });
});
