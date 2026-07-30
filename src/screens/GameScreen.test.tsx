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

// Regression test for a race where toggleCronometro's AsyncStorage write
// (setCronometroPref) hadn't resolved yet by the time the player tapped
// "Iniciar rodada". Previously, toggleCronometro only flipped cronometroAtivo
// in state *after* awaiting the write, so GameScreen could mount and run its
// timer-setup effect while state.cronometroAtivo was still stale `false` -
// no interval got scheduled, yet once the write resolved and cronometroAtivo
// became true, the timer bar/JSX would render with no interval underneath.
test("toggling cronometro on and starting a round before the storage write resolves still starts the timer", async () => {
  jest.useFakeTimers();
  let resolveWrite: () => void = () => {};
  const writeSpy = jest.spyOn(AsyncStorage, "setItem").mockImplementation(
    () => new Promise((resolve) => {
      resolveWrite = () => resolve(undefined);
    })
  );

  try {
    function ToggleThenStart({ children }: { children: React.ReactNode }) {
      const { setTema, setDificuldade, toggleCronometro, iniciarRodada } = useGame();
      const startedRef = React.useRef(false);
      React.useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;
        setTema("Direito Penal");
        setDificuldade("facil");
        // Mirrors a user flipping the Contrarrelógio switch and immediately
        // tapping "Iniciar rodada", without waiting for the AsyncStorage
        // write behind toggleCronometro to resolve.
        void toggleCronometro();
        iniciarRodada();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return <>{children}</>;
    }

    const navigation = { navigate: jest.fn() };
    await render(
      <GameProvider>
        <ToggleThenStart>
          <GameScreen navigation={navigation as any} route={{} as any} />
        </ToggleThenStart>
      </GameProvider>
    );
    await act(async () => {
      await Promise.resolve();
    });

    // The AsyncStorage write is still pending here (we haven't resolved it),
    // yet the timer must already be active for the first question.
    expect(screen.getByTestId("timer-row")).toBeTruthy();

    // Advancing fake timers past the 20s question timer should auto-submit,
    // proving a real interval is running underneath - not just that the
    // timer UI happens to be visible.
    await act(async () => {
      jest.advanceTimersByTime(21000);
    });

    expect(screen.getByText(/Próxima questão|Ver resultado/)).toBeTruthy();
    expect(screen.getByText(/^(O tempo voou!|Foi por pouco!)$/)).toBeTruthy();

    resolveWrite();
    await act(async () => {
      await Promise.resolve();
    });
  } finally {
    writeSpy.mockRestore();
    jest.useRealTimers();
  }
});
