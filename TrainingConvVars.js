// Standard Divisor
const paceDiv = .90;

// Training Pace Ranges
const recovery = {low:.606, high:.653};
const easy = {low:.675, high:.723 };
const moderate = {low:.746 , high:.791 };
const tempo = {low:.835 , high:.879 };
const threshold = {low:.901 , high:.927 };
const cv = {low:.944 , high:.964 };
const ap = {low:.986 , high:1.012 };
const max = {low:1.028 , high:1.05 };

module.exports = {
    paceDiv,
    recovery,
    easy,
    moderate,
    tempo,
    threshold,
    cv,
    ap,
    max
};