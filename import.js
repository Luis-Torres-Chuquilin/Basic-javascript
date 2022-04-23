/** @format */

// 1 //
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;

import colors from "./modules/getColors.js";
//

// 2 //
class Square {
  constructor(ctx, listId, length, x, y, color) {}

  draw() {}
}

export { Square };

import { Square } from "./modules/square.js";

// 3 //

/*
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
*/

export { Square };

export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";

import { Square, Circle, Triangle } from "./modules/shapes.js";

//

//  4 //

//
