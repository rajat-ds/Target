let str =  'rajat'
str = [...str]
const reverseString = ( i , n ) =>{
    if( i >= (n>>1) ){
        console.log(str.join(""))
        return
    } 
    [ str[i] ,str[ n-i -1 ] ]  = [str[ n-i -1 ] , str[i] ]
    reverseString(i+1 , n)
}
reverseString(0,5)
