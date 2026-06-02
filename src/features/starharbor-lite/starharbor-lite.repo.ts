import type { StarHarborDifficulty } from "../../game/game-runtime";

const STORAGE_KEY = "starharbor-lite-preferences";

export interface StarHarborPreferences {
  difficulty: StarHarborDifficulty;
}

export interface StarHarborStorageResult<T> {
  value: T;
  status: "ready" | "unavailable" | "error";
  error?: string;
}

export function loadStarHarborPreferences(): StarHarborStorageResult<StarHarborPreferences> {
  const fallback = { difficulty: "pilot" as const };

  if (typeof window === "undefined") {
    return { value: fallback, status: "unavailable" };
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { value: fallback, status: "ready" };
    }

    const parsed = JSON.parse(stored) as Partial<StarHarborPreferences>;
    const value =
      parsed.difficulty === "rookie" || parsed.difficulty === "pilot" || parsed.difficulty === "ace"
        ? { difficulty: parsed.difficulty }
        : fallback;

    return { value, status: "ready" };
  } catch (error) {
    return { value: fallback, status: "error", error: error instanceof Error ? error.message : "storage-load-failed" };
  }
}

export function saveStarHarborPreferences(preferences: StarHarborPreferences): StarHarborStorageResult<StarHarborPreferences> {
  if (typeof window === "undefined") {
    return { value: preferences, status: "unavailable" };
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    return { value: preferences, status: "ready" };
  } catch (error) {
    return {
      value: preferences,
      status: "error",
      error: error instanceof Error ? error.message : "storage-save-failed",
    };
  }
}
