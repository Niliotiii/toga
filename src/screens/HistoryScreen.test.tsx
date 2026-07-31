import React from "react";
import { View, Text, Pressable } from "react-native";
import { render, screen, waitFor, fireEvent, act } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistoryScreen } from "./HistoryScreen";
import { HIST_KEY } from "../services/storage";
import { createKeepMountedNavigator } from "../test-utils/keepMountedNavigator";

beforeEach(async () => { await AsyncStorage.clear(); });

function renderHistory() {
  return render(
    <NavigationContainer>
      <HistoryScreen navigation={{ goBack: jest.fn() } as any} route={{} as any} />
    </NavigationContainer>
  );
}

test("shows the empty-state message when there is no history", async () => {
  await renderHistory();
  await waitFor(() => expect(screen.getByText(/ainda não jogou nenhuma rodada/i)).toBeTruthy());
});

test("lists saved rounds most recent first", async () => {
  await AsyncStorage.setItem(HIST_KEY, JSON.stringify([
    { id_rodada: "1", data_hora: "2026-07-01T00:00:00.000Z", tema: "Direito Penal", dificuldade: "facil", questoes_total: 5, acertos: 3, aproveitamento: 60 },
    { id_rodada: "2", data_hora: "2026-07-15T00:00:00.000Z", tema: "Constitucional", dificuldade: "media", questoes_total: 5, acertos: 4, aproveitamento: 80 }
  ]));
  await renderHistory();
  await waitFor(() => expect(screen.getByText("Direito Penal")).toBeTruthy());
  expect(screen.getByText("Constitucional")).toBeTruthy();
});

// --- Focus-refresh integration test -----------------------------------------
// HistoryScreen's whole reason for using useFocusEffect (instead of a plain
// useEffect) is to reflect newly saved rounds when the user plays another
// round on another screen and then navigates back to History. Rendering the
// screen standalone (as above) inside a bare NavigationContainer never
// exercises a real focus/blur transition: useNavigation() falls back to the
// root NavigationContainerRefContext, whose isFocused() is hard-coded to
// `true` with no real per-screen focus/blur event stream, so the mount-time
// evaluation of useFocusEffect's callback always fires once regardless of
// whether the effect is wired to "focus" or not -- functionally identical to
// a plain useEffect. That setup can't prove the screen reloads on refocus.
//
// A plain Stack.Navigator doesn't work either, since under RTL/jest the
// previously-focused screen gets fully unmounted and remounted on "back"
// navigation, so the screen's mount-time load() alone would pick up the new
// value even if the focus-listener wiring were completely broken.
//
// To actually exercise the focus listener and nothing else, we reuse the
// shared "keep-mounted" tab-style test navigator (see
// ../test-utils/keepMountedNavigator, originally built for
// MetaDiariaCard.test.tsx) that renders every screen simultaneously
// (toggling only `display`), so no screen ever unmounts across navigation.
// Only the real "focus" event can make the list refresh.

type TestParamList = { History: undefined; Outra: undefined };

const TestNav = createKeepMountedNavigator();

function HistoryWithNav({ navigation }: any) {
  return (
    <View>
      <HistoryScreen navigation={navigation} route={{} as any} />
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
      <Pressable onPress={() => navigation.navigate("History")}>
        <Text>voltar</Text>
      </Pressable>
    </View>
  );
}

function TestNavigator() {
  return (
    <NavigationContainer>
      <TestNav.Navigator initialRouteName="History">
        <TestNav.Screen name="History" component={HistoryWithNav} />
        <TestNav.Screen name="Outra" component={OutraTela} />
      </TestNav.Navigator>
    </NavigationContainer>
  );
}

test("refreshes the list on focus when navigating back to History", async () => {
  await AsyncStorage.setItem(HIST_KEY, JSON.stringify([
    { id_rodada: "1", data_hora: "2026-07-01T00:00:00.000Z", tema: "Direito Penal", dificuldade: "facil", questoes_total: 5, acertos: 3, aproveitamento: 60 }
  ]));

  await render(<TestNavigator />);
  await waitFor(() => expect(screen.getByText("Direito Penal")).toBeTruthy());

  // Navigate away from History.
  await act(async () => {
    fireEvent.press(screen.getByText("ir para outra tela"));
  });
  await waitFor(() => expect(screen.getByText("outra tela")).toBeTruthy());

  // While away, simulate a new round being played and saved elsewhere
  // (mutating storage directly, as addHistoricoEntry would).
  await AsyncStorage.setItem(HIST_KEY, JSON.stringify([
    { id_rodada: "2", data_hora: "2026-07-30T00:00:00.000Z", tema: "Administrativo", dificuldade: "dificil", questoes_total: 5, acertos: 5, aproveitamento: 100 },
    { id_rodada: "1", data_hora: "2026-07-01T00:00:00.000Z", tema: "Direito Penal", dificuldade: "facil", questoes_total: 5, acertos: 3, aproveitamento: 60 }
  ]));

  // Navigate back to History; the focus listener should re-read storage.
  await act(async () => {
    fireEvent.press(screen.getByText("voltar"));
  });

  await waitFor(() => expect(screen.getByText("Administrativo")).toBeTruthy());
  expect(screen.getByText("Direito Penal")).toBeTruthy();
});
