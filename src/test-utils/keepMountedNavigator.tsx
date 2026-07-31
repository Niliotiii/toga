import React from "react";
import { View } from "react-native";
import { useNavigationBuilder, createNavigatorFactory } from "@react-navigation/native";
import { TabRouter } from "@react-navigation/routers";

// Shared test helper -----------------------------------------------------
// A plain Stack.Navigator doesn't work for testing `useFocusEffect`-driven
// refresh logic: under RTL/jest the previously-focused screen gets fully
// unmounted and remounted on "back" navigation, so a component's mount-time
// load() alone would pick up new data even if the focus-listener wiring were
// completely broken. To make a test actually exercise the focus listener and
// nothing else, we build a minimal custom "keep-mounted" tab-style navigator
// (per React Navigation's custom-navigator API) that renders every screen
// simultaneously (toggling only `display`), so no screen ever unmounts
// across navigation. Only the "focus" event -- driven by the real
// navigation state/listener system -- can make a screen/component refresh.
//
// Originally built for MetaDiariaCard.test.tsx; reused by
// HistoryScreen.test.tsx for the same kind of focus-refresh assertion.

export function KeepMountedNavigator({ children, initialRouteName }: any) {
  const { state, descriptors, NavigationContent } = useNavigationBuilder(TabRouter, {
    children,
    initialRouteName
  });

  return (
    <NavigationContent>
      {state.routes.map((route: any, i: number) => (
        <View key={route.key} style={{ display: i === state.index ? "flex" : "none" }}>
          {descriptors[route.key].render()}
        </View>
      ))}
    </NavigationContent>
  );
}

export const createKeepMountedNavigator = createNavigatorFactory(KeepMountedNavigator);
