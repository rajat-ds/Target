module.exports = {
  //param A : array of integers
  //return a array of integers
  prevSmaller: function (nums) {
    let ans = Array(nums.length).fill(0);
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
      while (stack.length && stack[stack.length - 1] >= nums[i]) stack.pop();
      if (stack.length) ans[i] = stack[stack.length - 1];
      else ans[i] = -1;
      stack.push(nums[i]);
    }
    return ans;
  },
};
