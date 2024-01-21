var permute = function (nums) {
  let mark = Array(nums.length).fill(0);
  let ans = [];
  permuation(nums, [], ans, mark);
  return ans;
};
const permuation = (arr, ds, ans, mark) => {
  if (ds.length === arr.length) {
    ans.push([...ds]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (mark[i]) continue;
    ds.push(arr[i]);
    mark[i] = 1;
    permuation(arr, ds, ans, mark);
    mark[i] = 0;
    ds.pop();
  }
};
