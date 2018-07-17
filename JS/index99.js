// mySum = 0;

// for (myEven = 0; myEven < 1000; myEven = myEven + 1) {
//     while ( myEven < 20)
//         if (myEven % 2 ==0) {
//             mySum = myEven + mySum
//             console.log(mySum)
//         }
//     break
// }


// total = 0;

// for (number = 0; number < 1000; number++) {
//     if (number % 2 ==0 && number  <= 40) {
//         total = total + number
//     }
// }
// console.log(total)


myTotal = 0;

for (myNumber = 0; myNumber < 1000; myNumber++) {
    if (myNumber >= 42) {
        break;
    }
    else if (myNumber % 2 == 0 ) {
        myTotal = myTotal + myNumber
    }
}

console.log(myTotal);