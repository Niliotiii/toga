import React from "react";
import { Text } from "react-native";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { PowerupButton } from "./PowerupButton";

test("renders the given icon and count, and fires onPress when enabled", async () => {
  const onPress = jest.fn();
  await render(
    <PowerupButton
      testID="powerup-eliminar"
      icon={<Text testID="powerup-icon">icon</Text>}
      label="Eliminar 2"
      count={1}
      disabled={false}
      onPress={onPress}
    />
  );
  expect(screen.getByTestId("powerup-icon")).toBeTruthy();
  expect(screen.getByText("1")).toBeTruthy();
  await act(async () => {
    fireEvent.press(screen.getByTestId("powerup-eliminar"));
  });
  expect(onPress).toHaveBeenCalledTimes(1);
});

test("does not fire onPress when disabled", async () => {
  const onPress = jest.fn();
  await render(
    <PowerupButton
      testID="powerup-pular"
      icon={<Text testID="powerup-icon">icon</Text>}
      label="Pular"
      count={0}
      disabled
      onPress={onPress}
    />
  );
  await act(async () => {
    fireEvent.press(screen.getByTestId("powerup-pular"));
  });
  expect(onPress).not.toHaveBeenCalled();
});
