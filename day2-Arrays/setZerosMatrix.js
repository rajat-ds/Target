/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const matrix = [
  [-4, -2147483648, 6, -7, 0],
  [-8, 6, -8, -6, 0],
  [2147483647, 2, -9, -6, -10],
];
var setZeroes = function (matrix) {
  let Col = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) Col = true;
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 1; j--) {
      if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0;
    }
    if (Col) matrix[i][0] = 0;
  }
};
setZeroes(matrix);
console.log(matrix);
