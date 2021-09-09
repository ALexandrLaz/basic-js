import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let arr = str.split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == null) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  return Object.entries(obj).map(item => item.reverse()).flat(100).join("");
}
