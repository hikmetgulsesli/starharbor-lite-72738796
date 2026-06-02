export type ReturnToGameplayCommand = () => void;

export function actReturnToGameplay(returnToGameplay: ReturnToGameplayCommand) {
  returnToGameplay();
}
