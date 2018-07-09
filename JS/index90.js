let mySum = 0;

for (myTemp = 0; myTemp < 100; myTemp++) {
    if (myTemp % 2 == 1) {
        mySum = myTemp + mySum;
        console.log(mySum);
    }
}