import { Questao, Dificuldade, HistoricoEntry } from "../types";

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function filterPool(db: Questao[], tema: string, dificuldade: Dificuldade): Questao[] {
  return db.filter((q) => q.tema === tema && q.dificuldade === dificuldade);
}

export function buildRodada(db: Questao[], tema: string, dificuldade: Dificuldade, size: number): Questao[] {
  const pool = filterPool(db, tema, dificuldade);
  return shuffle(pool).slice(0, Math.min(size, pool.length));
}

export function sortearTemaEDificuldade(
  db: Questao[],
  temas: string[],
  dificuldades: Dificuldade[]
): { tema: string; dificuldade: Dificuldade } | null {
  const combos: { tema: string; dificuldade: Dificuldade }[] = [];
  temas.forEach((tema) => {
    dificuldades.forEach((dificuldade) => {
      if (filterPool(db, tema, dificuldade).length > 0) combos.push({ tema, dificuldade });
    });
  });
  if (!combos.length) return null;
  return combos[Math.floor(Math.random() * combos.length)];
}

const TIERS = [
  { min: 100, headline: "Impecável.", tag: "perfect" },
  { min: 80, headline: "Mandou muito bem!", tag: "great" },
  { min: 60, headline: "Bom trabalho!", tag: "good" },
  { min: 40, headline: "Quase lá.", tag: "meh" },
  { min: 0, headline: "Bora tentar de novo?", tag: "low" }
];

export function tierFor(pct: number) {
  return TIERS.find((t) => pct >= t.min) ?? TIERS[TIERS.length - 1];
}

export function calcEstrelas(pct: number): 0 | 1 | 2 | 3 {
  if (pct >= 90) return 3;
  if (pct >= 60) return 2;
  if (pct > 0) return 1;
  return 0;
}

export function isNovoRecorde(
  historico: HistoricoEntry[],
  tema: string,
  dificuldade: Dificuldade,
  pct: number
): boolean {
  const melhorAnterior = historico
    .filter((r) => r.tema === tema && r.dificuldade === dificuldade)
    .reduce((max, r) => Math.max(max, r.aproveitamento), -1);
  return melhorAnterior >= 0 && pct > melhorAnterior;
}
