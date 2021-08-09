//https://www.youtube.com/watch?v=4ggF3tXIAp0&t=132s
const list = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target = 9;
const fourSumProblem = (list, target) => {
  let result = [];
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      let target2 = target - list[i] - list[j];
      let front = j + 1;
      let back = list.length - 1;
      while (front < back) {
        let twosum = list[front] + list[back];
        if (twosum < target2) front++;
        else if (twosum > target2) back--;
        else {
          let quad = [];
          quad.push(list[i]);
          quad.push(list[j]);
          quad.push(list[front]);
          quad.push(list[back]);
          result.push(quad);
          while (front < back && list[front] == quad[2]) ++front;
          while (front < back && list[back] == quad[3]) --back;
        }
      }
      while (j + 1 < list.length && list[j + 1] == list[j]) ++j;
    }
    while (i + 1 < list.length && list[i + 1] == list[i]) ++i;
  }
  return result;
};

console.log(fourSumProblem(list, target));
