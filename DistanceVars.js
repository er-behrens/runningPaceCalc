const { miToMConv, mToMiConv, miToKMConv, KMToMiConv, mToKM, hToS, minToS } = require('./StandardVars.js');

// Conversions
function meterToMile(distM) {
    return (distM*mToMiConv).toFixed(2);
}
function mileToMeter(distMi){
    return (distMi*miToMConv).toFixed(2);
}
function mileToKM(distMi){
    return (distMi*miToKMConv).toFixed(2);
}
function KMToMile(distKM){
    return (distKM*KMToMiConv).toFixed(2);
}

// Race Distances
const hundredDistM = 100
const twoHundredDistM = 200
const threeHundredDistM = 300
const fourHundredDistM = 400
const fiveHundredDistM = 500
const sixHundredDistM = 600
const eightHundredDistM = 800
const oneKDistM = 1000
const fifthteenHundredDistM = 1500;
const fifthteenHundredDistMi = meterToMile(fifthteenHundredDistM);
const sixteenHundredDistM = 1600;
const sixteenHundredDistMi = meterToMile(sixteenHundredDistM);
const mileDistM = 1609.34;
const mileDistMi = 1;
const threeKDistM = 3000;
const threeKDistMi = meterToMile(threeKDistM);
const thirtyTwoDistM = 3200;
const thirtyTwoDistMi = meterToMile(thirtyTwoDistM);
const twoMileDistMi = 2;
const twoMileDistM = (twoMileDistMi*miToMConv).toFixed(2);
const fourKDistM = 4000;
const fourKDistMi = meterToMile(fourKDistM);
const threeMileDistMi = 3;
const threeMileDistM = (threeMileDistMi*miToMConv).toFixed(2);
const fiveKDistM = 5000;
const fiveKDistMi = meterToMile(fiveKDistM);
const sixKDistM = 6000;
const sixKDistMi = meterToMile(sixKDistM);
const eightKDistM = 8000;
const eightKDistMi = meterToMile(eightKDistM);
const tenKDistM = 10000;
const tenKDistMi = meterToMile(tenKDistM);
const fifthteenKDistM = 15000;
const fifthteenKDistMi = meterToMile(fifthteenKDistM);
const halfMarathonDistM = 21097.5;
const halfMarathonDistMi = meterToMile(halfMarathonDistM);
const marathonDistM = 42195;
const marathonDistMi = meterToMile(marathonDistM);

module.exports = { 
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
};