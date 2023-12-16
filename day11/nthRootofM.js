/**
 * @param {number , number}
 * @return {number}
 * @author Rajat Kumar
 */
const multiply = (number, n) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= number;
  }
  return ans;
};
const getTthRootOfM = (n, m) => {
  let low = 1;
  let high = m;
  while (high - low > 1 / 100000) {
    let mid = (low + high) / 2;
    if (multiply(mid, n) > m) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return low;
};

console.log(getTthRootOfM(3, 27));
