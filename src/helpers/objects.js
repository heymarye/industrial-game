import { collionsData } from "../data/collisions.js";
import { parse2d, createObjectsFrom2d } from "./utils.js";
import Player from "../components/Player.js";
import Sprite from "../components/Sprite.js";
import Camera from "../components/Camera.js";

const parsedCollisions = parse2d(collionsData);
export const collisionBlocks = createObjectsFrom2d(parsedCollisions);

export const player = new Player({
  collisionBlocks
});

export const map = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: "../assets/map.png"
});

export const camera = new Camera({});

export const door = new Sprite({
  position: {
    x: 150, //3000
    y: 80  //784
  },
  imageSrc: "../assets/door-v1(scaled)-spritesheet.png",
  frameRate: 6,
  frameBuffer: 15
});