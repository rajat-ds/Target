function subarrayXor(arr, n, k) {
  let ans = 0; // Initialize ans
  let map = new Map();
  let xr = 0;
  map.set(0, 1); // this is use when xr is k to increase count by 1
  for (let i = 0; i < arr.length; i++) {
    xr = xr ^ arr[i];
    let x = xr ^ k;
    if (map.has(x)) ans += map.get(x);
    if (map.has(xr)) {
      map.set(xr, map.get(xr) + 1);
    } else {
      map.set(xr, 1);
    }
  }
  return ans;
}
