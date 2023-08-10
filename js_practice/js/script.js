function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x; 
    }
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(100));

function makeOpOn(x, operation) {
    return operation(x);
}

var result = makeOpOn(5, multiplyBy3);
console.log(result);