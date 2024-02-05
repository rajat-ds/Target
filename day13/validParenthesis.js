/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return false;
  let temp = [...s];
  let stacks = [];
  for (let i = 0; i < temp.length; i++) {
    if (["[", "{", "("].includes(temp[i])) {
      stacks.push(temp[i]);
      continue;
    }
    let check;
    switch (temp[i]) {
      case "}":
        check = stacks.pop();
        if (check !== "{") return false;
        break;

      case "]":
        check = stacks.pop();
        if (check !== "[") return false;
        break;

      case ")":
        check = stacks.pop();
        if (check !== "(") return false;
        break;
    }
  }
  return stacks.length === 0;
};
