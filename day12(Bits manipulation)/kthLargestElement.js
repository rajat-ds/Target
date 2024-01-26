/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  buildHeap(nums);
  let largest;
  for (let i = 1; i < k; i++) {
    nums[0] = nums[nums.length - 1];
    nums.pop();
    maxHeapify(nums, 0, nums.length);
  }

  console.log(nums);
  return nums[0];
};
const maxHeapify = (arr, i, heapLength) => {
  let LC = 2 * i + 1;
  let RC = 2 * i + 2;
  let largest;

  if (LC <= heapLength && arr[LC] > arr[i]) largest = LC;
  else largest = i;

  if (RC <= heapLength && arr[RC] > arr[largest]) largest = RC;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    maxHeapify(arr, largest, heapLength);
  }
};

const buildHeap = (arr) => {
  let heapLength = arr.length;
  for (let i = arr.length >> 1; i >= 0; i--) {
    maxHeapify(arr, i, heapLength);
  }
};
