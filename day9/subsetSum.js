/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */

class Solution {
  subsetSums(arr, n) {
    let ans = [];
    this.subSet(0, 0, arr, n, ans);
    ans.sort((a, b) => a - b);
    return ans;
  }
  subSet(index, sum, arr, n, ans) {
    if (index === n) {
      ans.push(sum);
      return;
    }
    this.subSet(index + 1, sum + arr[index], arr, n, ans);
    this.subSet(index + 1, sum, arr, n, ans);
  }
}
