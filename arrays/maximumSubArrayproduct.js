const num=[2,3,-2,4];
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (!nums && !nums.length) return nums;

  const n = nums.length;

  let prevMax = nums[0];
  let prevMin = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < n; i++) {
    // choices: 1) prevMax * nums[i], 2) nums[i], 3) prevMin * nums[i]
    let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    // max and min could have swapped
    prevMax = Math.max(localMax, localMin);
    prevMin = Math.min(localMax, localMin);

    maxSoFar = Math.max(maxSoFar, prevMax);
  }

  return maxSoFar;
};

console.log("maximum Product --->",maxProduct(arr))
