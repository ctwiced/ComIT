let firstNumber = 1;
let secondNumber = 0;
let myTemp = 0;

for (myCounter = 10; myCounter <= 10 && myCounter >= 0; myCounter--) {
    myTemp = firstNumber;
    firstNumber = firstNumber + secondNumber;
    secondNumber = myTemp;
    console.log(secondNumber);
}