const maxMeetings = (start, end, n) => {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push([start[i], end[i]]);
  arr.sort((a, b) => a[1] - b[1]);
  let last = arr[0][1];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i][0] > last) {
      last = arr[i][1];
      count++;
    }
  }
  return count;
};
let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
let n = s.length;
maxMeetings(s, f, n);
