let myTemp = 0;
let mySum = 0;
while (myTemp < 100) {
    if (myTemp % 2 == 1) {
        mySum = myTemp + mySum;
        console.log(mySum);
    }
    myTemp++;//Had to pop this iterator outside the if statement because it won't work otherwise I guess. Makes sense because it is supposed to iterate through the loop...
}
