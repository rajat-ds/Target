/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0;

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxprofit = Math.max(maxprofit, prices[i] - min);
  }
  return maxprofit;
};

const num = [1, 2, 3, 4, 5];
console.log(maxProfit(num));
