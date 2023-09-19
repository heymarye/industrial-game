import { Player } from "./classes/player.js";
import { Platform } from "./classes/platform.js";
import { Sprite } from "./classes/sprite.js";
import { collionsData } from "../data/collisions.js";
import { parse2d, createObjectsFrom2d } from "./utils.js";

const parsedCollisions = parse2d(collionsData);
const collisionBlocks = createObjectsFrom2d(parsedCollisions);

const player = new Player({
  collisionBlocks
});

const platforms = [
  new Platform({
    position: {
      x: 200,
      y: 556,
    },
  }),
  new Platform({
    position: {
      x: 650,
      y: 470,
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

export { player, platforms, map, collisionBlocks };