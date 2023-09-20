import { canvas } from "../canvas.js";
import { player, map } from "../objects.js";

class Camera {
  constructor({}) {
    //the camera is centered on the player
    this.x = player.position.x - canvas.width / 2;
    this.y = player.position.y - canvas.height / 2;
  }

  update() {
    //follow the player
    this.x = player.position.x - canvas.width / 2;
    this.y = player.position.y - canvas.height / 2;
    //ensure the camera doesn't go outside the map
    this.x = Math.max(0, Math.min(this.x, map.width - canvas.width));
    this.y = Math.max(0, Math.min(this.y, map.height - canvas.height));
  }

  applyTransform(context) {
    //apply the camera's position as a translation to the rendering context
    context.setTransform(1, 0, 0, 1, -this.x, -this.y);
  }
}

export { Camera };