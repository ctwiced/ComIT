let firstNumber = 8;
let secondNumber = 8;
let firstTemp = `${firstNumber} is equal to ${secondNumber}.`
let secondTemp = `${firstNumber} is larger than ${secondNumber}.`
let thirdTemp = `${secondNumber} is larger than ${firstNumber}.`

if (firstNumber == secondNumber) {
    console.log(firstTemp);
}
else if (firstNumber > secondNumber) {
    console.log(secondTemp);
}
else {
    console.log(thirdTemp);
}