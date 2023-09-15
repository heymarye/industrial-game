import { Sprite } from "./sprite.js";
import { handlePlayerMovement } from "../movements.js";
import { handlePlatformCollision } from "../collisions.js";

class Player extends Sprite {
  constructor({}) {
    super({
      imageSrc: "./assets/idleRight.png",
      imageScale: 2.5,
      frameRate: 3,
      frameBuffer: 30,
      animations: {
        idleLeft: {
          imageSrc: "./assets/idleLeft.png",
          frameRate: 3,
          frameBuffer: 30,
        },
        idleRight: {
          imageSrc: "./assets/idleRight.png",
          frameRate: 3,
          frameBuffer: 30,
        },
        runLeft: {
          imageSrc: "./assets/runLeft.png",
          frameRate: 8,
          frameBuffer: 15,
        },
        runRight: {
          imageSrc: "./assets/runRight.png",
          frameRate: 8,
          frameBuffer: 15,
        },
        jumpLeft: {
          imageSrc: "./assets/jumpLeft.png",
          frameRate: 8,
          frameBuffer: 10,
        },
        jumpRight: {
          imageSrc: "./assets/jumpRight.png",
          frameRate: 8,
          frameBuffer: 10,
        },
      },
    });
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    super.draw();
    handlePlayerMovement();
    handlePlatformCollision();
  }
}

export { Player };