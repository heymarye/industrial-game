import { canvas, context } from "./helpers/canvas.js";
import { player, map, collisionBlocks, camera, door } from "./helpers/objects.js";

function animate() {
  window.requestAnimationFrame(animate);
  camera.update();
  context.clearRect(0, 0, canvas.width, canvas.height);
  camera.applyTransform(context);
  map.draw();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });
  door.draw();
  player.update();
}

animate();