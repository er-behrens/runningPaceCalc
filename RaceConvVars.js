// Standard Divisor
const paceDiv = .90;
// Standard Power
const pwr = 1.06

// Race Pace Equivalencies
const raceDivisors = {
    halfMile: 1.2,
    mile: 1.1,
    threeK: 1.03,
    tenK: .96,
    halfMarathon: .92,
    marathon: .88
}

// Equivalent Race Time Calulator
function equivTime(d1,d2,t1){
    let t2 = t1 * Math.pow((d2/d1), pwr);
    return t2;
  }

module.exports = {
    pwr,
    raceDivisors,
    equivTime
};