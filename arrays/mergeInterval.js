/**
 *Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 *and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

 const arr = [[1,4],[4,5]]

 /**
  * @param {number[][]} arr 
  * @returns {number[][]} 
  * @author Rajat Kumar
  */
 const mergeIntervals=(arr)=>{
     arr.sort((a,b)=> a[0]-b[0])
     let pair=arr[0] ,ans=[],last=[];
     arr.forEach(val=>{
            last =val;
           if(pair[1]>=val[0]){
                  pair[1]=val[1]
           }else if(pair[1]>val[1]){
                  
           }
               else{
               ans.push(pair)
               pair=val;
             
           }
        })
        if(pair[1]>last[0])
            pair[1]=last[1]
       ans.push(pair)


     console.log(ans)

 }
//  mergeIntervals(arr)
