// Distance Conversions
const miToMConv = 1609.34;
const mToMiConv = 0.000621371;
const miToKMConv = 1.60934;
const KMToMiConv = 0.621371;
const mToKM = 1000;

// Time Conversions
const hToS = 3600;
const minToS = 60;

// Time Converting Functions
function sToMin(input){
    let temp = input;
    let seconds = input;
    let minutes = 0;
    let hours = 0;
    if(temp>=60){
      minutes = Math.floor(temp/60);
      seconds = temp - (minutes*60);
    }
    if(minutes>=60){
      hours = Math.floor(minutes/60);
      minutes -= (hours*60);
    }
    const time = {hours:hours, minutes:minutes, seconds:seconds.toFixed(2)};
    return time;
  }
  function timeToS(hours, minutes, seconds){
   let time = 0;
   time += seconds;
   time += (minutes*60);
   time += (hours*60*60);
   return time;
  }

module.exports = {miToMConv, mToMiConv, miToKMConv, KMToMiConv, mToKM, hToS, minToS, sToMin, timeToS, };