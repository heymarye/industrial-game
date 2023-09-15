import { Player } from "./classes/player.js";
import { Platform } from "./classes/platform.js";
import { Sprite } from "./classes/sprite.js";
import { collionsData } from "../data/collisions.js";
import { parse2d, createObjectsFrom2d } from "./utils.js";

const player = new Player({});

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

const map = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: '../assets/map.png'
});

const parsedCollisions = parse2d(collionsData);
const collisionBlocks = createObjectsFrom2d(parsedCollisions);

export { player, platforms, map, collisionBlocks };