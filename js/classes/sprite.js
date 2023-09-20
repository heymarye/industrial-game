import { context } from "../canvas.js";

class Sprite {
  constructor({ position, imageSrc, imageScale = 1, frameRate = 1, frameBuffer, animations }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.imageScale = imageScale;
    this.frameRate = frameRate;
    this.frameBuffer = frameBuffer;
    this.currentFrame = 0;
    this.elapsedFrames = 0;

    this.animations = animations;
    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
      }
    }
  }

  switchAnimation(name) {
    if (this.image !== this.animations[name].image) {
      this.currentFrame = 0;
      this.image = this.animations[name].image;
      this.frameRate = this.animations[name].frameRate;
      this.frameBuffer = this.animations[name].frameBuffer;
    }
  }

  updateFrames() {
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
    }
  }
  
  draw() {
    if (this.loaded) {
      const cropbox = {
        position: {
          x: this.width * this.currentFrame,
          y: 0,
        },
        width: this.width,
        height: this.height,
      };
      context.drawImage(
        this.image,
        cropbox.position.x,
        cropbox.position.y,
        cropbox.width,
        cropbox.height,
        this.position.x,
        this.position.y,
        this.width * this.imageScale,
        this.height * this.imageScale
      );
    }
  }

  update() {
    this.draw();
    this.updateFrames();
  }
}

export { Sprite };