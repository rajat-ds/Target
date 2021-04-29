// Very basic solution will be to sort the array ..O(nlogn)

//Next approach we can use is counting sort ...O(2N) i.e count he number of 0,1, and 2

//Variation of Dutch National Flag Alogorithm


/**
 * 0 -> swap low and mid and  low++ mid++
 * 1 -> mid++
 * 2 -> swap mid and high and high--
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [2,1,0,1,1,0,0,2]
 const sort_0_1_2 = function(nums) {
    let low = 0,
        high = nums.length - 1,
        temp;
    
    for (let mid = 0; mid<= high; ) {
        if (nums[mid] === 0) {
            temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            mid++;
            low++;
        } else if (nums[mid] == 2) {
            temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        } else {
            mid++;
        }
    }
    return nums ;
};

console.log("sorted->" ,sort_0_1_2(nums) )