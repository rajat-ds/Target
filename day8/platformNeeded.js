findPlatform(arr, dep, n);
{
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let platformNeeded = 1;
  let result = 1;
  let i = 1,
    j = 0;
  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      platformNeeded++;
      if (platformNeeded > result) {
        result = platformNeeded;
      }
      i++;
    } else {
      platformNeeded--;
      j++;
    }
  }
  return result;
}
