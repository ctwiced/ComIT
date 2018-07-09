let myTemp = 10000

for (myCounter = 10000; myCounter <= 10000 && myCounter >= 0; myCounter--) {
    if (myTemp % 10 == 0) {
        console.log('** ' + myTemp + ' **');
    } else {
        console.log(myTemp);
    }
    myTemp = myTemp - 1;
}

