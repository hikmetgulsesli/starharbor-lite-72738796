import { useEffect, useMemo, useState } from "react";
import {
  GameSettingsStarharborLite,
  GameplayStarharborLite,
  type GameSettingsStarharborLiteActionId,
  type GameplayStarharborLiteActionId,
} from "./screens";
import { actPauseGame } from "./features/surf-gameplay/act_pause_game";
import { actRestartGame } from "./features/surf-gameplay/act_restart_game";
import { actStartGame } from "./features/surf-gameplay/act_start_game";
import { useStarHarborLiteGame } from "./features/starharbor-lite/starharbor-lite.store";

export default function App() {
  const game = useStarHarborLiteGame();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const gameplayActions = useMemo<Partial<Record<GameplayStarharborLiteActionId, () => void>>>(
    () => ({
      "pause-1": () => actPauseGame(game.actions.pause),
      "settings-2": () => setSettingsOpen(true),
      "resume-flight-3": game.actions.resume,
    }),
    [game.actions],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsStarharborLiteActionId, () => void>>>(
    () => ({
      "close-1": () => setSettingsOpen(false),
      "rookie-2": () => game.actions.setDifficulty("rookie"),
      "pilot-3": () => game.actions.setDifficulty("pilot"),
      "ace-4": () => game.actions.setDifficulty("ace"),
      "return-to-game-5": () => setSettingsOpen(false),
      "save-preferences-6": () => {
        game.actions.savePreferences();
        setSettingsOpen(false);
      },
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
            game.actions.resume();
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
    <main data-setfarm-root="starharbor-lite" data-testid="setfarm-app-root" className="min-h-screen bg-surface text-on-surface">
      <GameplayStarharborLite actions={gameplayActions} runtime={game.runtime} />
      {settingsOpen ? (
        <div className="fixed inset-0 z-50 bg-surface/80">
          <GameSettingsStarharborLite actions={settingsActions} />
        </div>
      ) : null}
    </main>
  );
}
