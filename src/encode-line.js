const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (counter !== 1) {
        res.push(counter);
      }
      res.push(str[i]);
      counter = 1;
    } else {
      counter++;
    }
  }
  return res.join("");
}

module.exports = {
  encodeLine,
};
