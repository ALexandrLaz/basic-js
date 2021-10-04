import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type){
    this.type = false;
    if(type === false){
      this.type = true;
    };
    this.start = 65;
    this.end = 90;
  }
  criptMessage(message, key){
    return message == key ? key.toUpperCase() : key.repeat(Math.round(message.length / key.length)).slice(0, message.length).toUpperCase();
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    let criptoMessage = this.criptMessage(message, key);
    let upperMessage = message.toUpperCase();
    let result = [];
    for (let i = 0, j = 0; i < upperMessage.length; i++) {
      let letterPos = upperMessage.charCodeAt(i);

      if (letterPos >= this.start && letterPos <= this.end) {
        let newMesPos = letterPos - this.start;
        let newKeyPos = criptoMessage.charCodeAt(j) - this.start;

        let encode = this.start + ((newMesPos + newKeyPos) % 26);
        let decode = String.fromCharCode(encode);

        result.push(decode)
        j++
      } else {
        result.push(upperMessage[i])
      }
    }

    return this.type ? result.reverse().join('') : result.join('')
  }
  decrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    let criptoMessage = this.criptMessage(message, key);
    let upperMessage = message.toUpperCase();
    let result = [];
    for (let i = 0, j = 0; i < upperMessage.length; i++) {
      let letterPos = upperMessage.charCodeAt(i);

      if (letterPos >= this.start && letterPos <= this.end) {
        let newMesPos = letterPos - this.start;
        let newKeyPos = criptoMessage.charCodeAt(j) - this.start;

        let encode = this.start + ((newMesPos - newKeyPos + 26) % 26);
        let decode = String.fromCharCode(encode);

        result.push(decode)
        j++
      } else {
        result.push(upperMessage[i])
      }
    }

    return this.type ? result.reverse().join('') : result.join('')
  }
}
