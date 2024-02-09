/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/
JobScheduling(arr, n);
{
  let res = 0 , count = 0;
  arr.sort((a, b)=> b.profit - a.profit )
  let result = new Array(n);
  let slot = new Array(n);

  for (let i = 0; i < n; i++) slot[i] = false;

  for (let i = 0; i < n; i++) {
    //finding a free slot for current job (Note that we start
    //from the last possible slot).
    for (let j = Math.min(n, arr[i].dead) - 1; j >= 0; j--) {
      if (slot[j] == false) {
        result[j] = i;
        slot[j] = true;
        break;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (slot[i]) {
      count++;
      res += arr[result[i]].profit;
    }
  }
  return [count, res];
}
