const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let t;
  if(typeof(sampleActivity) != "string" || isNaN(parseFloat(sampleActivity)) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0){
    return false;
  }else{
    t = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD);
  }
  return Math.ceil(t);
};
