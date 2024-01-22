/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let board = Array(n).fill(0);
  let str = Array(n).fill(".");
  for (let i = 0; i < board.length; i++) {
    board[i] = [...str];
  }
  let ans = [];
  solve(0, board, ans, n);
  return ans;
};

const solve = (col, board, ans, n) => {
  if (col === n) {
    let newBoard = Array(n).fill(0);
    for (let i = 0; i < board.length; i++) {
      newBoard[i] = [...board[i]].join("");
    }
    ans.push(newBoard);

    return;
  }
  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row][col] = "Q";
      solve(col + 1, board, ans, n);
      board[row][col] = ".";
    }
  }
};

const isSafe = (row, col, board, n) => {
  let dupRow = row;
  let dupCol = col;
  while (row >= 0 && col >= 0) {
    if (board[row][col] === "Q") return false;
    row--;
    col--;
  }
  row = dupRow;
  col = dupCol;
  while (col >= 0) {
    if (board[row][col] === "Q") return false;
    col--;
  }
  row = dupRow;
  col = dupCol;
  while (row < n && col >= 0) {
    if (board[row][col] === "Q") return false;
    col--;
    row++;
  }
  return true;
};
