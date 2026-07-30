import { colors, spacing, radius } from "./tokens";

test("tokens expose expected keys", () => {
  expect(colors.accent).toBe("#3B5BDB");
  expect(spacing.lg).toBe(16);
  expect(radius.pill).toBe(999);
});
