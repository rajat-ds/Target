/*
class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}
*/
fractionalKnapsack(W, arr, n);
{
  arr.sort(function (a, b) {
    return b.value / b.weight - a.value / a.weight;
  });
  let curWeight = 0;
  let finalvalue = 0.0;
  for (let i = 0; i < n; i++) {
    if (curWeight + arr[i].weight <= W) {
      curWeight += arr[i].weight;
      finalvalue += arr[i].value;
    } else {
      let remain = W - curWeight;
      finalvalue += arr[i].value * (remain / arr[i].weight);
      break;
    }
  }
  //returning final value.
  return finalvalue;
}
