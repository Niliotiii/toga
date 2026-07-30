import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MetaDiariaCard } from "./MetaDiariaCard";
import { META_KEY } from "../services/storage";

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
