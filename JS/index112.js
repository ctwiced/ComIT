let firstNumber = 100;
let secondNumber = 10;

function showNumbers () {
    if (firstNumber == secondNumber) {
        console.log('No range to print, they are the same number')
    }
    else if (firstNumber < secondNumber) {
        console.log(firstNumber)
        while (firstNumber < secondNumber) {
            firstNumber = firstNumber + 1
            console.log(firstNumber)
            firstNumber++;
        }
        console.log(firstNumber)
    }
    else {
        console.log(secondNumber)
        while (secondNumber < firstNumber) {
            secondNumber = secondNumber + 1
            console.log(secondNumber)
            secondNumber++
        }
        console.log(secondNumber)
    }
}

showNumbers(firstNumber, secondNumber)