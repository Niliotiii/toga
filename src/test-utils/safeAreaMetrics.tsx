import { Metrics } from "react-native-safe-area-context";

// Shared test helper -------------------------------------------------------
// Screens call useSafeAreaInsets() directly (Home/Game/Result/History), which
// throws if there's no SafeAreaProvider ancestor supplying real insets. In the
// running app this is always satisfied (App.tsx wraps everything in
// SafeAreaProvider, and @react-navigation/native-stack's NativeStackView adds
// its own SafeAreaProviderCompat fallback around each real Screen too) — but
// tests that render a screen directly, without going through an actual
// Stack.Navigator/Screen, need an explicit SafeAreaProvider wrapper. These
// fixed zero-inset metrics are just enough to satisfy the context; the exact
// values don't matter for what these tests assert.
export const TEST_SAFE_AREA_METRICS: Metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 }
};
