function operate (operator , a, b ) {
    return operations[operator](a,b)
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}
const operations={
    '+':add,
    '-':subtract,
    '*':multiply,
    '/':divide,
}
console.log(operate('+', 2, 5));
console.log(operate('-', 10, 7));
console.log(operate('*', 2, 5));
console.log(operate('/', 12, 6));