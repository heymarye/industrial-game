import { Player } from "./classes/player.js";
import { Sprite } from "./classes/sprite.js";
import { collionsData } from "../data/collisions.js";
import { parse2d, createObjectsFrom2d } from "./utils.js";

const parsedCollisions = parse2d(collionsData);
const collisionBlocks = createObjectsFrom2d(parsedCollisions);

const player = new Player({
  collisionBlocks
});

const map = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: '../assets/map.png'
});

export { player, map, collisionBlocks };