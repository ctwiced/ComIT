function biggerNumber(firstNumber, secondNumber) {
        if (isNaN(firstNumber) || isNaN(secondNumber)){
            console.log(`Not a number!`);
        }
        else if (firstNumber > secondNumber) {
            console.log(`The first number (${firstNumber}) is larger than the second (${secondNumber})`);
        }
        else if (secondNumber > firstNumber) {
            console.log(`The second number (${secondNumber}) is larger than the first (${firstNumber})`);
        }
        else if (firstNumber == secondNumber) {
            console.log(`${secondNumber} and ${firstNumber} are the same number`);  
    }
}

let firstSpot = 1;
let secondSpot = 100;

biggerNumber(firstSpot, secondSpot)