let firstNumber = 25;
let secondNumber = 89;

let addResult = firstNumber + secondNumber;
let subresult = firstNumber - secondNumber;
let mulResult = firstNumber * secondNumber;
let divResult = firstNumber / secondNumber;
let remResult = firstNumber % secondNumber;

let addTemplate = `When we add ${firstNumber} and ${secondNumber}, we get ${addResult}!`
let subTemplate = `When we subtract ${firstNumber} from ${secondNumber}, we get ${subresult}!`
let mulTemplate = `When we mulitply ${firstNumber} and ${secondNumber}, we get ${mulResult}!`
let divTemplate = `When we divide ${firstNumber} by ${secondNumber}, we get ${divResult}!`
let remTemplate = `The remainder left over when we divide ${firstNumber} by ${secondNumber}, is ${remResult}!`


console.log(addTemplate)
console.log(subTemplate)
console.log(mulTemplate)
console.log(divTemplate)
console.log(remTemplate)