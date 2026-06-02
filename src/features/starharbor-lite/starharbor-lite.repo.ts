import type { StarHarborDifficulty } from "../../game/game-runtime";

const STORAGE_KEY = "starharbor-lite-preferences";

export interface StarHarborPreferences {
  difficulty: StarHarborDifficulty;
}

export function loadStarHarborPreferences(): StarHarborPreferences {
  if (typeof window === "undefined") {
    return { difficulty: "pilot" };
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { difficulty: "pilot" };
    }

    const parsed = JSON.parse(stored) as Partial<StarHarborPreferences>;
    return parsed.difficulty === "rookie" || parsed.difficulty === "pilot" || parsed.difficulty === "ace"
      ? { difficulty: parsed.difficulty }
      : { difficulty: "pilot" };
  } catch {
    return { difficulty: "pilot" };
  }
}

export function saveStarHarborPreferences(preferences: StarHarborPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}
