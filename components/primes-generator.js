function isPrime(num) {
    if(num < 2) return false;
    for (var i=2 ; i<num ; i++) {
        if(num%i==0)
        return false;
    }
    return true;
}

function getPrimes(num) {
    let primes = []
    for(let i=1 ; i<=num ; i++){
        if(isPrime(i)){
            primes.push(i)
        }
    }
    return primes
}

module.exports = getPrimes