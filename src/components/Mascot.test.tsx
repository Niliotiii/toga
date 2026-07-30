import React from "react";
import { render, screen, act } from "@testing-library/react-native";
import { Mascot } from "./Mascot";
import { colors } from "../theme/tokens";

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

test("avatar has success style (happy) for tipo=acerto", async () => {
  await render(<Mascot tipo="acerto" mensagem="Boa!" />);
  await act(async () => {
    const avatar = screen.getByTestId("mascot-avatar");
    expect(avatar).toHaveProp("style", expect.objectContaining({
      borderColor: colors.success
    }));
  });
});

test("avatar has success style (happy) for tipo=powerup", async () => {
  await render(<Mascot tipo="powerup" mensagem="Powerup!" />);
  await act(async () => {
    const avatar = screen.getByTestId("mascot-avatar");
    expect(avatar).toHaveProp("style", expect.objectContaining({
      borderColor: colors.success
    }));
  });
});

test("avatar has danger style (sad) for tipo=erro", async () => {
  await render(<Mascot tipo="erro" mensagem="Errado!" />);
  await act(async () => {
    const avatar = screen.getByTestId("mascot-avatar");
    expect(avatar).toHaveProp("style", expect.objectContaining({
      borderColor: colors.danger
    }));
  });
});

test("avatar has danger style (sad) for tipo=tempo", async () => {
  await render(<Mascot tipo="tempo" mensagem="Tempo!" />);
  await act(async () => {
    const avatar = screen.getByTestId("mascot-avatar");
    expect(avatar).toHaveProp("style", expect.objectContaining({
      borderColor: colors.danger
    }));
  });
});

test("avatar has neutral style for tipo=null", async () => {
  await render(<Mascot tipo={null} mensagem="" />);
  await act(async () => {
    const avatar = screen.getByTestId("mascot-avatar");
    expect(avatar).toHaveProp("style", expect.objectContaining({
      borderColor: colors.border
    }));
  });
});
