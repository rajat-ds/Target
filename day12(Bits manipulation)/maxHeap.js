const maxHeapify = ( arr , i ,heapLength ) =>{
      let LC = 2*i
      let RC = 2*i + 1 ;
      let largest ;
      
      if( LC <= heapLength && arr[LC] > arr[i] )
            largest = LC
      else 
          largest = i ;
          
    if( RC <= heapLength && arr[RC] > arr[largest] )
          largest = RC

    if( largest !== i) {
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] =  temp 
     
        maxHeapify(arr , largest , heapLength)
    }
 
}

 arr = [ 0 , 1 , 5, 6, 8, 12, 14, 16  ]


// arr = [ 0 ,9 ,6 ,5 ,0 ,8 ,2 ,7 ,1 ,3 ]

const buildHeap = ( arr ) =>{
    let heapLength = arr.length ;
    for( let i = arr.length >> 1 ; i >=1 ; i-- ){
        maxHeapify(arr , i , heapLength)
    }
}
buildHeap(arr)
console.log(arr)
