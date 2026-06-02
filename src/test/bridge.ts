import type { StarHarborLiteActions } from "../features/starharbor-lite/starharbor-lite.store";
import type { StarHarborRuntimeState } from "../game/game-runtime";

export interface StarHarborLiteBridge {
  state: StarHarborRuntimeState & { screen?: "gameplay" | "settings" };
  actions: StarHarborLiteActions & {
    openSettings?: () => void;
    closeSettings?: () => void;
  };
}

declare global {
  interface Window {
    app: StarHarborLiteBridge;
  }

  var app: StarHarborLiteBridge;
}

export {};
