// Given a non-decreasing array arr[] and
// an integer K, the task is to remove K elements from the array
//  such that maximum difference between adjacent element is minimum.
// Note: K < N – 2

// On careful observation it can be noted that, if removal of element is done from somewhere
// in between the array (i.e not the end elements),
//  then the maximum difference of remaining elements can only increase or remain the same.
// For Example:
// Let the given array be {1, 5, 6},

// If we remove the element 5(not the end element),
// then the maximum difference will always increase.

// Therefore, It is always better to remove end elements.

// This means that the resulting array after removing K elements will be a subarray of
//  the original array of size N – K.

// Hence, We can iterate over all the subarrays of size N – K and for each subarray
//  find the maximum difference between adjacent elements.
// Finally, find the minimum of all the maximum differences of adjacent elements.

const arr = [12, 16, 22, 31, 31, 38];
const K = 3;

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number} minDiff
 * @author Rajat Kumar
 */
const minimumAdjacentDifference = (arr, k) => {
  let minDiff = 9999999;
  for (let i = 0; i <= k; i++) {
    let maxDiff = -999999;
    for (let j = 0; j < arr.length - k - 1; j++) {
      for (let p = i; p <= i + j; p++) {
        maxDiff = Math.max(arr[p + 1] - arr[p], maxDiff);
      }
    }
    minDiff = Math.min(maxDiff, minDiff);
  }

  return minDiff;
};

console.log("minDiif--->", minimumAdjacentDifference(arr, K));
