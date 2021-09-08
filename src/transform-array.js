import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr2 = arr.slice();
  let arr3 = [];
  let flag = true;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "--discard-next") {
      if (i != arr2.length - 1) {
        flag = false;
        i = i + 1;
      }
    } else if (arr2[i] === "--discard-prev") {
      if (i != 0 && flag) {
        arr3.pop();
      }
    } else if (arr2[i] === "--double-next") {
      if (i != arr2.length - 1) {
        arr3.push(arr2[i + 1]);
      }
    } else if (arr2[i] === "--double-prev") {
      if (i != 0 && flag) {
        arr3.push(arr3[arr3.length - 1]);
      }
    } else {
      arr3.push(arr2[i]);
      flag = true;
    }
  }
  return arr3;
}
