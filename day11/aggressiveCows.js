// n is length of stall 
// k is number of cow
const agressiveCow = (n, k, stalls) => {
  stalls.sort((a, b) => a - b);
  //Function to count the number of stalls that can be allocated with distance d.
  function count(d) {
    let ans = 1,
      curr = stalls[0];
    for (let i = 1; i < n; i++) {
      if (stalls[i] - curr >= d) {
        ans += 1;
        curr = stalls[i];
      }
    }
    return ans;
  }
  let l = 0,
    r = stalls[n - 1] - stalls[0];
  //Binary search to find the maximum possible distance.
  while (l < r) {
    let mid = Math.floor((l + r + 1) / 2);
    //Check if it is possible to allocate k stalls with distance mid.
    if (count(mid) >= k) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
