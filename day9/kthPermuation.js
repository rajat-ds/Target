/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let fact = 1;
  let nums = [];
  for (let i = 1; i < n; i++) {
    fact *= i;
    nums.push(i);
  }
  nums.push(n);
  k -= 1;
  let ans = "";
  while (true) {
    ans += nums[Math.floor(k / fact)];
    nums.splice(Math.floor(k / fact), 1);

    if (!nums.length) break;
    k %= fact;
    fact /= nums.length;
  }
  return ans;
};
