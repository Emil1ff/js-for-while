function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return ("Sifira bolme qoqqu");
    }
    return a / b;
}

console.log(sum(5,10));

console.log(difference(15, 10));

console.log(product(3, 5));

console.log(division(10, 2));