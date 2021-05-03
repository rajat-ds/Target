// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.


// Naive  approach sort the array
// duplicate-> a[i]===a[i+1]
// O(nlogn)

/**
 * create another array with same length having zeros
 * iterate through orignal array and update the count
 * duplicate a [i]==2
 * O(N)
 * S(n)
 */

/**
 *Tortoise approach
 * @param {Array} nums
 * @returns  duplicate number
 * @author Rajat Kumar
 */
const findDuplicate = function (nums) {
    let slow = nums[0],
    fast = nums[nums[0]];

  //here fast moves two steps at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;

  //here fast move one step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
let nums = [1, 4, 3, 5, 2, 2];
console.log("duplicate ->", findDuplicate(nums));
// Examples:
// [1,4,3,5,2,2]
// 0->1->4->2->3->5->2->3->5->...
//          ^

// [1,3,2,1]
// 0->1->3->1->3->...
//    ^

// [3,4,6,5,1,1,2]
// 0->3->5->1->4->1->4->...
//
