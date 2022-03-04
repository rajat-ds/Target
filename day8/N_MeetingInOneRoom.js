function maxMeetings(s, f, n) {
  let a = new Array(n + 1);
  let i;
  for (i = 0; i < n; i++) {
    a[i] = new Array(2);
    a[i][0] = f[i];
    a[i][1] = i;
  }
  a.sort();
  let time_limit = a[0][0];
  let m = [];

  m.push(a[0][1] + 1);
  for (i = 1; i < n; i++) {
    if (s[a[i][1]] > time_limit) {
      m.push(a[i][1] + 1);
      time_limit = a[i][0];
    }
  }
  for (let i = 0; i < m.length; i++) {
    document.write(m[i], " ");
  }
}
let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
let n = s.length;
maxMeetings(s, f, n);
