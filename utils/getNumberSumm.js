module.exports = getNumberSumm = (arr) => {
    return Number((arr.reduce((a, b) => (a + b)) / arr.length).toFixed(1))
}