let myTemp = 0;
let mySum = 0;

do {
    if (myTemp % 2 == 1) {
        mySum = myTemp + mySum;
        console.log(mySum);
    }
    myTemp++;
}
while (myTemp < 100);
