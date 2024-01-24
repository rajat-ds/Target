/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  solve(board);
};

const solve = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") {
        for (let c = "1"; c <= "9"; c++) {
          if (isValid(board, i, j, "" + c)) {
            board[i][j] = "" + c;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false; //when we can't fill any character
      }
    }
  }
  return true; // when everything is filled
};

const isValid = (board, row, col, c) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == c) return false;
    if (board[i][col] == c) return false;
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] == c
    )
      return false;
  }
  return true;
};
