import CollisionBlock from "../components/CollisionBlock.js";

export function parse2d(array) {
  const mapWidth = 50; //number of cells in a row
  const rows = [];
  for (let i = 0; i < array.length; i += mapWidth) { 
    rows.push(array.slice(i, i + mapWidth)); 
  }
  return rows;
};

export function createObjectsFrom2d(array) {
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

  function calculateShapeDimensions(shape) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
  
    shape.forEach(point => {
      if (point.x < minX) minX = point.x;
      if (point.y < minY) minY = point.y;
      if (point.x > maxX) maxX = point.x;
      if (point.y > maxY) maxY = point.y;
    });
  
    const width = (maxX - minX) * CollisionBlock.scale;
    const height = (maxY - minY) * CollisionBlock.scale;
    // const width = (maxX - minX);
    // const height = (maxY - minY);
  
    return { width, height };
  }

  array.forEach((row, rowIndex) => {
    row.forEach((symbol, symbolIndex) => {
      let shape; 
      let dimensions;
      if (symbol === 4445) {
        shape = shapes.square;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4479) {
        shape = shapes.horizontalSmallRectangle;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4475) {
        shape = shapes.horizontalBigRectangle;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4313) {
        shape = shapes.leftVerticalRectangle;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4314) {
        shape = shapes.rightVerticalRectangle;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4276) {
        shape = shapes.leftRectangleCorner;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4277) {
        shape = shapes.rightRectangleCorner;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4282) {
        shape = shapes.leftTriangle;
        dimensions = calculateShapeDimensions(shape);
      } else if (symbol === 4281) {
        shape = shapes.rightTriangle;
        dimensions = calculateShapeDimensions(shape);
      }

      if (shape) {
        collisionBlocks.push(
          new CollisionBlock({
            position: {
              x: symbolIndex * CollisionBlock.width * CollisionBlock.scale,
              y: rowIndex * CollisionBlock.height * CollisionBlock.scale,
            },
            shape: shape,
            dimensions: dimensions
          })
        );
      }
    });
  });
  return collisionBlocks;
}