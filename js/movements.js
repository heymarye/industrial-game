import { player, platforms } from "./objects.js";
import { canvas } from "./canvas.js";
import { keys, lastKey } from "./keys.js";

const gravity = 0.5;
let lastDirection = "right";
let isGrounded = true;
let jumpCount = 0;
const maxJumpCount = 2;

function handlePlayerMovement() {
  player.position.x += player.velocity.x;
  player.position.y += player.velocity.y;
  //application of gravity
  if (player.position.y + player.height + player.velocity.y <= canvas.height) {
    player.velocity.y += gravity;
  } else {
    player.velocity.y = 0;
    isGrounded = true;
    jumpCount = 0;
  }
  //horizontal movement (left, right)
  if (keys.a.pressed && lastKey === "a" || keys.ArrowLeft.pressed && lastKey === "ArrowLeft") { //&& player.position.x > 100
    player.velocity.x = -3;
    lastDirection = "left";
    player.switchAnimation("runLeft");
  } else if (keys.d.pressed && lastKey === "d" || keys.ArrowRight.pressed && lastKey === "ArrowRight") { //&& player.position.x < 400
    player.velocity.x = 3;
    lastDirection = "right";
    player.switchAnimation("runRight");
  } else {
    player.velocity.x = 0;
    if (lastDirection === "left") { 
      player.switchAnimation("idleLeft");
    } else if (lastDirection === "right") {
      player.switchAnimation("idleRight");
    }
  }
  //vertical movement (jump)
  if ((keys.w.pressed || keys.ArrowUp.pressed || keys.spacebar.pressed) && (isGrounded || jumpCount < maxJumpCount)) {
    player.velocity.y = -15;
    // console.log(lastDirection);
    // if (lastDirection === 'left') {
    //   player.switchAnimation('jumpLeft');
    // } else if (lastDirection === 'right') {
    //   player.switchAnimation('jumpRight');
    // }
    jumpCount++;
    isGrounded = false;
    keys.w.pressed = false;
    keys.ArrowUp.pressed = false;
    keys.spacebar.pressed = false;
  } 
}

function handleParallaxScrolling() {
  // if (player.velocity.x === 0) {
  //   if (keys.a.pressed || keys.ArrowLeft.pressed) {
  //     platforms.forEach((platform) => {
  //       platform.position.x += 5;
  //     });
  //   } else if (keys.d.pressed || keys.ArrowRight.pressed) {
  //     platforms.forEach((platform) => {
  //       platform.position.x -= 5;
  //     });
  //   }
  // }
}

function setIsGrounded(state) {
  isGrounded = state;
}

function setJumpCount(state) {
  jumpCount = state;
}

export { handlePlayerMovement, handleParallaxScrolling, setIsGrounded, setJumpCount };