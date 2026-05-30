const factorial = function(number, product = 1) {
    if (typeof number !== "number" || !Number.isInteger(number)) {
    return undefined;
}

if (number < 0) {
    return undefined;
}


    if (number == 1 || number == 0) {
        return product;
    } else {
        
        product = product * number;
        number = number - 1;
        debugger;
        return factorial(number, product)
    }
};

// Do not edit below this line
module.exports = factorial;