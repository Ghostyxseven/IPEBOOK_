/**
 * IpêBook — Tokens de Design (IHC / UI)
 * Sincronizados com design-tokens.json e Figma (cxEisNRzOQR6krv8Ow7HCa).
 * 
 * Regra de Camada MVVM: Pertence estritamente à camada de View (UI).
 */

export const colors = {
  // Identidade e Marca
  background: "#F6F1E8",
  surface: "#FCFAF5",
  text: "#3C302A",
  secondaryText: "#645B55",
  action: "#2C5E45",
  actionDeep: "#2F503D",
  soft: "#E7F0EA",
  border: "#8F8478",
  highlight: "#F4B942",
  gold: "#D99719",
  brandBrown: "#58331F",
  brandAmber: "#F2BC45",

  // Estados
  success: "#2F6B4F",
  error: "#B3261E",
  errorContainer: "#F9DEDC",
  disabledBackground: "#E7F0EA",
  disabledText: "#645B55",

  // Badges por Modalidade
  badge: {
    sale: { background: "#DCE8DE", text: "#18291F" },
    trade: { background: "#F8D88A", text: "#3A2A10" },
    donation: { background: "#F4DDD3", text: "#6E3A28" },
    reserved: { background: "#F4B942", text: "#3C302A" },
    completed: { background: "#2F6B4F", text: "#FFFFFF" },
  },

  // Capas ilustrativas (quando anúncio não tem imagem)
  cover: {
    blue: "#253C4F",
    brown: "#633E36",
    green: "#30574A",
    text: "#F6F1E8",
  },
} as const;

export const spacing = {
  0: 0,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  48: 48,
  56: 56,
  64: 64,
} as const;

export const radius = {
  small: 8,
  medium: 14,
  large: 18,
  extraLarge: 24,
  full: 9999,
} as const;

export const accessibility = {
  /** Alvo de toque interativo mínimo: 48x48 dp (WCAG e Edital PDM/IHC) */
  touchTarget: 48,
  focusWidth: 2,
  focusOffset: 4,
} as const;

export const typography = {
  displayLarge: { fontSize: 32, lineHeight: 40, fontWeight: "700" as const },
  titleLarge: { fontSize: 24, lineHeight: 32, fontWeight: "600" as const },
  titleMedium: { fontSize: 18, lineHeight: 26, fontWeight: "600" as const },
  bodyLarge: { fontSize: 16, lineHeight: 24, fontWeight: "400" as const },
  bodyMedium: { fontSize: 14, lineHeight: 20, fontWeight: "400" as const },
  labelMedium: { fontSize: 12, lineHeight: 16, fontWeight: "500" as const },
} as const;

export const motion = {
  duration: {
    micro: 100,
    fast: 150,
    standard: 250,
    slow: 300,
    emphasized: 500,
  },
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
  accessibility,
  typography,
  motion,
} as const;

export default tokens;
