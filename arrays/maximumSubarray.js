/**
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

/**
 * Niave Approach
 * @param {Array} arr
 * @returns maxim sum of subarray
 */
const maxSubArrayNaive = (arr) => {
  let max = arr[0],
    sum = 0;
  arr.forEach((element, k) => {
    arr.forEach((element, j) => {
      sum = arr[k];
      for (let i = k + 1; i <= j; i++) {
        sum += arr[i];
      }
      if (sum > max) {
        max = sum;
      }
    });
  });

  return max;
};

// console.log("Max Sum",maxSubArrayNaive(arr))
/**
 * Kadane Algorithm
 * @param {Array} arr
 * @returns maximum sum of sub Array
 */
const maxSubArray = (arr) => {
  let max = arr[0];
  sum = 0;
  arr.forEach((val) => {
    sum += val;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  });

  return max;
};

console.log("max Sum-->", maxSubArray(arr));
