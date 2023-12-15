//https://www.youtube.com/watch?v=t_f0nwwdg5o&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=18
const countPath = (i, j, m, n) => {
  if (i == m - 1 && j == n - 1) return 1;
  else if (i >= m || j >= n) return 0;
  else return countPath(i + 1, j, m, n) + countPath(i, j + 1, m, n);
};

console.log(countPath(0, 0, 3, 7));

var uniquePaths = function (m, n) {
  const memo = new Array(m).fill(0);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n).fill(-1);
  }
  return helper(m, n, 0, 0, memo);
};

const helper = (m, n, row, col, memo) => {
  if (row === m - 1 && col === n - 1) return 1;
  if (row >= m || col >= n) return 0;
  if (memo[row][col] === -1) {
    const pathsRight = helper(m, n, row, col + 1, memo);
    const pathsDown = helper(m, n, row + 1, col, memo);

    memo[row][col] = pathsRight + pathsDown;
  }
  return memo[row][col];
};

const optimizeUniquePath = (m, n) => {
  let N = m + n - 2;
  let r = m - 1;
  let res = 1;
  for (let i = 1; i <= r; i++) {
    res = (res * (N - r + i)) / i;
  }
  return res;
};
console.log(optimizeUniquePath(3, 7));
