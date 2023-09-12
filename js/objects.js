import { Player } from "./classes/player.js";
import { Platform } from "./classes/platform.js";

const player = new Player({
  imageSrc: './assets/idleRight.png',
  frameRate: 3,
  frameBuffer: 30,
  animations: {
    idleLeft: {
      imageSrc: './assets/idleLeft.png',
      frameRate: 3,
      frameBuffer: 30,
      loop: true
    },
    idleRight: {
      imageSrc: './assets/idleRight.png',
      frameRate: 3,
      frameBuffer: 30,
      loop: true
    },
    runLeft: {
      imageSrc: './assets/runLeft.png',
      frameRate: 8,
      frameBuffer: 15,
      loop: true
    },
    runRight: {
      imageSrc: './assets/runRight.png',
      frameRate: 8,
      frameBuffer: 15,
      loop: true
    },
    jumpLeft: {
      imageSrc: './assets/jumpLeft.png',
      frameRate: 8,
      frameBuffer: 10,
      loop: true
    },
    jumpRight: {
      imageSrc: './assets/jumpRight.png',
      frameRate: 8,
      frameBuffer: 10,
      loop: true
    }
  }
});

const platforms = [
  new Platform({
    position: {
      x: 400,
      y: 360
    },
  }),
  new Platform({
    position: {
      x: 650,
      y: 200
    }
  }),
  new Platform({
    position: {
      x: 1050,
      y: 300
    }
  }),
];

export { player, platforms };