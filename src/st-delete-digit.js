import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let str = String(n).split("");
  let min = 10;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] <= min) {
      min = str[i];
      index = i;
    }
  }
  str.splice(index, 1)
  return Number(str.join(""));
}
