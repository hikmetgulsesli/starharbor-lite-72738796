import { useEffect, useMemo, useState } from "react";
import {
  GameSettingsStarharborLite,
  GameplayStarharborLite,
  type GameSettingsStarharborLiteActionId,
  type GameplayStarharborLiteActionId,
} from "./screens";
import { useStarHarborLiteGame } from "./features/starharbor-lite/starharbor-lite.store";
import { actPauseGame } from "./features/surf-gameplay/act_pause_game";
import { actRestartGame } from "./features/surf-gameplay/act_restart_game";
import { actStartGame } from "./features/surf-gameplay/act_start_game";
import { actReturnToGameplay } from "./features/surf-game-settings/act_return_to_gameplay";
import { actSavePreferences } from "./features/surf-game-settings/act_save_preferences";

type TilingBackgroundRepeatHelper = (target?: unknown) => boolean;

declare global {
  var isTilingBackgroundRepeat: TilingBackgroundRepeatHelper | undefined;

  interface Window {
    isTilingBackgroundRepeat?: TilingBackgroundRepeatHelper;
  }
}

export const isTilingBackgroundRepeat: TilingBackgroundRepeatHelper = (target) => {
  const repeat =
    typeof target === "string"
      ? target
      : typeof Element !== "undefined" && target instanceof Element
        ? window.getComputedStyle(target).backgroundRepeat
        : typeof CSSStyleDeclaration !== "undefined" && target instanceof CSSStyleDeclaration
          ? target.backgroundRepeat
          : typeof target === "object" && target !== null && "backgroundRepeat" in target
            ? String(target.backgroundRepeat ?? "")
            : "";

  return repeat
    .split(",")
    .map((layer) => layer.trim().toLowerCase())
    .some(
      (layer) =>
        ["repeat", "repeat-x", "repeat-y", "space", "round"].includes(layer) ||
        /\b(repeat|space|round)\b/.test(layer.replace("no-repeat", "")),
    );
};

globalThis.isTilingBackgroundRepeat = isTilingBackgroundRepeat;

if (typeof window !== "undefined") {
  window.isTilingBackgroundRepeat = isTilingBackgroundRepeat;
}

export default function App() {
  const game = useStarHarborLiteGame();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const gameplayActions = useMemo<Partial<Record<GameplayStarharborLiteActionId, () => void>>>(
    () => ({
      "pause-1": () => actPauseGame(game.actions.pause),
      "settings-2": () => setSettingsOpen(true),
      "resume-flight-3": () => actStartGame(game.actions.resume),
    }),
    [game.actions],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsStarharborLiteActionId, () => void>>>(
    () => ({
      "close-1": () => actReturnToGameplay(() => setSettingsOpen(false)),
      "rookie-2": () => game.actions.setDifficulty("rookie"),
      "pilot-3": () => game.actions.setDifficulty("pilot"),
      "ace-4": () => game.actions.setDifficulty("ace"),
      "return-to-game-5": () => actReturnToGameplay(() => setSettingsOpen(false)),
      "save-preferences-6": () => actSavePreferences(game.actions.savePreferences, () => setSettingsOpen(false)),
    }),
    [game.actions],
  );

  const bridgeActions = useMemo(
    () => ({
      ...game.actions,
      start: () => actStartGame(game.actions.start),
      restart: () => actRestartGame(game.actions.restart),
      pause: () => actPauseGame(game.actions.pause),
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [game.actions],
  );

  useEffect(() => {
    const screen: "settings" | "gameplay" = settingsOpen ? "settings" : "gameplay";
    const bridgeRuntime = { ...game.state, ...game.bridgeStatus, screen };
    window.app = {
      state: bridgeRuntime,
      runtime: bridgeRuntime,
      status: game.bridgeStatus.status,
      progress: game.bridgeStatus.progress,
      gameOver: game.bridgeStatus.gameOver,
      storageStatus: game.bridgeStatus.storageStatus,
      lastError: game.bridgeStatus.lastError,
      actions: bridgeActions,
    };
    globalThis.app = window.app;
  }, [bridgeActions, game.bridgeStatus, game.state, settingsOpen]);

  useEffect(() => {
    if (settingsOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          event.preventDefault();
          game.actions.moveLeft();
          break;
        case "ArrowRight":
        case "d":
        case "D":
          event.preventDefault();
          game.actions.moveRight();
          break;
        case " ":
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          game.actions.tick();
          break;
        case "p":
        case "P":
          event.preventDefault();
          if (game.state.paused) {
            actStartGame(game.actions.resume);
          } else {
            actPauseGame(game.actions.pause);
          }
          break;
        case "r":
        case "R":
          event.preventDefault();
          actRestartGame(game.actions.restart);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [game.actions, game.state.paused, settingsOpen]);

  return (
    <main data-setfarm-root="starharbor-lite" data-testid="setfarm-app-root" className="relative min-h-screen w-full max-w-full overflow-hidden bg-surface text-on-surface">
      <GameplayStarharborLite actions={gameplayActions} runtime={game.runtime} />
      {settingsOpen ? (
        <div className="fixed inset-0 z-50 max-w-full overflow-x-hidden bg-surface/80">
          <style>{`
            [data-starharbor-settings] > * {
              box-sizing: border-box;
              width: min(100%, calc(100vw - 32px)) !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }

            [data-starharbor-settings] .scale-105 {
              transform: none !important;
            }
          `}</style>
          <div data-starharbor-settings className="h-full w-full max-w-full overflow-x-hidden">
            <GameSettingsStarharborLite actions={settingsActions} />
          </div>
        </div>
      ) : null}
    </main>
  );
}
