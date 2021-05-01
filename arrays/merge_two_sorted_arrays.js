/**
 * merge the two sorted arrays
 */
const arr1 = [2, 5, 7, 13, 17];
const arr2 = [1, 6, 15];
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
console.log(mergeSortedArraysNaive(arr1, arr2));
