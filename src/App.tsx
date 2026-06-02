import { useEffect, useMemo, useState } from "react";
import {
  GameSettingsStarharborLite,
  GameplayStarharborLite,
  type GameSettingsStarharborLiteActionId,
  type GameplayStarharborLiteActionId,
} from "./screens";
import { useStarHarborLiteGame } from "./features/starharbor-lite/starharbor-lite.store";

export default function App() {
  const game = useStarHarborLiteGame();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const gameplayActions = useMemo<Partial<Record<GameplayStarharborLiteActionId, () => void>>>(
    () => ({
      "pause-1": game.actions.pause,
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
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [game.actions],
  );

  useEffect(() => {
    window.app = { state: { ...game.state, screen: settingsOpen ? "settings" : "gameplay" }, actions: bridgeActions };
    globalThis.app = window.app;
  }, [bridgeActions, game.state, settingsOpen]);

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
