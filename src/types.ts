export type Dificuldade = "facil" | "media" | "dificil";

export interface Questao {
  id: string;
  tema: string;
  dificuldade: Dificuldade;
  fonte: string;
  enunciado: string;
  alternativas: string[];
  resposta_correta: number;
}

export interface HistoricoEntry {
  id_rodada: string;
  data_hora: string; // ISO string
  tema: string;
  questoes_total: number;
  acertos: number;
  aproveitamento: number; // 0-100
}

export interface MetaDiaria {
  data: string; // YYYY-MM-DD
  respondidas: number;
}
