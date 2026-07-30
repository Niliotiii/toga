import React from "react";
import { render, screen } from "@testing-library/react-native";
import { HistoryCard } from "./HistoryCard";
import { HistoricoEntry } from "../types";

const entry: HistoricoEntry = {
  id_rodada: "1",
  data_hora: "2026-07-30T10:00:00.000Z",
  tema: "Direito Penal",
  dificuldade: "dificil",
  questoes_total: 5,
  acertos: 4,
  aproveitamento: 80
};

test("renders tema, dificuldade label, and score", async () => {
  await render(<HistoryCard entry={entry} />);
  expect(screen.getByText("Direito Penal")).toBeTruthy();
  expect(screen.getByText("Difícil")).toBeTruthy();
  expect(screen.getByText(/4\/5/)).toBeTruthy();
  expect(screen.getByText(/80%/)).toBeTruthy();
});
