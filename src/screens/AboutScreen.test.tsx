import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AboutScreen } from "./AboutScreen";
import { TEST_SAFE_AREA_METRICS } from "../test-utils/safeAreaMetrics";

async function renderAbout() {
  const goBack = jest.fn();
  await render(
    <SafeAreaProvider initialMetrics={TEST_SAFE_AREA_METRICS}>
      <AboutScreen navigation={{ goBack } as any} route={{} as any} />
    </SafeAreaProvider>
  );
  return { goBack };
}

test("shows the disclaimer that content is not an absolute truth", async () => {
  await renderAbout();
  expect(screen.getByText(/verdade absoluta/i)).toBeTruthy();
});

test("back button calls navigation.goBack", async () => {
  const { goBack } = await renderAbout();
  await act(async () => {
    fireEvent.press(screen.getByLabelText("Voltar"));
  });
  expect(goBack).toHaveBeenCalledTimes(1);
});
