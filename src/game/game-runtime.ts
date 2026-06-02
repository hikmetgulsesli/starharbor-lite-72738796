export type StarHarborDifficulty = "rookie" | "pilot" | "ace";

export interface StarHarborEntity {
  lane: number;
  position: number;
}

export interface StarHarborRuntimeState {
  player: StarHarborEntity;
  obstacles: StarHarborEntity[];
  shards: StarHarborEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  difficulty: StarHarborDifficulty;
  tick: number;
  lastEvent: string;
}

const DIFFICULTY_SPEED: Record<StarHarborDifficulty, number> = {
  rookie: 8,
  pilot: 11,
  ace: 14,
};

export function createStarHarborInitialState(difficulty: StarHarborDifficulty = "pilot"): StarHarborRuntimeState {
  return {
    player: { lane: 1, position: 12 },
    obstacles: [
      { lane: 0, position: 88 },
      { lane: 2, position: 126 },
    ],
    shards: [
      { lane: 1, position: 54 },
      { lane: 2, position: 104 },
    ],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    difficulty,
    tick: 0,
    lastEvent: "ready",
  };
}

export function setStarHarborDifficulty(state: StarHarborRuntimeState, difficulty: StarHarborDifficulty): StarHarborRuntimeState {
  return {
    ...state,
    difficulty,
    lastEvent: `difficulty:${difficulty}`,
  };
}

export function moveStarHarborPlayer(state: StarHarborRuntimeState, laneDelta: number): StarHarborRuntimeState {
  return {
    ...state,
    player: {
      ...state.player,
      lane: Math.max(0, Math.min(2, state.player.lane + laneDelta)),
    },
    lastEvent: "maneuver",
  };
}

export function tickStarHarborRuntime(state: StarHarborRuntimeState): StarHarborRuntimeState {
  if (state.paused || state.lives <= 0) {
    return state;
  }

  const speed = DIFFICULTY_SPEED[state.difficulty];
  const tick = state.tick + 1;
  const player = state.player;
  let score = state.score + speed;
  let energy = Math.max(0, state.energy - 1);
  let lives = state.lives;
  let lastEvent = "cruising";

  const obstacles = state.obstacles.map((obstacle, index) => {
    const next = obstacle.position - speed;
    return next < 0 ? { lane: (tick + index) % 3, position: 118 + index * 38 } : { ...obstacle, position: next };
  });

  const shards = state.shards.map((shard, index) => {
    const next = shard.position - speed;
    return next < 0 ? { lane: (tick + index + 1) % 3, position: 96 + index * 42 } : { ...shard, position: next };
  });

  const hitObstacle = obstacles.some((obstacle) => obstacle.lane === player.lane && Math.abs(obstacle.position - player.position) <= 5);
  if (hitObstacle) {
    lives = Math.max(0, lives - 1);
    energy = Math.max(0, energy - 18);
    lastEvent = "impact";
  }

  const collectedShard = shards.some((shard) => shard.lane === player.lane && Math.abs(shard.position - player.position) <= 5);
  if (collectedShard) {
    score += 100;
    energy = Math.min(100, energy + 12);
    lastEvent = "shard";
  }

  return {
    ...state,
    obstacles,
    shards,
    score,
    energy,
    lives,
    paused: energy <= 0 || lives <= 0 ? true : state.paused,
    tick,
    lastEvent,
  };
}

export function toGameplayRuntime(state: StarHarborRuntimeState) {
  return {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };
}
