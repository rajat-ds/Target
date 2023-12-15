// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more
// than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
/**
 * Moore voting algorithm
 * @param {number[]} nums
 * @return {number}
 * @author Rajat Kumar
 */
var majorityElement = function (nums) {
  let count = 0;
  let ele = 0;
  nums.forEach((val) => {
    if (count === 0) ele = val;
    if (val === ele) count++;
    else count--;
  });
  return ele;
};
