/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  subSet(0, nums, ans, []);
  return ans;
};
const subSet = (index, arr, ans, ds) => {
  ans.push([...ds]);
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) continue;
    ds.push(arr[i]);
    subSet(i + 1, arr, ans, ds);
    ds.pop();
  }
};
