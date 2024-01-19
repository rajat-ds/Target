/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
  let ans = [];
  plaindromPartion(0, s, [], ans);
  return ans;
};
const plaindromPartion = function (index, str, ds, ans) {
  if (index === str.length) {
    ans.push([...ds]);
    console.log(ds);
    return;
  }
  for (let i = index; i < str.length; i++) {
    if (isPalindrome(str, index, i)) {
      ds.push(str.substring(index, i + 1));
      // console.log(str.substring( index , i+1 ))
      plaindromPartion(i + 1, str, ds, ans);
      ds.pop();
    }
  }
};

const isPalindrome = (str, left, right) => {
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
