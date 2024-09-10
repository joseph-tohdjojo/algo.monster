/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length) return false;
  return true;
};
