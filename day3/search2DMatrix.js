/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  let row = 0;
  let col = matrix[0].length - 1;
  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }
  return false;
};

(matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]),
  (target = 33);

// console.log(searchMatrix(matrix,target))

const searchMatrix2 = (matrix, target) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;
  if (!matrix.length || !matrix[0].length) return false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == matrix[Math.floor(mid / col)][mid % col]) return true;
    if (target > matrix[Math.floor(mid / col)][mid % col]) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};
// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 33

console.log(searchMatrix2(matrix, 33));
