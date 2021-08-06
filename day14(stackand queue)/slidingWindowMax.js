let list=[1,3,-1,-3,5,3,6,7]

const maxSlidingWindow =(list,k)=>{
  let ans=[]
  let deque=[]
  for (let i=0;i<list.length;i++ ){
    if(deque.length && deque[0]==i-k)
        deque.shift()
    while(deque.length && list[deque[deque.length-1]] < list[i])
        deque.pop()
    deque.push(i)    
    if(i>=k-1) ans.push(list[deque[0]])        
  }
  return ans
}

console.log(maxSlidingWindow(list,3))