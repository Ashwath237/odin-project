const digit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const remove = document.querySelectorAll(".remove");
const answer = document.querySelectorAll(".answer");
const displayElement = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operatorStored;
let display;
let collectingFirstNumber = true;
let result = "";

digit.forEach((button) => {
    button.addEventListener("click",()=>{
        if (firstNumber === ""&& collectingFirstNumber){
            displayElement.textContent = "";

        }
        if (collectingFirstNumber) {
                firstNumber += button.textContent;
            }
            else{
                secondNumber += button.textContent;
            }   
            displayElement.textContent += button.textContent
        
    });
});

operator.forEach((button) => {
    button.addEventListener("click",()=>{
        operatorStored = button.textContent ; 
        displayElement.textContent += " " + operatorStored + " ";
        collectingFirstNumber = false;
        });
});

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

function operate(firstNumber, operatorStored, secondNumber) {
    console.log(firstNumber, operatorStored, secondNumber);
    return operations[operatorStored](Number(firstNumber), Number(secondNumber));
}
function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}
function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber;
}



answer.forEach((button)=>{
    button.addEventListener("click",()=>{
        result = operate(firstNumber, operatorStored, secondNumber);
        displayElement.textContent = result;
        firstNumber = "";
        secondNumber = "";
        operatorStored = "";
        collectingFirstNumber = true;
        
    });
});

remove.forEach((button)=>{
    button.addEventListener("click",()=>{
        displayElement.textContent = "0";
        firstNumber = "";
        secondNumber = "";
        operatorStored = "";
        collectingFirstNumber = true;
    });
});


