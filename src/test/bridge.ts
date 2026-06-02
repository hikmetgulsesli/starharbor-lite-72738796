import type { StarHarborBridgeStatus, StarHarborLiteActions } from "../features/starharbor-lite/starharbor-lite.store";
import type { StarHarborRuntimeState } from "../game/game-runtime";

export interface StarHarborLiteBridge {
  state: StarHarborRuntimeState & StarHarborBridgeStatus & { screen?: "gameplay" | "settings" };
  runtime: StarHarborRuntimeState & StarHarborBridgeStatus & { screen?: "gameplay" | "settings" };
  status: StarHarborBridgeStatus["status"];
  progress: number;
  gameOver: boolean;
  storageStatus: StarHarborBridgeStatus["storageStatus"];
  lastError: string | null;
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
