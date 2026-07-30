import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { PowerupButton } from "./PowerupButton";

test("renders label and count, and fires onPress when enabled", async () => {
  const onPress = jest.fn();
  await render(<PowerupButton label="Eliminar 2" count={1} disabled={false} onPress={onPress} />);
  await act(async () => {
    fireEvent.press(screen.getByText("Eliminar 2"));
  });
  expect(onPress).toHaveBeenCalledTimes(1);
});

test("does not fire onPress when disabled", async () => {
  const onPress = jest.fn();
  await render(<PowerupButton label="Pular" count={0} disabled onPress={onPress} />);
  await act(async () => {
    fireEvent.press(screen.getByText("Pular"));
  });
  expect(onPress).not.toHaveBeenCalled();
});
