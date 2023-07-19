import { player, platforms } from '../index.js';
import { setIsGrounded, setJumpCount } from './movements.js';

//rectangular collision detection
function handlePlatformCollision() {
  platforms.forEach((platform) => {
    if (player.position.y + player.height <= platform.position.y //detect where the platform is
    && player.position.y + player.height + player.velocity.y >= platform.position.y //collide with the top of the platform
    && player.position.x + player.width >= platform.position.x //fall down if the player goes over the edge of the platform on the left
    && player.position.x <= platform.position.x + platform.width) { //fall down if the player goes over the edge of the platform on the right, ie collision of the left side of a player + the right side of a platform
    
      // below: to prevent the player from staying on the platform if he's touching it less than 30-40 percents

      // const overlapWidth = Math.min(player.position.x + player.width, platform.position.x + platform.width) - Math.max(player.position.x, platform.position.x);
      // const overlapPercentage = (overlapWidth / player.width) * 100;
      // const minOverlapPercentage = 40;
      // if (overlapPercentage >= minOverlapPercentage) {
        player.velocity.y = 0;
        setIsGrounded(true);
        setJumpCount(0);
      // }
    }
  });
}

export { handlePlatformCollision };