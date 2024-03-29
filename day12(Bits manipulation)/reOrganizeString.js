/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
  }

  let arr = [];
  for (let item of map.entries()) arr.push(item);

  buildHeap(arr);

  let ans = [];
  for (let i = 1; i <= nums.length; i++) {
    let res = arr[0];

    if (res[1] > 0 && res[0] !== ans.at(-1)) ans.push(res[0]);
    else return "";
    arr[0] = arr[arr.length - 1];
    arr.pop();
    maxHeapify(arr, 0, arr.length);
    arr.push([res[0], res[1] - 1]);
  }
  return ans.join("");
};

const maxHeapify = (arr, i, heapLength) => {
  let LC = 2 * i + 1;
  let RC = 2 * i + 2;
  let largest;

  if (LC < heapLength && arr[LC][1] > arr[i][1]) largest = LC;
  else largest = i;

  if (RC < heapLength && arr[RC][1] > arr[largest][1]) largest = RC;

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
