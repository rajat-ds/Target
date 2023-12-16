/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (target == nums[mid]) return mid;
    // check if left half is sorted
    if (nums[low] <= nums[mid]) {
      if (target <= nums[mid] && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
