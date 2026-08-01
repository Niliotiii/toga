import { QUESTOES_DB } from "./questoes";
import { TEMAS, DIFICULDADES } from "./temas";

describe("QUESTOES_DB", () => {
  test("every question has a valid tema, dificuldade, and in-range resposta_correta", () => {
    expect(QUESTOES_DB.length).toBe(416);
    QUESTOES_DB.forEach((q) => {
      expect(TEMAS).toContain(q.tema);
      expect(DIFICULDADES.map((d) => d.value)).toContain(q.dificuldade);
      expect(q.resposta_correta).toBeGreaterThanOrEqual(0);
      expect(q.resposta_correta).toBeLessThan(q.alternativas.length);
    });
  });

  test("every tema/dificuldade combination used in the app has at least one question", () => {
    TEMAS.forEach((tema) => {
      DIFICULDADES.forEach((d) => {
        const count = QUESTOES_DB.filter((q) => q.tema === tema && q.dificuldade === d.value).length;
        expect(count).toBeGreaterThan(0);
      });
    });
  });
});
