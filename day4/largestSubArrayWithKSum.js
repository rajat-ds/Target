const maxLen =(arr,k)=>{
    //code here
    let sum = 0 ;
    let max = 0 ;
    let map = new Map();
    for ( let i = 0 ; i < arr.length ; i++ ){
        sum+=arr[i]
        if( sum === k ) {
            max = i + 1
        }else if ( map.has( sum- k  ) ){
            max = Math.max( max , i - map.get( sum - k) )
        }
        if(!map.has(sum))
            map.set(sum,i)
        
    }
    return max
}