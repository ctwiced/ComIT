let firstNumber = 1;
let secondNumber = 0;
let myCounter = 10
let myTemp = 0;

while (myCounter <= 10 && myCounter >= 0) {
    myTemp = firstNumber;
    firstNumber = firstNumber + secondNumber;
    secondNumber = myTemp;
    myCounter--;
    console.log(secondNumber)
}