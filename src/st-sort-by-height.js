import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let indexMinOne = [];
    arr.forEach((item, index) => item == -1 ? indexMinOne.push(index) : null)
    arr.sort((item1, item2) => item1 - item2).splice(0,indexMinOne.length);
    for(let i = 0; i < indexMinOne.length; i++){
        arr.splice(indexMinOne[i], 0, -1);
    }
    return arr
}
