import React from "react";
import { render, screen, act } from "@testing-library/react-native";
import { Mascot } from "./Mascot";

test("renders nothing visible when tipo is null", async () => {
  await render(<Mascot tipo={null} mensagem="" />);
  await act(async () => {
    expect(screen.queryByTestId("mascot-bubble")).toHaveProp("children", "");
  });
});

test("renders the message when tipo is acerto", async () => {
  await render(<Mascot tipo="acerto" mensagem="Boa!" />);
  await act(async () => {
    expect(screen.getByText("Boa!")).toBeTruthy();
  });
});
