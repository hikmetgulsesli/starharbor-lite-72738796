export type StartGameCommand = () => void;

export function actStartGame(startGame: StartGameCommand) {
  startGame();
}
