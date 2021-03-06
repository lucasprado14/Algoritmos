// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
    if (exponent === 0) return 1;

    let result = base * power(base, exponent - 1);

    return result;
}

module.exports = { power }