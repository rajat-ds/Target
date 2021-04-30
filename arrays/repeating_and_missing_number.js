// Given an unsorted array of size n.
//  Array elements are in the range from 1 to n. 
//  One number from set {1, 2, …n} is missing and
//   one number occurs twice in the array. Find these two numbers.

/**
 * Naive soltuon 
 * Create an empty array of same length having zero
 * iterrate through firdt array and increase the frequency count in secon
 * time -> O(n)
 * s->  0(n)
 */

/**
 * Method 3 (Use elements as Index and mark the visited places)
Approach: 
Traverse the array. While traversing, use the absolute value of 
every element as an index and make the value at this index as negative to mark it visited.
 If something is already marked negative then this is the repeating element.
  To find missing, traverse the array again and look for a positive value.
 */

  /**
   * @param {Array} arr 
   * @author Rajat Kumar
   */
  const printMissingRepeating = (arr) => {
    arr.forEach((ele, index) => {
      let abs = Math.abs(arr[index]);
      if (arr[abs - 1] > 0) {
        arr[abs - 1] = -arr[abs - 1];
      } else {
        console.log("Repeating number is ->", abs);
      }
    });

    arr.forEach((val, index) => {
      if (val > 0) console.log("Missing number--->", index + 1);
    });
  };
  const arr = [7, 3, 4, 5, 5, 6, 2];
  //printMissingRepeating(arr);


  /**
Let x be the missing and y be the repeating element.
Let N is the size of array.
Get the sum of all numbers using formula S = N(N+1)/2
Get the sum of square of all numbers using formula Sum_Sq = N(N+1)(2N+1)/6
Iterate through a loop from i=1….N
S -= A[i]
Sum_Sq -= (A[i]*A[i])
It will give two equations 
x-y = S – (1) 
x^2 – y^2 = Sum_sq 
x+ y = (Sum_sq/S) – (2) 
   */
/**
 * Find the missing and repeating number
 * @param {Array} arr 
 * @returns obj
 * @author Rajat Kumar
 */
const missingAndRepeating = (arr) => {
  const len = arr.length;
  let sum = (len * (len + 1)) / 2;
  let sqaueSum = (len * (len + 1) * (2 * len + 1)) / 6;
  let ans = {};
  arr.forEach((val, index) => {
    sum -= val;
    sqaueSum -= val * val;
  });
  ans["missing"] = (sum + sqaueSum / sum) / 2;
  ans["repeating"] = ans.missing - sum;
  return ans;
};
  console.log(missingAndRepeating(arr));