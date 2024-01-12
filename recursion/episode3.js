//sum of n numbers using parameters
const parameterisedSumOfN = (i, sum) => {
  if (!i) {
    console.log(sum);
    return;
  }
  return parameterisedSumOfN(i - 1, sum + i);
};
// parameterisedSumOfN(5,0)

// sum of n numbers using function
const sumOfNusingFunction = (n) => {
  if (n === 0) return 0;
  return n + sumOfNusingFunction(n - 1);
};
// console.log(sumOfNusingFunction(6))

//factorial of n using parameters
const factParameter = (i, fact) => {
  if (i === 0) return fact;
  return factParameter(i - 1, fact * i);
};
// console.log(factParameter(5,1))

// factorial using function
const factFunction = (n) => {
  if (n === 0) return 1;
  return n * factFunction(n - 1);
};
// console.log(factFunction(5))
