let firstName = 'Christopher';
let lastName = 'Cooper';

let firstTemplate = `My first name is ${firstName} and it is ${firstName.length} characters long`;
let secondTemplate = `My last name is ${lastName} and it is ${lastName.length} characters long`;
let thirdTemplate = `The character difference between my first and last name is ${firstName.length - lastName.length} characters`;
let fourthTemplate = `True or False, my first name is longer than my last name: ${firstName.length >= lastName.length}`;

console.log(firstTemplate);
console.log(secondTemplate);
console.log(thirdTemplate);
console.log(fourthTemplate);