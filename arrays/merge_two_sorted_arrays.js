/**
 * merge the two sorted arrays
 */
const arr1 = [2, 5, 7, 13, 17];
const arr2 = [1, 6, 15];
console.log("arr1->", arr1);
console.log("arr2->", arr2);
/**
 * Naive approach
 * use an extra array
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns obj
 * @author Rajat Kumar
 */
const mergeSortedArraysNaive = (arr1, arr2) => {
  const arr = [];
  arr1.forEach((element) => arr.push(element));

  arr2.forEach((element) => arr.push(element));

  arr.sort((a, b) => a - b);

  arr1.forEach((element, index) => (arr1[index] = arr[index]));

  arr2.forEach(
    (element, index) => (arr2[index] = arr[arr1.length - 1 + index])
  );

  return { arr1, arr2 };
};
//console.log(mergeSortedArraysNaive(arr1, arr2));

/**
 * Insertion sort intuition
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns obj
 * @author Rajat Kumar
 */
const mergeSortedArrayInsertion = (arr1, arr2) => {
  arr1.forEach((element, index) => {
    let temp = 0;
    if (element > arr2[0]) {
      temp = element;
      arr1[index] = arr2[0];
      arr2[0] = temp;
      arr2.sort((a, b) => a - b);
    }
  });

  return { arr1, arr2 };
};

var merge = function (nums1, m, nums2, n) {
  let first = m - 1,
    second = n - 1;
  for (i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
};

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  let gap = ((m + n) >> 1) + ((m + n) % 2);
  while (true) {
    let i = 0;
    while (i + gap < m + n) {
      if (nums1[i] > nums1[i + gap])
        [nums1[i], nums1[i + gap]] = [nums1[i + gap], nums1[i]];
      i++;
    }
    if (gap === 1) break;
    else {
      gap = (gap >> 1) + (gap % 2);
    }
  }
  return nums1;
};

var merge = function (nums1, m, nums2, n) {
  let first = m - 1,
    second = n - 1;
  for (i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
};
//console.log(mergeSortedArrayInsertion(arr1, arr2))
