const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbArr = n
    .toString()
    .split("")
    .map((item) => Number(item));

  const minIndex = numbArr.findIndex((num, ind) => num < numbArr[ind + 1]);

  if (minIndex === -1) {
    numbArr.pop();
  } else {
    numbArr.splice(minIndex, 1);
  }

  return Number(numbArr.join(""));
}

module.exports = {
  deleteDigit,
};
