import { CollisionBlock } from "./classes/collisionBlock.js";

function loadImageFromAssets(name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/assets.json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            const asset = data.assets.find((asset) => asset.name === name);
            if (asset) {
              const image = new Image();
              image.src = asset.src;
              image.onload = () => resolve(image);
              image.onerror = reject;
            } else {
              reject(
                new Error(`Image with name '${name}' not found in assets.json`)
              );
            }
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(`Failed to load assets.json: status ${xhr.status}`));
        }
      }
    };
    xhr.send();
  });
}

// Array.prototype.parse2d = function () {
//   const rows = [];
//   for (let i = 0; i < this.length; i += mapWidth) { 
//     rows.push(this.slice(i, i + mapWidth)); 
//   }
//   return rows;
// };

function parse2d(array) {
  const mapWidth = 50; //number of cells in a row
  const rows = [];
  for (let i = 0; i < array.length; i += mapWidth) { 
    rows.push(array.slice(i, i + mapWidth)); 
  }
  return rows;
};

// Array.prototype.createObjectsFrom2d = function () {
//   const objects = [];
//   this.forEach((row, rowIndex) => {
//     row.forEach((symbol, symbolIndex) => {
//       if (symbol !== 0) { //collision exists
//         objects.push(
//           new CollisionBlock({
//             position: {
//               x: symbolIndex * 16,
//               y: rowIndex * 16,
//             },
//           })
//         );
//       }
//     });
//   });
//   return objects;
// };

function createObjectsFrom2d(array) {
  const collisionBlocks = [];
  const shapes = {
    square: [
      { x: 0, y: 0 }, // A
      { x: 16, y: 0 }, // B
      { x: 16, y: 16 }, // C
      { x: 0, y: 16 } // D
    ],
    horizontalSmallRectangle: [
      { x: 0, y: 0 },
      { x: 16, y: 0 },
      { x: 16, y: 5 },
      { x: 0, y: 5 },
    ],
    horizontalBigRectangle: [
      { x: 0, y: 0 },
      { x: 16, y: 0 },
      { x: 16, y: 10 },
      { x: 0, y: 10 },
    ],
    leftVerticalRectangle: [
      { x: 12, y: 0 },
      { x: 16, y: 0 },
      { x: 16, y: 16 },
      { x: 12, y: 16 }
    ],
    rightVerticalRectangle: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 16 },
      { x: 0, y: 16 }
    ],
    leftRectangleCorner: [
      { x: 8, y: 0 },
      { x: 16, y: 0 },
      { x: 16, y: 5 },
      { x: 8, y: 5 }
    ],
    rightRectangleCorner: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 8, y: 5 },
      { x: 0, y: 5 }
    ],
    leftTriangle: [
      { x: 0, y: 0 },
      { x: 16, y: 0 },
      { x: 16, y: 16 },
      { x: 12, y: 16 },
      { x: 0, y: 5 }
    ],
    rightTriangle: [
      { x: 16, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 16 },
      { x: 4, y: 16 },
      { x: 16, y: 5 }
    ]
  };

  array.forEach((row, rowIndex) => {
    row.forEach((symbol, symbolIndex) => {
      let shape; 
      if (symbol === 4445) {
        shape = shapes.square;
      } else if (symbol === 4479) {
        shape = shapes.horizontalSmallRectangle;
      } else if (symbol === 4475) {
        shape = shapes.horizontalBigRectangle;
      } else if (symbol === 4313) {
        shape = shapes.leftVerticalRectangle;
      } else if (symbol === 4314) {
        shape = shapes.rightVerticalRectangle;
      } else if (symbol === 4276) {
        shape = shapes.leftRectangleCorner;
      } else if (symbol === 4277) {
        shape = shapes.rightRectangleCorner;
      } else if (symbol === 4282) {
        shape = shapes.leftTriangle;
      } else if (symbol === 4281) {
        shape = shapes.rightTriangle;
      }

      if (shape) {
        collisionBlocks.push(
          new CollisionBlock({
            position: {
              x: symbolIndex * CollisionBlock.width * CollisionBlock.scale,
              y: rowIndex * CollisionBlock.height * CollisionBlock.scale,
            },
            shape: shape
          })
        );
      }
    });
  });
  return collisionBlocks;
}

export { loadImageFromAssets, parse2d, createObjectsFrom2d };