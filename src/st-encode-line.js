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
  const arr = str.split("");
  let resStr = "";
  let count = 1;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 1]){
        count++;
      }else if(count > 1){
        resStr += `${count + arr[i]}`;
        count = 1;
      }else{
        resStr += `${arr[i]}`;
        count = 1;
      }
  }
  return resStr
}
