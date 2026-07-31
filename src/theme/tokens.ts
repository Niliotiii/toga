export const colors = {
  bg: "#FAFAFB",
  surface: "#FFFFFF",
  fg: "#212228",
  muted: "#6C6E77",
  border: "#E3E4E8",
  accent: "#3B5BDB",
  accentText: "#2F4BB0",
  // Darkened from the prototype's oklch values so white text on a solid
  // fill (selected chips, alternativa letter badges) and colored text on
  // this color's own light tint (history badges) both clear WCAG AA
  // (4.5:1) for normal-weight text — the original oklch conversions
  // landed at ~3.3-3.4:1 against white.
  success: "#1A6E3D",
  danger: "#D1453B",
  warn: "#D9A441",
  gold: "#E8B93F",
  mediaDificuldade: "#8A4D08",
  mediaDificuldadeBg: "#F5E1BF",
  temas: {
    "Direito Penal": "#A53E00",
    "Constitucional": "#724AAB",
    "Direito Civil": "#007A5F",
    "Direito Administrativo": "#33607E"
  } as Record<string, string>
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const radius = { sm: 8, md: 14, lg: 16, pill: 999 };

export const type = {
  display: { fontWeight: "600" as const, letterSpacing: -0.3 },
  title: { fontSize: 23, fontWeight: "600" as const },
  body: { fontSize: 15, lineHeight: 22 },
  small: { fontSize: 13, color: colors.muted },
  enunciado: { fontSize: 19, lineHeight: 28, fontWeight: "500" as const }
};

export const motion = { fast: 150, medium: 200, slow: 300 };
