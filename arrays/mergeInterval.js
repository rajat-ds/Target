/**
 *Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 *and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

 const arr = [[1,3],[2,6],[8,10],[15,18]]
console.log("arr-->",arr)
 /**
  * @param {number[][]} arr 
  * @returns {number[][]} 
  * @author Rajat Kumar
  */
 const mergeIntervals=(arr)=>{
    if(!arr.length) return [];
    arr.sort((a, b) => a[0] - b[0]);
    
    const result = [arr[0]];
    
    for(let [start, end] of arr) {
        if(start <= result[result.length - 1][1]) {
            const [startPrev, endPrev] = result.pop();
            result.push([startPrev, Math.max(end, endPrev)]);
        } else result.push([start, end]);
    }
    return result;

 }
console.log(mergeIntervals(arr))
