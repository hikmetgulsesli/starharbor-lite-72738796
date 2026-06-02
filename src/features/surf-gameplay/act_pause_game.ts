export type PauseGameCommand = () => void;

export function actPauseGame(pauseGame: PauseGameCommand) {
  pauseGame();
}
