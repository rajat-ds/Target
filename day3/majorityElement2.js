/**
 * @param {number[]} nums
 * @return {number[]}
 * @author Rajat Kumar
 */
const majorityElement = function (nums) {
  let num1 = -1;
  let num2 = -1;
  let count1 = 0;
  let count2 = 0;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    else if (nums[i] === num2) count2++;
    else if (!count1) {
      count1 = 1;
      num1 = nums[i];
    } else if (!count2) {
      count2 = 1;
      num2 = nums[i];
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    else if (nums[i] === num2) count2++;
  }
  if (count1 > Math.floor(nums.length / 3)) ans.push(num1);
  if (count2 > Math.floor(nums.length / 3)) ans.push(num2);

  return ans;
};

nums = [3, 2, 3];
console.log(majorityElement(nums));
