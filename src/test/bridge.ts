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

export interface StarHarborLiteSmokeSnapshot {
  story: "starharbor-lite";
  ready: boolean;
  screen: "gameplay" | "settings";
  status: StarHarborBridgeStatus["status"];
  progress: number;
  gameOver: boolean;
  storageStatus: StarHarborBridgeStatus["storageStatus"];
  lastError: string | null;
}

declare global {
  interface Window {
    app: StarHarborLiteBridge;
    setfarmSmoke: StarHarborLiteSmokeSnapshot;
  }

  var app: StarHarborLiteBridge;
  var setfarmSmoke: StarHarborLiteSmokeSnapshot;
}

export {};
