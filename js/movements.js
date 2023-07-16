import { keys, lastKey } from './keys.js';
import { canvas, player } from '../index.js';

let isGrounded = true;

function handlePlayerMovement() {
  player.position.x += player.velocity.x;
  player.position.y += player.velocity.y;
  //application of gravity
  if (player.position.y + player.height + player.velocity.y <= canvas.height) {
    player.velocity.y += player.gravity;
  } else {
    player.velocity.y = 0;
    isGrounded = true;
  }
  //horizontal movement (left, right)
  if (keys.a.pressed && lastKey === 'a' || keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
    player.velocity.x = -3;
  } else if (keys.d.pressed && lastKey === 'd' || keys.ArrowRight.pressed && lastKey === 'ArrowRight') {
    player.velocity.x = 3;
  } else {
    player.velocity.x = 0;
  }
  //vertical movement (jump)
  if (keys.w.pressed && isGrounded || keys.ArrowUp.pressed && isGrounded || keys.spacebar.pressed && isGrounded) {
    player.velocity.y -= 15;
    isGrounded = false;
  }
}

export { handlePlayerMovement };