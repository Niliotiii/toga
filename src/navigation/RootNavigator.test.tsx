import React from "react";
import { render, screen } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./RootNavigator";
import { GameProvider } from "../context/GameContext";

test("renders the Home screen by default", async () => {
  await render(
    <GameProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GameProvider>
  );
  expect(screen.getByText("Home")).toBeTruthy();
});
