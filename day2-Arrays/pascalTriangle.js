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

// console.log(printPascalTriangle(5));

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

const printPascalTriangle2 = (n) => {
  if (!n) return [1];
  let ans = [1];
  for (let i = 0; i < n; i++) {
    let temp = ans[i];
    temp *= n - i;
    temp /= i + 1;
    ans.push(temp);
  }

  return ans;
};

console.log(printPascalTriangle2(3));
