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
  printMissingRepeating(arr);