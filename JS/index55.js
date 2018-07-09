const firstNumber = 3;
const secondNumber = 5;
let myTemp = `In fact, it is ${firstNumber}.`;


let myMessage = (firstNumber === 2 ) ? 'The number is 2' : 'The number is not 2. ' + myTemp;

console.log(myMessage);


// if (firstNumber > secondNumber) {
//     console.log('Number ' + firstNumber + ' is larger than ' + secondNumber)
// }
// else {
//     console.log('Number ' + secondNumber + ' is larger than ' + firstNumber)
// }