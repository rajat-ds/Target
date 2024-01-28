function kthElement(A,B,n,m,k){ 
    //code here
    if( n > m ) {
        [ A, B ] = [B ,A ]
    }
    let low = Math.max(0 , k - m )
    let high = Math.min( k , n)
    while(low<=high){
        let cut1 = ( low + high) >> 1
        let cut2 = k - cut1
        let l1 = !cut1 ? Number.MIN_SAFE_INTEGER : A[cut1 -1]
        let l2 = !cut2 ? Number.MIN_SAFE_INTEGER : B[cut2 -1]
        let r1 = cut1 === n ? Number.MAX_SAFE_INTEGER : A[cut1]
        let r2 = cut2 === n ? Number.MAX_SAFE_INTEGER : B[cut1]
        if( l1 <= r2 && l2 <= r1 ){
            return Math.max(l1,l2)
        }else if ( l1 > r2){
            high = cut1 - 1 
        }else {
            low = cut1 + 1
        }
    }
    return 1
}