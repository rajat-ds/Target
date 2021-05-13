
/**
 * @param {number} x 
 * @param {number} n 
 * @returns {number} ans
 * @author Rajat Kumar
 */
const pow = (x, n) => {
  if (n === 0) return 1;
  let ans = 1;
  let nn = n;
  if (n < 0) nn *= -1;
  while (nn > 0) {
    if (nn % 2 === 0) {
      x *= x;
      nn /= 2;
    } else {
      ans *= x;
      nn -= 1;
    }
  }
  if (n < 0) ans = 1 / ans;

  return ans;
};

console.log(pow(2, 10));
