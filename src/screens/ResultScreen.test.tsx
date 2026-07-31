import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ResultScreen } from "./ResultScreen";
import { GameProvider, useGame } from "../context/GameContext";
import { getHistorico } from "../services/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEST_SAFE_AREA_METRICS } from "../test-utils/safeAreaMetrics";

beforeEach(async () => { await AsyncStorage.clear(); });

function Setup({ children }: { children: React.ReactNode }) {
  const { setTema, setDificuldade, iniciarRodada, responder, avancar, state } = useGame();
  const started = React.useRef(false);
  React.useEffect(() => {
    if (started.current) return;
    started.current = true;
    setTema("Direito Penal");
    setDificuldade("facil");
    iniciarRodada();
  }, []);
  return <>{children}</>;
}

function renderResult() {
  return render(
    <SafeAreaProvider initialMetrics={TEST_SAFE_AREA_METRICS}>
      <GameProvider>
        <Setup>
          <ResultScreen navigation={{ navigate: jest.fn() } as any} route={{} as any} />
        </Setup>
      </GameProvider>
    </SafeAreaProvider>
  );
}

test("shows the final score and percentage", async () => {
  await renderResult();
  await waitFor(() => expect(screen.getByText(/\d+ \/ \d+/)).toBeTruthy());
});

test("saves a new entry to history on mount", async () => {
  await renderResult();
  await waitFor(async () => {
    const hist = await getHistorico();
    expect(hist.length).toBe(1);
  });
});
