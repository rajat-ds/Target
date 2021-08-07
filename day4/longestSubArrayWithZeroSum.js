//https://www.youtube.com/watch?v=xmguZ6GbatA

let list = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];

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

console.log(largestSubArrayWithZeroSUM(list));
