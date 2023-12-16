// left half
// 1st instance even
var singleNonDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 2;
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[low];
};
