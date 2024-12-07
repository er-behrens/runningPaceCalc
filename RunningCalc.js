// IMPORTS
const { 
  miToMConv, 
  mToMiConv, 
  miToKMConv, 
  KMToMiConv, 
  mToKM, 
  hToS, 
  minToS,
  sToMin,
  timeToS, 
} = require('./StandardVars.js');
const { 
  meterToMile,
  mileToMeter,
  mileToKM,
  KMToMile,
  hundredDistM, 
  twoHundredDistM, 
  threeHundredDistM, 
  fourHundredDistM, 
  fiveHundredDistM, 
  sixHundredDistM, 
  eightHundredDistM,
  oneKDistM,
  fifthteenHundredDistM, fifthteenHundredDistMi,
  sixteenHundredDistM, sixteenHundredDistMi,
  mileDistM, mileDistMi,
  threeKDistM, threeKDistMi,
  thirtyTwoDistM, thirtyTwoDistMi,
  twoMileDistMi, twoMileDistM,
  fourKDistM, fourKDistMi,
  threeMileDistMi, threeMileDistM,
  fiveKDistM, fiveKDistMi,
  sixKDistM, sixKDistMi,
  eightKDistM, eightKDistMi,
  tenKDistM, tenKDistMi,
  fifthteenKDistM, fifthteenKDistMi,
  halfMarathonDistM, halfMarathonDistMi,
  marathonDistM, marathonDistMi 
} = require('./DistanceVars.js');
const {
  paceDiv,
  recovery,
  easy,
  moderate,
  tempo,
  threshold,
  cv,
  ap,
  max
} = require('./TrainingConvVars.js');
const {
  pwr,
  raceDivisors,
  equivTime
} = require('./RaceConvVars.js');

// Pace Calculating Functions
function avgPacePerKM(timeInS, distInM) {
  let timePerM = timeInS / distInM;
  let timePerKM = timePerM * mToKM;
  return timePerKM;
}
function avgPacePerMile(timeInS, distInMi) {
  let timePerMi = timeInS / distInMi;
  return timePerMi;
}

// Pace Converting Functions
function kmToMilePace(t){
  return (t/KMToMiConv).toFixed(2);
}
function mileToKMPace(t){
  return (t/miToKMConv).toFixed(2);
}

// Accepted Race Distances + Divisors
const KMDivisors = {
  halfMile:.5,
  mile: 1.609,
  threeK: 3,
  tenK: 10,
  halfMarathon: 21.098,
  marathon: 42.195,
  fiveK: 5
}

// Convert To 5k
function convTo5kSplit(time, distInd){
  split = time / KMDivisors[distInd];
  return Math.round(split*raceDivisors[distInd]);
}

// Give Training Paces From 5k Split
function getTrainingPaces(split) {
  let recoveryRange = {recovery:{low:(split/recovery.low).toFixed(2), high:(split/recovery.high).toFixed(2)}}
  let easyRange = {easy:{low:(split/easy.low).toFixed(2), high:(split/easy.high).toFixed(2)}}
  let moderateRange = {moderate:{low:(split/moderate.low).toFixed(2), high:(split/moderate.high).toFixed(2)}}
  let tempoRange = {tempo:{low:(split/tempo.low).toFixed(2), high:(split/tempo.high).toFixed(2)}}
  let thresholdRange = {threshold:{low:(split/threshold.low).toFixed(2), high:(split/threshold.high).toFixed(2)}}
  let cvRange = {cv:{low:(split/cv.low).toFixed(2), high:(split/cv.high).toFixed(2)}}
  let apRange = {ap:{low:(split/ap.low).toFixed(2), high:(split/ap.high).toFixed(2)}}
  let maxRange = {max:{low:(split/max.low).toFixed(2), high:(split/max.high).toFixed(2)}}

  let paces = {
    ...recoveryRange,
    ...easyRange,
    ...moderateRange,
    ...tempoRange,
    ...thresholdRange,
    ...cvRange,
    ...apRange,
    ...maxRange
  }
  return paces
}

let fiveKSec = timeToS(0, 17, 0);
let tenKEquiv = equivTime(fiveKDistM, tenKDistM, fiveKSec)
let halfEquiv = equivTime(fiveKDistM, halfMarathonDistM, fiveKSec)
console.log(sToMin(halfEquiv));
console.log(sToMin(avgPacePerMile(tenKEquiv, tenKDistMi)));
let fiveKSecPerK = fiveKSec / KMDivisors.fiveK;
let paces = getTrainingPaces(fiveKSecPerK);
for (const element in paces) {
  let low = sToMin(kmToMilePace(paces[element].low))
  let high = sToMin(kmToMilePace(paces[element].high))
  console.log(`${element}: ${low.minutes}:${low.seconds} - ${high.minutes}:${high.seconds} per mile`);
}
let PablohalfSecs = timeToS(1, 35, 0);
let PablofiveKEquiv = equivTime(halfMarathonDistM, fiveKDistM, PablohalfSecs);
let PablofiveK = timeToS(0, 20, 20);
let PabloPaces = getTrainingPaces(PablofiveK/KMDivisors.fiveK);
console.log(PabloPaces);
for (const element in PabloPaces) {
  let low = sToMin(kmToMilePace(PabloPaces[element].low))
  let high = sToMin(kmToMilePace(PabloPaces[element].high))
  console.log(`${element}: ${low.minutes}:${low.seconds} - ${high.minutes}:${high.seconds} per mile`);
}
console.log(sToMin(avgPacePerMile(PablofiveK, fiveKDistMi)));

let RaulfiveK = timeToS(0, 16, 30);
let RaulPaces = getTrainingPaces(RaulfiveK/KMDivisors.fiveK);
console.log(RaulPaces);
for (const element in RaulPaces) {
  let low = sToMin(kmToMilePace(RaulPaces[element].low))
  let high = sToMin(kmToMilePace(RaulPaces[element].high))
  console.log(`${element}: ${low.minutes}:${low.seconds} - ${high.minutes}:${high.seconds} per mile`);
}
console.log(sToMin(avgPacePerMile(RaulfiveK, fiveKDistMi)));