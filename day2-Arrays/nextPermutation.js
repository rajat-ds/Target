const nums = [1, 1, 5];

const nextPermutation = (nums) => {
  function reverse(start) {
    let end = nums.length - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i < 0) {
    reverse(0);
    return;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(i + 1);
  return nums;
};

console.log("reverse", nextPermutation(nums));
