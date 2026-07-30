import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { AlternativaButton } from "./AlternativaButton";

test("renders letra and texto, and fires onPress", async () => {
  const onPress = jest.fn();
  await render(<AlternativaButton letra="A" texto="Alternativa A" state="default" disabled={false} onPress={onPress} />);
  await act(async () => {
    fireEvent.press(screen.getByText("Alternativa A"));
  });
  expect(onPress).toHaveBeenCalledTimes(1);
});

test("does not fire onPress when disabled", async () => {
  const onPress = jest.fn();
  await render(<AlternativaButton letra="B" texto="Alternativa B" state="correct" disabled onPress={onPress} />);
  await act(async () => {
    fireEvent.press(screen.getByText("Alternativa B"));
  });
  expect(onPress).not.toHaveBeenCalled();
});
