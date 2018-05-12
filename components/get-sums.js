function getSums(num, primes) {
    let multAr = []
    let tempAr = Array.from(primes)
    
    for(let i=0 ; i<tempAr.length ; i++) {
        let mod = num%tempAr[i]
        let times = (num - mod)/tempAr[i]
        
        if(tempAr.includes(mod)) {
            let mult = Math.pow(tempAr[i],times) * mod
            multAr.push(mult)
        } else {
            for(let j=0 ; j<=times ; j++) {
                let sub = tempAr[i]*(times-j)
                if(tempAr.includes(num - sub)) {
                    let mult = Math.pow(tempAr[i], times-j)*(mod+Number(tempAr[i]*j))
                    multAr.push(mult)
                }
            }
        }
    }
    let resultAr = []
    for(let mult of multAr) {
        if(!resultAr.includes(mult)) resultAr.push(mult)
    }
    return resultAr
}

module.exports = getSums