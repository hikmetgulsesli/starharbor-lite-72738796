import { createStarHarborInitialState } from "../game/game-runtime";

export const starHarborLiteFixture = {
  ready: createStarHarborInitialState("pilot"),
  paused: {
    ...createStarHarborInitialState("rookie"),
    paused: true,
    lastEvent: "paused",
  },
};
