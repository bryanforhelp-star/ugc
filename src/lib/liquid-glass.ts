let loadPromise: Promise<void> | null = null;

export function resetLiquidGlassSnapshot() {
  if (typeof window === "undefined") return;
  const Container = (window as unknown as LiquidGlassWindow).Container;
  if (!Container) return;
  Container.pageSnapshot = null;
  Container.isCapturing = false;
  Container.waitingForSnapshot = [];
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export interface LiquidGlassButtonInstance {
  element: HTMLElement;
}

export interface LiquidGlassContainerClass {
  pageSnapshot: unknown;
  isCapturing: boolean;
  waitingForSnapshot: unknown[];
  instances: LiquidGlassButtonInstance[];
}

export interface LiquidGlassWindow extends Window {
  Container: LiquidGlassContainerClass;
  Button: new (options: {
    text: string;
    size?: number;
    type?: "rounded" | "circle" | "pill";
    tintOpacity?: number;
    onClick?: () => void;
  }) => LiquidGlassButtonInstance;
}

export interface GlassControls {
  edgeIntensity: number;
  rimIntensity: number;
  baseIntensity: number;
  edgeDistance: number;
  rimDistance: number;
  baseDistance: number;
  cornerBoost: number;
  rippleEffect: number;
  blurRadius: number;
}

export const IRIDESCENT_GLASS_CONTROLS: GlassControls = {
  edgeIntensity: 0.032,
  rimIntensity: 0.12,
  baseIntensity: 0.008,
  edgeDistance: 0.11,
  rimDistance: 0.52,
  baseDistance: 0.08,
  cornerBoost: 0.055,
  rippleEffect: 0.2,
  blurRadius: 7.0,
};

export function applyGlassControls(controls = IRIDESCENT_GLASS_CONTROLS) {
  if (typeof window === "undefined") return;
  (window as unknown as { glassControls: GlassControls }).glassControls =
    controls;
}

export function getLiquidGlassGlobals(): LiquidGlassWindow {
  return window as unknown as LiquidGlassWindow;
}

export function loadLiquidGlass(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (getLiquidGlassGlobals().Button) {
    applyGlassControls();
    return Promise.resolve();
  }

  if (!loadPromise) {
    loadPromise = loadScript(
      "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js",
    )
      .then(() => loadScript("/vendor/liquid-glass/container.js"))
      .then(() => loadScript("/vendor/liquid-glass/button.js"))
      .then(() => applyGlassControls());
  }

  return loadPromise;
}
