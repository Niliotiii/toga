import { Dificuldade } from "../types";

export const TEMAS = ["Direito Penal", "Constitucional", "Direito Civil", "Direito Administrativo"];

export const DIFICULDADES: { value: Dificuldade; label: string }[] = [
  { value: "facil", label: "Fácil" },
  { value: "media", label: "Média" },
  { value: "dificil", label: "Difícil" }
];

export const DIF_LABEL: Record<Dificuldade, string> = { facil: "Fácil", media: "Média", dificil: "Difícil" };
