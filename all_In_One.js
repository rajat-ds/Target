const findDuplicate = function (nums) {
  let slow = nums[0],
    fast = nums[nums[0]];

  //here fast moves two steps at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;

  //here fast move one step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

const maxSubArray = (arr) => {
  let max = arr[0];
  sum = 0;
  arr.forEach((val) => {
    sum += val;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  });

  return max;
};

const maxProduct = function (nums) {
  if (!nums && !nums.length) return nums;

  const n = nums.length;

  let prevMax = nums[0];
  let prevMin = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < n; i++) {
    // choices: 1) prevMax * nums[i], 2) nums[i], 3) prevMin * nums[i]
    let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    // max and min could have swapped
    prevMax = Math.max(localMax, localMin);
    prevMin = Math.min(localMax, localMin);

    maxSoFar = Math.max(maxSoFar, prevMax);
  }

  return maxSoFar;
};

const mergeSortedArrayInsertion = (arr1, arr2) => {
  arr1.forEach((element, index) => {
    let temp = 0;
    if (element > arr2[0]) {
      temp = element;
      arr1[index] = arr2[0];
      arr2[0] = temp;
      arr2.sort((a, b) => a - b);
    }
  });

  return { arr1, arr2 };
};

const mergeIntervals = (arr) => {
  if (!arr.length) return [];
  arr.sort((a, b) => a[0] - b[0]);

  const result = [arr[0]];

  for (let [start, end] of arr) {
    if (start <= result[result.length - 1][1]) {
      const [startPrev, endPrev] = result.pop();
      result.push([startPrev, Math.max(end, endPrev)]);
    } else result.push([start, end]);
  }
  return result;
};

const missingAndRepeating = (arr) => {
  const len = arr.length;
  let sum = (len * (len + 1)) / 2;
  let sqaueSum = (len * (len + 1) * (2 * len + 1)) / 6;
  let ans = {};
  arr.forEach((val, index) => {
    sum -= val;
    sqaueSum -= val * val;
  });
  ans["missing"] = (sum + sqaueSum / sum) / 2;
  ans["repeating"] = ans.missing - sum;
  return ans;
};

const sort_0_1_2 = function (nums) {
  let low = 0,
    high = nums.length - 1,
    temp;

  for (let mid = 0; mid <= high; ) {
    if (nums[mid] === 0) {
      temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      mid++;
      low++;
    } else if (nums[mid] == 2) {
      temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    } else {
      mid++;
    }
  }
  return nums;
};

const minimumAdjacentDifference = (arr, k) => {
  let minDiff = 9999999;
  for (let i = 0; i <= k; i++) {
    let maxDiff = -999999;
    for (let j = 0; j < arr.length - k - 1; j++) {
      for (let p = i; p <= i + j; p++) {
        maxDiff = Math.max(arr[p + 1] - arr[p], maxDiff);
      }
    }
    minDiff = Math.min(maxDiff, minDiff);
  }

  return minDiff;
};

var setZeroes = function (matrix) {
  let Col = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) Col = true;
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 1; j--) {
      if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0;
    }
    if (Col) matrix[i][0] = 0;
  }
};

const printPascalTriangle = (n) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = [];
    ans[i][0] = 1;
    for (let k = 1; k < i; k++) {
      ans[i][k] = ans[i - 1][k - 1] + ans[i - 1][k];
    }
    ans[i][i] = 1;
  }
  return ans;
};

// console.log(printPascalTriangle(5));

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

const printPascalTriangle2 = (n) => {
  if (!n) return [1];
  let ans = [1];
  for (let i = 0; i < n; i++) {
    let temp = ans[i];
    temp *= n - i;
    temp /= i + 1;
    ans.push(temp);
  }

  return ans;
};

const nextPermutation = (nums) => {
  function reverse(start) {
    let end = nums.length - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i < 0) {
    reverse(0);
    return;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(i + 1);
  return nums;
};

var maxProfit = function (prices) {
  let maxprofit = 0;

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxprofit = Math.max(maxprofit, prices[i] - min);
  }
  return maxprofit;
};

const rotate = function (matrix) {
  if (!matrix.length) return;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let k = matrix.length - 1;
    let j = 0;
    while (k > j) {
      [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
      j++;
      k--;
    }
  }
};

const searchMatrix2 = (matrix, target) => {
  if (!matrix.length || !matrix[0].length) return false;
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;
  if (!matrix.length || !matrix[0].length) return false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == matrix[Math.floor(mid / col)][mid % col]) return true;
    if (target > matrix[Math.floor(mid / col)][mid % col]) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const pow = (x, n) => {
  if (n === 0) return 1;
  let ans = 1;
  let nn = n;
  if (n < 0) nn *= -1;
  while (nn > 0) {
    if (nn % 2 === 0) {
      x *= x;
      nn /= 2;
    } else {
      ans *= x;
      nn -= 1;
    }
  }
  if (n < 0) ans = 1 / ans;

  return ans;
};

var majorityElement = function(nums) {
  let count = 0;
  let ele = 0 ;
  nums.forEach(val=>{
      if(count===0) ele = val
      if(val===ele) count++;
      else count--;
  })
  return ele;
};

const majorityElement = function (nums) {
  let num1 = -1;
  let num2 = -1;
  let count1 = 0;
  let count2 = 0;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    else if (nums[i] === num2) count2++;
    else if (!count1) {
      count1 = 1;
      num1 = nums[i];
    } else if (!count2) {
      count2 = 1;
      num2 = nums[i];
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    else if (nums[i] === num2) count2++;
  }
  if (count1 > Math.floor(nums.length / 3)) ans.push(num1);
  if (count2 > Math.floor(nums.length / 3)) ans.push(num2);

  return ans;
};

const powerSet = (str) => {
  let len = str.length;
  let ans = [];
  for (let i = 0; i < 1 << len; i++) {
    let substr = [];
    for (let j = 0; j < len; j++) {
      if ((i & (1 << j)) != 0) substr.push(str[j]);
    }
    ans.push(substr);
  }

  return ans;
};

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

const longestSequence = (list) => {
  if (!list.length) return 0;
  let mySet = new Set(list);
  let longestStreak = 0;
  for (let i = 0; i < list.length; i++) {
    if (!mySet.has(list[i] - 1)) {
      let currentStreak = 1;
      let currentNum = list[i];
      while (mySet.has(++currentNum)) currentStreak += 1;
      if (currentStreak > longestStreak) longestStreak = currentStreak;
    }
  }
  return longestStreak;
};

const largestSubArrayWithZeroSUM = (list) => {
  const map = new Map();
  let max = 0;
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (!(sum += list[i])) max = i + 1;
    else if (map.has(sum)) {
      max = Math.max(max, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return max;
};