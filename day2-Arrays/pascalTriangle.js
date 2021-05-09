const printPascalTriangle = (n) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = [];
    ans[i][0] = 1;
    for (let k = 1; k < i; k++) {
      ans[i][k] = ans[i - 1][k - 1] + ans[i - 1][k];
    }
    ans[i][i] = 1;
  }
  return ans;
};

console.log(printPascalTriangle(5));
