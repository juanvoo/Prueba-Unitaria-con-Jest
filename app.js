
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 154;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 4.2;
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };