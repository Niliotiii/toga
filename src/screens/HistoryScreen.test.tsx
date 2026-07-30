import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistoryScreen } from "./HistoryScreen";
import { HIST_KEY } from "../services/storage";

beforeEach(async () => { await AsyncStorage.clear(); });

function renderHistory() {
  return render(
    <NavigationContainer>
      <HistoryScreen navigation={{ goBack: jest.fn() } as any} route={{} as any} />
    </NavigationContainer>
  );
}

test("shows the empty-state message when there is no history", async () => {
  await renderHistory();
  await waitFor(() => expect(screen.getByText(/ainda não jogou nenhuma rodada/i)).toBeTruthy());
});

test("lists saved rounds most recent first", async () => {
  await AsyncStorage.setItem(HIST_KEY, JSON.stringify([
    { id_rodada: "1", data_hora: "2026-07-01T00:00:00.000Z", tema: "Direito Penal", dificuldade: "facil", questoes_total: 5, acertos: 3, aproveitamento: 60 },
    { id_rodada: "2", data_hora: "2026-07-15T00:00:00.000Z", tema: "Constitucional", dificuldade: "media", questoes_total: 5, acertos: 4, aproveitamento: 80 }
  ]));
  await renderHistory();
  await waitFor(() => expect(screen.getByText("Direito Penal")).toBeTruthy());
  expect(screen.getByText("Constitucional")).toBeTruthy();
});
