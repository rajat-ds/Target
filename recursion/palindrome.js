str = "madsm";
str = [...str];
const checkPalindrome = (i, n) => {
  if (i >= n >> 1) return true;
  if (str[i] !== str[n - i - 1]) return false;
  return checkPalindrome(i + 1, n);
};

console.log(checkPalindrome(0, 5));
