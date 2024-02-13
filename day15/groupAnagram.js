/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const ans = [];
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (map.has(key)) {
      let arr = map.get(key);
      arr.push(strs[i]);
      map.set(key, arr);
    } else {
      map.set(key, [strs[i]]);
    }
  }
  for (let arr of map.values()) {
    ans.push(arr);
  }
  return ans;
};
