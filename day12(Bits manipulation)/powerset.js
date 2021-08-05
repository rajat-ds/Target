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
  
  console.log(powerSet([1, 2, 3]));
  