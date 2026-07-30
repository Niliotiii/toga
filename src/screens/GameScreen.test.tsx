import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { GameScreen } from "./GameScreen";
import { GameProvider, useGame } from "../context/GameContext";

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
