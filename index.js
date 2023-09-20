import { canvas, context } from "./js/canvas.js";
import { player, map, collisionBlocks, camera } from "./js/objects.js";

function animate() {
  window.requestAnimationFrame(animate);
  camera.update();
  context.clearRect(0, 0, canvas.width, canvas.height);
  camera.applyTransform(context);
  map.draw();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });
  player.update();
}

animate();