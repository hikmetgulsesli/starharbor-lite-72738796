export type RestartGameCommand = () => void;

export function actRestartGame(restartGame: RestartGameCommand) {
  restartGame();
}
