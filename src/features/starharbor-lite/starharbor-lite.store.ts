import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createStarHarborInitialState,
  moveStarHarborPlayer,
  setStarHarborDifficulty,
  tickStarHarborRuntime,
  toGameplayRuntime,
  type StarHarborDifficulty,
  type StarHarborRuntimeState,
} from "../../game/game-runtime";
import { loadStarHarborPreferences, saveStarHarborPreferences } from "./starharbor-lite.repo";

export interface StarHarborLiteActions {
  pause: () => void;
  resume: () => void;
  reset: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  tick: () => void;
  setDifficulty: (difficulty: StarHarborDifficulty) => void;
  savePreferences: () => void;
}

export function useStarHarborLiteGame() {
  const [state, setState] = useState<StarHarborRuntimeState>(() =>
    createStarHarborInitialState(loadStarHarborPreferences().difficulty),
  );

  const pause = useCallback(() => {
    setState((current) => ({ ...current, paused: true, lastEvent: "paused" }));
  }, []);

  const resume = useCallback(() => {
    setState((current) => ({ ...current, paused: false, lastEvent: "resumed" }));
  }, []);

  const reset = useCallback(() => {
    setState((current) => createStarHarborInitialState(current.difficulty));
  }, []);

  const moveLeft = useCallback(() => {
    setState((current) => moveStarHarborPlayer(current, -1));
  }, []);

  const moveRight = useCallback(() => {
    setState((current) => moveStarHarborPlayer(current, 1));
  }, []);

  const tick = useCallback(() => {
    setState(tickStarHarborRuntime);
  }, []);

  const setDifficulty = useCallback((difficulty: StarHarborDifficulty) => {
    setState((current) => setStarHarborDifficulty(current, difficulty));
  }, []);

  const savePreferences = useCallback(() => {
    setState((current) => {
      saveStarHarborPreferences({ difficulty: current.difficulty });
      return { ...current, lastEvent: "preferences-saved" };
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState(tickStarHarborRuntime);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const actions = useMemo<StarHarborLiteActions>(
    () => ({
      pause,
      resume,
      reset,
      moveLeft,
      moveRight,
      tick,
      setDifficulty,
      savePreferences,
    }),
    [moveLeft, moveRight, pause, reset, resume, savePreferences, setDifficulty, tick],
  );

  return {
    state,
    runtime: toGameplayRuntime(state),
    actions,
  };
}
