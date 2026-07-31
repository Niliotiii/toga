import React from "react";
import { View, Text, Pressable } from "react-native";
import { render, screen, waitFor, fireEvent, act } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { MetaDiariaCard } from "./MetaDiariaCard";
import { META_KEY } from "../services/storage";
import { createKeepMountedNavigator } from "../test-utils/keepMountedNavigator";

beforeEach(async () => { await AsyncStorage.clear(); });

test("shows 0/15 when no responses recorded today", async () => {
  await render(<MetaDiariaCard />);
  await waitFor(() => expect(screen.getByText("0 / 15 hoje")).toBeTruthy());
});

test("shows the stored progress for today", async () => {
  const hoje = new Date().toISOString().slice(0, 10);
  await AsyncStorage.setItem(META_KEY, JSON.stringify({ data: hoje, respondidas: 7 }));
  await render(<MetaDiariaCard />);
  await waitFor(() => expect(screen.getByText("7 / 15 hoje")).toBeTruthy());
});

// --- Focus-refresh integration test -----------------------------------------
// The card's whole reason for existing is to reflect the latest daily count
// whenever Home regains focus (e.g. after a round is played on another screen).
// Rendering the card standalone (as above) never populates NavigationContext,
// so it can't exercise `navigation.addListener("focus", ...)`.
//
// A plain Stack.Navigator doesn't work for this either: under RTL/jest the
// previously-focused screen gets fully unmounted and remounted on "back"
// navigation, so the card's mount-time load() alone would pick up the new
// value even if the focus-listener wiring were completely broken (verified:
// commenting out `navigation.addListener("focus", load)` still made a
// stack-based version of this test pass, because remounting re-triggered the
// unrelated mount effect). To make the test actually exercise the focus
// listener and nothing else, we use a shared "keep-mounted" tab-style test
// navigator (see ../test-utils/keepMountedNavigator) that renders every
// screen simultaneously (toggling only `display`), so no screen ever
// unmounts across navigation. Only the "focus" event -- driven by the real
// navigation state/listener system -- can make the card refresh.

type TestParamList = { Home: undefined; Outra: undefined };

const TestNav = createKeepMountedNavigator<TestParamList>();

function HomeWithCard({ navigation }: any) {
  return (
    <View>
      <MetaDiariaCard />
      <Pressable onPress={() => navigation.navigate("Outra")}>
        <Text>ir para outra tela</Text>
      </Pressable>
    </View>
  );
}

function OutraTela({ navigation }: any) {
  return (
    <View>
      <Text>outra tela</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>voltar</Text>
      </Pressable>
    </View>
  );
}

function TestNavigator() {
  return (
    <NavigationContainer>
      <TestNav.Navigator initialRouteName="Home">
        <TestNav.Screen name="Home" component={HomeWithCard} />
        <TestNav.Screen name="Outra" component={OutraTela} />
      </TestNav.Navigator>
    </NavigationContainer>
  );
}

test("refreshes the count on focus when navigating back to Home", async () => {
  const hoje = new Date().toISOString().slice(0, 10);
  await AsyncStorage.setItem(META_KEY, JSON.stringify({ data: hoje, respondidas: 2 }));

  await render(<TestNavigator />);
  await waitFor(() => expect(screen.getByText("2 / 15 hoje")).toBeTruthy());

  // Navigate away from Home.
  await act(async () => {
    fireEvent.press(screen.getByText("ir para outra tela"));
  });
  await waitFor(() => expect(screen.getByText("outra tela")).toBeTruthy());

  // While away, simulate answers being recorded elsewhere (mutating storage directly).
  await AsyncStorage.setItem(META_KEY, JSON.stringify({ data: hoje, respondidas: 9 }));

  // Navigate back to Home; the focus listener should re-read storage.
  await act(async () => {
    fireEvent.press(screen.getByText("voltar"));
  });

  await waitFor(() => expect(screen.getByText("9 / 15 hoje")).toBeTruthy());
});
