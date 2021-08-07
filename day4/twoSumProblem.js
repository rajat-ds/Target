//https://www.youtube.com/watch?v=dRUpbt8vHpo&list=PLgUwDviBIf0rVwua0kKYlsS_ik_1lyVK_&index=2
const list = [2, 7, 11, 15];
const target = 9;
const twoSumProblem = (list, target) => {
  let result = [];
  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    if (map.has(target - list[i])) {
      result.push(map.get(target - list[i]));
      result.push(i);
      break;
    } else  map.set(list[i], i); 
  }
  return result;
};

console.log(twoSumProblem(list, target));
