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

var trap1 = function (height) {
  let prefix = [];
  let postfix = [];
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    max = Math.max(height[i], max);
    prefix[i] = max;
  }
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(height[i], max);
    postfix[i] = max;
  }
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    sum += Math.abs(height[i] - Math.min(prefix[i], postfix[i]));
  }
  return sum;
};
