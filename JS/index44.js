const myGreeting = 'HELLO';

const firstChar = myGreeting.charAt(0);
const secondChar = myGreeting.charAt(1);
const thirdChar = myGreeting.charAt(2);
const fourthChar = myGreeting.charAt(3);
const fifthChar = myGreeting.charAt(4);

const myResult = fifthChar + fourthChar + thirdChar + secondChar + firstChar;

const smallLetters = myResult.toLocaleLowerCase();

console.log(smallLetters);

