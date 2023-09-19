import { player, platforms, collisionBlocks } from "./objects.js";
import { setIsGrounded, setJumpCount } from "./movements.js";
import { CollisionBlock } from "./classes/collisionBlock.js";

//rectangular collision detection
// function handlePlatformCollision() {
//   collisionBlocks.forEach((collisionBlock) => {
//     if (
//       player.position.y + player.height <= collisionBlock.position.y && //detect where the platform is
//       player.position.y + player.height + player.velocity.y >= collisionBlock.position.y && //collide with the top of the platform
//       player.position.x + player.width >= collisionBlock.position.x && //fall down if the player goes over the edge of the platform on the left
//       player.position.x <= collisionBlock.position.x + CollisionBlock.width * CollisionBlock.scale
//     ) {
//       //fall down if the player goes over the edge of the platform on the right, ie collision of the left side of a player + the right side of a platform

//       // below: to prevent the player from staying on the platform if he's touching it less than 30-40 percents

//       // const overlapWidth = Math.min(player.position.x + CollisionBlock.width * CollisionBlock.scale, collisionBlock.position.x + CollisionBlock.width * CollisionBlock.scale) - Math.max(player.position.x, collisionBlock.position.x);
//       // const overlapPercentage = (overlapWidth / player.width) * 100;
//       // const minOverlapPercentage = 10;
//       // if (overlapPercentage >= minOverlapPercentage) {
//       player.velocity.y = 0;
//       setIsGrounded(true);
//       setJumpCount(0);
//       }
//     //}
//   });
// }

// export { handlePlatformCollision };