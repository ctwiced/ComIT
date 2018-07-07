const myMessage = "3.14 it's a great number but 42 is the answer to life.";
const myPi = parseFloat(myMessage.slice(0, 4));
const answerToLife = parseInt(myMessage.slice(29, 31));
const myResult = myPi + answerToLife;
const template = `${myResult} is the result of adding ${myPi} and ${answerToLife}`;

console.log(myPi);
console.log(answerToLife);
console.log('myResult: ', myResult);
console.log(template);



