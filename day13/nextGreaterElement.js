/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let ans = Array(nums.length).fill(0);
  let stack = [];

  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % nums.length])
      stack.pop();
    if (i < nums.length) {
      if (stack.length) ans[i] = stack.at(-1);
      else ans[i] = -1;
    }
    stack.push(nums[i % nums.length]);
  }
  return ans;
};
