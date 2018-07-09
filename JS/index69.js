let myTemp = 0;
let mySum = 0;

do {
    mySum = myTemp + mySum;
    myTemp++;
    console.log(mySum);
} while (myTemp < 1001) ;