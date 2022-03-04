/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let leftmax = 0;
  let rightmax = 0;
  let res = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftmax) leftmax = height[left];
      else res = res + (leftmax - height[left]);

      left++;
    } else {
      if (height[right] >= rightmax) rightmax = height[right];
      else res = res + (rightmax - height[right]);
      right--;
    }
  }
  return res;
};
