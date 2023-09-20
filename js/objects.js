import { collionsData } from "../data/collisions.js";
import { parse2d, createObjectsFrom2d } from "./utils.js";
import { Player } from "./classes/player.js";
import { Sprite } from "./classes/sprite.js";
import { Camera } from "./classes/camera.js";

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

const camera = new Camera({});

export { player, map, collisionBlocks, camera };