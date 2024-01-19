/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  let ans = [];
  findCombination(0, candidates, target, ans, []);
  return ans;
};

const findCombination = (index, arr, target, ans, ds) => {
  if (index === arr.length) {
    if (target === 0) ans.push([...ds]);
    return;
  }

  if (arr[index] <= target) {
    ds.push(arr[index]);
    findCombination(index, arr, target - arr[index], ans, ds);
    ds.pop();
  }
  findCombination(index + 1, arr, target, ans, ds);
};
