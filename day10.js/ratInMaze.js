/**
 * @param {number[][]} m
 * @param {number} n
 * @return {string[]}
 */

class Solution {
  findPath(m, n) {
    let ans = [];
    let str = "";
    let vis = [];
    for (let i = 0; i < n; i++) {
      vis[i] = [];
      for (let j = 0; j < n; j++) {
        vis[i].push(0);
      }
    }
    if (m[0][0]) this.solve(0, 0, ans, vis, m, str, n);
    return ans;
  }

  solve(row, col, ans, vis, matrix, str, n) {
    if (row === n - 1 && col === n - 1) {
      ans.push([...str].join(""));
      return;
    }

    if (row + 1 < n && !vis[row + 1][col] && matrix[row + 1][col]) {
      vis[row][col] = 1;
      this.solve(row + 1, col, ans, vis, matrix, str + "D", n);
      vis[row][col] = 0;
    }
    if (col - 1 >= 0 && !vis[row][col - 1] && matrix[row][col - 1]) {
      vis[row][col] = 1;
      this.solve(row, col - 1, ans, vis, matrix, str + "L", n);
      vis[row][col] = 0;
    }
    if (col + 1 < n && !vis[row][col + 1] && matrix[row][col + 1]) {
      vis[row][col] = 1;
      this.solve(row, col + 1, ans, vis, matrix, str + "R", n);
      vis[row][col] = 0;
    }
    if (row - 1 >= 0 && !vis[row - 1][col] && matrix[row - 1][col]) {
      vis[row][col] = 1;
      this.solve(row - 1, col, ans, vis, matrix, str + "U", n);
      vis[row][col] = 0;
    }
  }
}
