import { canvas, context } from './js/canvas.js';
import { player, platforms } from './js/objects.js';

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });
}

animate();