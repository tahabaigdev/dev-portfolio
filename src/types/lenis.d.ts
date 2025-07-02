export interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smooth?: boolean;
  smoothTouch?: boolean;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal" | "both";
  mouseMultiplier?: number;
  touchMultiplier?: number;
  normalizeWheel?: boolean;
  infinite?: boolean;
}
