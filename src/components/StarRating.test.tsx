import React from "react";
import { render, screen } from "@testing-library/react-native";
import { StarRating } from "./StarRating";

test("renders 3 stars total regardless of how many are filled", async () => {
  await render(<StarRating estrelas={2} />);
  expect(screen.getAllByTestId("star").length).toBe(3);
});

test("marks exactly `estrelas` stars as filled", async () => {
  await render(<StarRating estrelas={2} />);
  const filled = screen.getAllByTestId("star").filter((s) => s.props.accessibilityState?.selected);
  expect(filled.length).toBe(2);
});
