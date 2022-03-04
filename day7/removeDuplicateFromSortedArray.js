/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;

  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    } else {
      j++;
    }
  }
  return i + 1;
};
