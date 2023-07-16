import { Player } from './js/classes/player.js';
import { handlePlayerMovement } from './js/movements.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  handlePlayerMovement();
  player.update();
}
animate();

export { canvas, context, player };