const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let speed = 3600/turnsSpeed;
  return{
    turns,
    seconds: Math.floor(turns*speed)
  }
};
