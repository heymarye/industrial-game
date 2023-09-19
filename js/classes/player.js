import { Sprite } from "./sprite.js";
import { CollisionBlock } from "./collisionBlock.js";
import { handlePlayerMovement } from "../movements.js";
import { setIsGrounded, setJumpCount } from "../movements.js";
import { context } from "../canvas.js";

class Player extends Sprite {
  constructor({ collisionBlocks = []}) {
    super({
      imageSrc: "./assets/idleRight.png",
      imageScale: 2.5, //2.5
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
    this.collisionBlocks = collisionBlocks;
  }

  applyGravity() {
    const gravity = 0.5;
    this.velocity.y += gravity;
    this.position.y += this.velocity.y;
  }
  
  checkForHorizontalCollisions() {
  this.position.x += this.velocity.x;
  for (let i = 0; i < this.collisionBlocks.length; i++) {
    const collisionBlock = this.collisionBlocks[i];
    if (this.position.x <= collisionBlock.position.x + CollisionBlock.width * CollisionBlock.scale && //leftPlayer <= rightCollisionBlock
        this.position.x + this.width * this.imageScale >= collisionBlock.position.x && //rightPlayer >= leftCollisionBlock
        this.position.y + this.height * this.imageScale >= collisionBlock.position.y && //bottomPlayer >= topCollisionBlock
        this.position.y <= collisionBlock.position.y + CollisionBlock.height * CollisionBlock.scale) { //topPlayer <= bottomCollisionBlock
          if (this.velocity.x < 0) { //collision on x-axis going to the left
            this.position.x = collisionBlock.position.x + CollisionBlock.width * CollisionBlock.scale + 0.01;
            break;
          }
          if (this.velocity.x > 0) { //collision on x-axis to the right
            this.position.x = collisionBlock.position.x - this.width * this.imageScale - 0.01;
            break;
          }
      }
    }
  }

  checkForVerticalCollisions() {
  for (let i = 0; i < this.collisionBlocks.length; i++) {
    const collisionBlock = this.collisionBlocks[i];
    if (this.position.x <= collisionBlock.position.x + CollisionBlock.width * CollisionBlock.scale &&
        this.position.x + this.width * this.imageScale >= collisionBlock.position.x &&
        this.position.y + this.height * this.imageScale >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + CollisionBlock.height * CollisionBlock.scale) {
          if (this.velocity.y < 0) { //collision on y-axis going up
            this.velocity.y = 0;
            this.position.y = collisionBlock.position.y + CollisionBlock.height * CollisionBlock.scale + 0.01;
            break;
          }
          if (this.velocity.y > 0) { //collision on y-axis going down
            this.velocity.y = 0;
            this.position.y = collisionBlock.position.y - this.height * this.imageScale - 0.01;
            setIsGrounded(true);
            setJumpCount(0);
            break;
          }
      }
    }
  }

  update() {
    context.fillStyle = "black";
    context.fillRect(this.position.x, this.position.y + (this.height * (1 - this.imageScale)), this.width * this.imageScale, this.height * this.imageScale);
    super.draw();
    handlePlayerMovement();
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();
  }
}

export { Player };