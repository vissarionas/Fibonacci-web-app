var fibGenerator = require("./fib-generator")
var getPrimes = require('./primes-generator')
var getSums = require('./get-sums')

function getSumsArray(num) {
    let fib = fibGenerator(num)
    let primes = getPrimes(fib)
    let sums = getSums(fib , primes)
    return sums
}

function getSumsSum(total, num) {
    return total + num;
}

function getJson(num) {
    let finalSumsAr = []
    for(let i=num ; i<=3 +Number(num) ; i++) {
        let finalSum = getSumsArray(i)
        finalSumsAr.push(finalSum.reduce(getSumsSum))
    }
    let json = {}
    json.input = Number(num)
    json.result = finalSumsAr
    
    return json
}


module.exports = getJson