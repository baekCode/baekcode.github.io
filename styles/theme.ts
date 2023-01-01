const colors = {};

export const theme = {
  colors: {
    ...colors,
  },
} as const;

export type Theme = typeof theme;

export default theme;
