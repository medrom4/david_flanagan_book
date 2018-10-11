function factorial(x) {
    var product = 1;
    while (x > 1) {
        product *= x;
        x--;
    }
    return product;
}

console.log(factorial(3));
