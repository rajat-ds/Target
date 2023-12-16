/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let [i, j, count, ele1, ele2] = [0, 0, 0, -1, -1];
  let n = nums1.length + nums2.length;
  let index2 = n >> 1;
  let index1 = index2 - 1;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      if (count === index1) ele1 = nums1[i];
      if (count === index2) {
        ele2 = nums1[i];
      }
      count++;
      i++;
    } else {
      if (count === index1) ele1 = nums2[j];
      if (count === index2) ele2 = nums2[j];
      count++;
      j++;
    }
  }

  while (i < nums1.length) {
    if (count === index1) ele1 = nums1[i];
    if (count === index2) ele2 = nums1[i];
    count++;
    i++;
  }

  while (j < nums2.length) {
    if (count === index1) ele1 = nums2[j];
    if (count === index2) ele2 = nums2[j];
    count++;
    j++;
  }

  if (n % 2 === 0) return (ele1 + ele2) / 2;
  else return ele2;
};
