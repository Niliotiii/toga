import React from "react";
import { renderHook, act } from "@testing-library/react-native";
import { GameProvider, useGame } from "./GameContext";

function wrapper({ children }: { children: React.ReactNode }) {
  return <GameProvider>{children}</GameProvider>;
}

test("iniciarRodada builds a rodada of up to 5 questions and resets round state", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  expect(result.current.state.rodada.length).toBeGreaterThan(0);
  expect(result.current.state.rodada.length).toBeLessThanOrEqual(5);
  expect(result.current.state.indice).toBe(0);
  expect(result.current.state.acertos).toBe(0);
  expect(result.current.state.combo).toBe(0);
  expect(result.current.state.powerups).toEqual({ pular: 1, eliminar: 1 });
});

test("responder with the correct index increments acertos and combo", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  const correta = result.current.state.rodada[0].resposta_correta;
  await act(() => result.current.responder(correta));
  expect(result.current.state.acertos).toBe(1);
  expect(result.current.state.combo).toBe(1);
  expect(result.current.state.respondida).toBe(true);
});

test("responder with a wrong index resets combo to zero", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  const correta = result.current.state.rodada[0].resposta_correta;
  const errada = correta === 0 ? 1 : 0;
  await act(() => result.current.responder(errada));
  expect(result.current.state.acertos).toBe(0);
  expect(result.current.state.combo).toBe(0);
});

test("responder is a no-op if already respondida (prevents double answer)", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  const correta = result.current.state.rodada[0].resposta_correta;
  await act(() => result.current.responder(correta));
  await act(() => result.current.responder(correta === 0 ? 1 : 0));
  expect(result.current.state.acertos).toBe(1); // second call ignored
});

test("usarPular consumes a pular power-up and marks the question as answered", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  await act(() => result.current.usarPular());
  expect(result.current.state.powerups.pular).toBe(0);
  expect(result.current.state.respondida).toBe(true);
});

test("usarEliminar removes two wrong alternatives and can only be used once per question", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  let removed: number[] = [];
  await act(() => { removed = result.current.usarEliminar(); });
  expect(removed.length).toBe(2);
  expect(result.current.state.eliminadasQuestaoAtual).toBe(true);
  await act(() => { removed = result.current.usarEliminar(); });
  expect(removed.length).toBe(0); // already used this question
});

test("avancar moves to the next question and does not overflow past rodada length", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  const total = result.current.state.rodada.length;
  for (let i = 0; i < total; i++) {
    await act(() => result.current.responder(result.current.state.rodada[result.current.state.indice].resposta_correta));
    await act(() => result.current.avancar());
  }
  expect(result.current.state.indice).toBe(total);
});
