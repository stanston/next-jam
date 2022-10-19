export const colors = {
  primary: "teal",
  secondary: "orange",
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type WidthType = keyof typeof breakpoints;

export const mq = (width: WidthType) => {
  return `@media (min-width: ${breakpoints[width]}px)`;
};
