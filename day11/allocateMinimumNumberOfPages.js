function isPossible(arr, n, m, curr_min) {
  let [studentsRequired, curr_sum] = [1, 0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > curr_min) return false;
    if (curr_sum + arr[i] > curr_min) {
      studentsRequired++;
      curr_sum = arr[i];
      if (studentsRequired > m) return false;
    } else curr_sum += arr[i];
  }
  return true;
}

function findPages(arr, n, m) {
  if (n < m) return -1;
  let [high, low, result] = [
    arr.reduce((acc, n) => acc + n, 0),
    0,
    Number.MAX_VALUE,
  ];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(arr, n, m, mid)) {
      result = Math.min(result, mid);
      high = mid - 1;
    } else low = mid + 1;
  }
  return result;
}

let arr = [12, 34, 67, 90];
let m = 2; //No. of students
console.log("Minimum number of pages = " + findPages(arr, arr.length, m));
