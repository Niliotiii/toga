import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GameProvider } from "./src/context/GameContext";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { InstallPrompt } from "./src/components/InstallPrompt";
import { registerServiceWorker } from "./src/lib/pwa";

export default function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <SafeAreaProvider>
      <GameProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <InstallPrompt />
      </GameProvider>
    </SafeAreaProvider>
  );
}
