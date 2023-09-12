import { Player } from "./classes/player.js";
import { Platform } from "./classes/platform.js";

const player = new Player({
  frameRate: 3,
  frameBuffer: 30,
});

const platforms = [
  new Platform({
    position: {
      x: 400,
      y: 360,
    },
  }),
  new Platform({
    position: {
      x: 650,
      y: 200,
    },
  }),
  new Platform({
    position: {
      x: 1050,
      y: 300,
    },
  }),
];

export { player, platforms };