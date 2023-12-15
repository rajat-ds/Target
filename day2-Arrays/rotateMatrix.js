const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
/**
 *
 * @param {number[][]} matrix
 * @returns {void} Do not return anything
 */
const rotate = function (matrix) {
  if (!matrix.length) return;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let k = matrix.length - 1;
    let j = 0;
    while (k > j) {
      [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
      j++;
      k--;
    }
  }
};
rotate(matrix);
console.log(matrix);
