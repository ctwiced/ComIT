const myArray = [];
let cummulativeSum = (accumulator, currentValue) => accumulator + currentValue;

for (let myCounter = 1; myCounter <= 1000; myCounter++) {
    myArray.push(myCounter);
}

if (myArray.reduce(cummulativeSum) === 500500) {
  console.log(myArray.reduce(cummulativeSum) + `! Good job!`);
} else {
  console.log(myArray.reduce(cummulativeSum) + `, Something didn't work out.`);
}