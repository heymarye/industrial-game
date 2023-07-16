const keys = {
  w: { 
    pressed: false 
  },
  a: { 
    pressed: false 
  },
  d: { 
    pressed: false 
  },
  ArrowUp: { 
    pressed: false 
  },
  ArrowLeft: { 
    pressed: false 
  },
  ArrowRight: { 
    pressed: false 
  },
  spacebar: { 
    pressed: false 
  }
};

let lastKey = '';
window.addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    //wasd
    case 87: //up
      keys.w.pressed = true;
      break;
    case 65: //left
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 68: //right
      keys.d.pressed = true;
      lastKey = 'd';
      break;
    //arrows
    case 38: //up
      keys.ArrowUp.pressed = true;
      break;
    case 37: //left
      keys.ArrowLeft.pressed = true;
      lastKey = 'ArrowLeft';
      break;
    case 39: //right
      keys.ArrowRight.pressed = true;
      lastKey = 'ArrowRight';
      break;
    case 32: //up
      keys.spacebar.pressed = true;
      break;
  }
});

window.addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    case 87:
      keys.w.pressed = false;
      break;
    case 65: 
      keys.a.pressed = false;
      break;
    case 68:
      keys.d.pressed = false;
      break;
    case 38:
      keys.ArrowUp.pressed = false;
      break;
    case 37:
      keys.ArrowLeft.pressed = false;
      break;
    case 39:
      keys.ArrowRight.pressed = false;
      break;
    case 32:
      keys.spacebar.pressed = false;
      break;
  }
});

export { keys, lastKey };