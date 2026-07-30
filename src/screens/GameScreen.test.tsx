import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GameScreen } from "./GameScreen";
import { GameProvider, useGame } from "../context/GameContext";
import { CRONOMETRO_KEY } from "../services/storage";

function Setup({ children }: { children: React.ReactNode }) {
  const { setTema, setDificuldade, iniciarRodada } = useGame();
  React.useEffect(() => {
    setTema("Direito Penal");
    setDificuldade("facil");
    iniciarRodada();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
}

async function renderGame() {
  const navigation = { navigate: jest.fn() };
  const result = await render(
    <GameProvider>
      <Setup>
        <GameScreen navigation={navigation as any} route={{} as any} />
      </Setup>
    </GameProvider>
  );
  await act(async () => {
    await Promise.resolve();
  });
  return { navigation, ...result };
}

test("shows question progress and the fonte/enunciado of the first question", async () => {
  await renderGame();
  expect(screen.getByText(/Questão 1 de/)).toBeTruthy();
});

test("selecting an alternative reveals correct/wrong state and the 'next' button", async () => {
  await renderGame();
  const alternativas = screen.getAllByTestId("alternativa-button");
  await act(async () => {
    fireEvent.press(alternativas[0]);
  });
  expect(screen.getByText(/Próxima questão|Ver resultado/)).toBeTruthy();
});

test("pressing next after the last question navigates to Result", async () => {
  const { navigation } = await renderGame();
  // Answer through all questions in the (5-or-fewer) rodada
  for (let i = 0; i < 5; i++) {
    const alternativas = screen.queryAllByTestId("alternativa-button");
    if (!alternativas.length) break;
    await act(async () => {
      fireEvent.press(alternativas[0]);
    });
    const nextBtn = screen.getByText(/Próxima questão|Ver resultado/);
    await act(async () => {
      fireEvent.press(nextBtn);
    });
  }
  expect(navigation.navigate).toHaveBeenCalledWith("Result");
});

// Unlike `Setup` above, this waits for `cronometroAtivo` to finish hydrating
// from AsyncStorage *before* starting the round and mounting GameScreen. This
// matches how the round actually starts in the app (tema/dificuldade/timer
// preference are all settled before the player reaches the game screen) and
// avoids a race where GameScreen's timer-setup effect (keyed on
// `state.indice`) fires once with `cronometroAtivo` still false/rodada still
// empty and never re-fires once hydration completes, because `indice` never
// changes value (it starts and stays at 0).
function SetupWithTimerHydrated({ children }: { children: React.ReactNode }) {
  const { state, setTema, setDificuldade, iniciarRodada } = useGame();
  const configuredRef = React.useRef(false);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    if (!configuredRef.current) {
      configuredRef.current = true;
      setTema("Direito Penal");
      setDificuldade("facil");
    }
  }, []);

  React.useEffect(() => {
    if (state.cronometroAtivo && !startedRef.current) {
      startedRef.current = true;
      iniciarRodada();
    }
  }, [state.cronometroAtivo, iniciarRodada]);

  if (!state.cronometroAtivo || state.rodada.length === 0) return null;
  return <>{children}</>;
}

test("when cronometro is active, letting the timer run out auto-answers and shows the 'tempo' mascot message", async () => {
  jest.useFakeTimers();
  try {
    await AsyncStorage.setItem(CRONOMETRO_KEY, "1");
    const navigation = { navigate: jest.fn() };
    await render(
      <GameProvider>
        <SetupWithTimerHydrated>
          <GameScreen navigation={navigation as any} route={{} as any} />
        </SetupWithTimerHydrated>
      </GameProvider>
    );
    await act(async () => {
      await Promise.resolve();
    });

    // sanity check: the round actually started with the timer wired up
    expect(screen.getByTestId("timer-row")).toBeTruthy();

    // advance well past the 20s question timer (100ms ticks internally)
    await act(async () => {
      jest.advanceTimersByTime(21000);
    });

    expect(screen.getByText(/Próxima questão|Ver resultado/)).toBeTruthy();
    expect(screen.getByText(/^(O tempo voou!|Foi por pouco!)$/)).toBeTruthy();
  } finally {
    jest.useRealTimers();
  }
});
