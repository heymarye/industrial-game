import { Player } from './js/classes/player.js';
import { Platform } from './js/classes/platform.js';
import { handlePlayerMovement, handleParallaxScrolling } from './js/movements.js';
import { handlePlatformCollision } from './js/collisions.js';
import { loadImageFromAssets } from './js/utils.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

const player = new Player({
  imageSrc: './assets/idleRight.png',
  frameRate: 3,
  frameBuffer: 30,
  animations: {
    idleLeft: {
      imageSrc: './assets/idleLeft.png',
      frameRate: 3,
      frameBuffer: 30,
      loop: true
    },
    idleRight: {
      imageSrc: './assets/idleRight.png',
      frameRate: 3,
      frameBuffer: 30,
      loop: true
    },
    runLeft: {
      imageSrc: './assets/runLeft.png',
      frameRate: 8,
      frameBuffer: 15,
      loop: true
    },
    runRight: {
      imageSrc: './assets/runRight.png',
      frameRate: 8,
      frameBuffer: 15,
      loop: true
    },
    jumpLeft: {
      imageSrc: './assets/jumpLeft.png',
      frameRate: 8,
      frameBuffer: 10,
      loop: true
    },
    jumpRight: {
      imageSrc: './assets/jumpRight.png',
      frameRate: 8,
      frameBuffer: 10,
      loop: true
    }
  }
});

const platforms = [
  new Platform({
    position: {
      x: 400,
      y: 360
    },
  }),
  new Platform({
    position: {
      x: 650,
      y: 200
    }
  }),
  new Platform({
    position: {
      x: 1050,
      y: 300
    }
  }),
];

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });
}
animate();

export { canvas, context, gravity, player, platforms };