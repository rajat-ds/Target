/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let [i, j, count, ele1, ele2] = [0, 0, 0, -1, -1];
//   let n = nums1.length + nums2.length;
//   let index2 = n >> 1;
//   let index1 = index2 - 1;

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//       if (count === index1) ele1 = nums1[i];
//       if (count === index2) {
//         ele2 = nums1[i];
//       }
//       count++;
//       i++;
//     } else {
//       if (count === index1) ele1 = nums2[j];
//       if (count === index2) ele2 = nums2[j];
//       count++;
//       j++;
//     }
//   }

//   while (i < nums1.length) {
//     if (count === index1) ele1 = nums1[i];
//     if (count === index2) ele2 = nums1[i];
//     count++;
//     i++;
//   }

//   while (j < nums2.length) {
//     if (count === index1) ele1 = nums2[j];
//     if (count === index2) ele2 = nums2[j];
//     count++;
//     j++;
//   }

//   if (n % 2 === 0) return (ele1 + ele2) / 2;
//   else return ele2;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let n = n1 + n2;
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
  let low = 0; // take no element from arr1
  let high = n1; // take all element from arr2

  let left = Math.floor((n1 + n2 + 1) / 2);

  while (low <= high) {
    let mid1 = (low + high) >> 1;
    let mid2 = left - mid1;
    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 < n1) r1 = nums1[mid1];
    if (mid2 < n2) r2 = nums2[mid2];
    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];

    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 === 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    } else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }

  return 0;
};
