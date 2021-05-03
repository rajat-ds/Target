/**
 * Given an integer array nums, 
 * find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

const arr = [-2,1,-3,4,-1,2,1,-5,4]

/**
 * Naive approach
 */

const maxSubArrayNaive=(arr)=>{
   let max =arr[0] ,sum =0;
    arr.forEach((element,k) => {
        arr.forEach((element,j) => {
                sum =0 ;
            for(let i=k;i<=j;i++){
                sum+=arr[i]
            }
                  if(sum>max){
                      max= sum;
                  }
        });
    
    });

   return max;
}

console.log("Max Sum",maxSubArrayNaive(arr))