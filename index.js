import { canvas, context } from "./js/canvas.js";
import { player, platforms, map, collisionBlocks } from "./js/objects.js";

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  map.draw();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });
  player.update();
  // platforms.forEach((platform) => {
  //   platform.draw();
  // });
}

animate();