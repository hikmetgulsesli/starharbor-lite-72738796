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

export type StarHarborStorageStatus = "ready" | "unavailable" | "error";

export interface StarHarborBridgeStatus {
  status: "ready" | "paused" | "game-over";
  progress: number;
  gameOver: boolean;
  storageStatus: StarHarborStorageStatus;
  lastError: string | null;
}

export interface StarHarborLiteActions {
  start: () => void;
  restart: () => void;
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
  const initialPreferences = useMemo(() => loadStarHarborPreferences(), []);
  const [storageStatus, setStorageStatus] = useState<StarHarborStorageStatus>(initialPreferences.status);
  const [lastError, setLastError] = useState<string | null>(initialPreferences.error ?? null);
  const [state, setState] = useState<StarHarborRuntimeState>(() =>
    createStarHarborInitialState(initialPreferences.value.difficulty),
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

  const start = useCallback(() => {
    setState((current) => ({ ...current, paused: false, lastEvent: "started" }));
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
      const saved = saveStarHarborPreferences({ difficulty: current.difficulty });
      setStorageStatus(saved.status);
      setLastError(saved.error ?? null);
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
      start,
      restart: reset,
      pause,
      resume,
      reset,
      moveLeft,
      moveRight,
      tick,
      setDifficulty,
      savePreferences,
    }),
    [moveLeft, moveRight, pause, reset, resume, savePreferences, setDifficulty, start, tick],
  );

  const bridgeStatus = useMemo<StarHarborBridgeStatus>(() => {
    const gameOver = state.energy <= 0 || state.lives <= 0;

    return {
      status: gameOver ? "game-over" : state.paused ? "paused" : "ready",
      progress: state.tick,
      gameOver,
      storageStatus,
      lastError,
    };
  }, [lastError, state.energy, state.lives, state.paused, state.tick, storageStatus]);

  return {
    state,
    runtime: toGameplayRuntime(state),
    bridgeStatus,
    actions,
  };
}
