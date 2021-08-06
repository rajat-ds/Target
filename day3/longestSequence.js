let list = [102, 4, 101, 1, 100, 3, 2];

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

console.log(longestSequence(list));
