import { context } from '../canvas.js';
import { loadImageFromAssets } from '../utils.js';
import { handlePlayerMovement } from '../movements.js';
import { handlePlatformCollision } from '../collisions.js';
import { Sprite } from './sprite.js';

class Player extends Sprite {
  constructor({ imageSrc, frameWidth, frameHeight, frameRate, frameBuffer, currentFrame, elapsedFrames, animations }) {
    super({ imageSrc, frameWidth, frameHeight, frameRate, frameBuffer, currentFrame, elapsedFrames, animations });
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 32;
    this.height = 32;
    // this.isImageLoaded = false;
    // this.imageName = imageName;
  }

  // async loadImage() {
  //   try {
  //     this.image = await loadImageFromAssets(this.imageName);
  //     this.isImageLoaded = true;
  //   } catch (error) {
  //     console.error('Failed to load player image:', error);
  //   }
  // }

  draw() {
    // if (this.isImageLoaded) {
    //   context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    // }
    
    // context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    //this.loadImage();
    super.draw();
    handlePlayerMovement();
    handlePlatformCollision();
  }
}

export { Player };