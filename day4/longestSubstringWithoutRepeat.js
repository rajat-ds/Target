/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  const map1 = new Map();
  let left = 0;
  let right = 0;
  let len = 0;
  let n = s.length;
  while (right < n) {
    if (map1.has(s[right])) left = Math.max(left, map1.get(s[right]) + 1); // left has already crosseds s[right]
    map1.set(s[right], right);
    len = Math.max(len, right - left + 1);
    right++;
  }
  return len;
};
