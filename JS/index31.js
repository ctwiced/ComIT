//Triangle area calculator

let sideOne = 12;
let sideTwo = 12;
let sideThree = 20;

//Math
let triArea = (sideOne * sideTwo) / 2;
let triPerimeter = sideOne + sideTwo + sideThree;

//Message
let areaTemplate = `The area of the triangle with sides measuring ${sideOne} x ${sideTwo} is ${triArea}`;
let perTemplate = `The perimeter of the triangle with sides measuring ${sideOne} x ${sideTwo} is ${triPerimeter}`;

console.log(areaTemplate)
console.log(perTemplate)