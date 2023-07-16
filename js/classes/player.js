import { context } from '../../index.js';

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    };
    this.width = 30;
    this.height = 30;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.gravity = 0.5;
  }

  draw() {
    context.fillStyle = 'red';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}

export { Player };