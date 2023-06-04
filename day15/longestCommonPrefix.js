/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
     let end = Math.min(strs[0].length, strs[strs.length - 1].length);
     let i = 0;
     while (i < end && strs[0][i] == strs[strs.length -1 ][i] )
         i++;
     let pre = strs[0].substring(0, i);
     return pre;
};