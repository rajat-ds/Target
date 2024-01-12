// print name n times

const printNameNTimes = (i, n, name) => {
  if (i > n) return;
  console.log(i, "  ====>", name);
  printNameNTimes(i + 1, n, name);
};

//printNameNTimes(1, 5, "rajat");

// print Linearly from 1 to n
const printOneToN = (i, n) => {
  if (i > n) return;
  console.log(i);
  printOneToN(i + 1, n);
};
// printOneToN(1,5)

//print linealy one to N using backtracking
const printOneToNBackTracking = (i, n) => {
  if (!i) return;
  printOneToNBackTracking(i - 1, n);
  console.log(i);
};
// printOneToNBackTracking(5,5)

//print linearly from N to 1
const printNTone = (i, n) => {
  if (!i) return 0;
  console.log(i);
  printNTone(i - 1, n);
};
// printNTone(5,5)

//print linarly from N to 1 using back tracking
const printNToOneBackTracking = (i, n) => {
  if (i > n) return;
  printNToOneBackTracking(i + 1, n);
  console.log(i);
};
// printNToOneBackTracking(1,6)
