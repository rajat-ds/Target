/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];
  findCombination(0, target, candidates, [], ans);
  return ans;
};

const findCombination = (index, target, candidates, ds, ans) => {
  if (!target) {
    ans.push([...ds]);
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    if (candidates[i] > target) break;
    ds.push(candidates[i]);
    findCombination(i + 1, target - candidates[i], candidates, ds, ans);
    ds.pop();
  }
};
