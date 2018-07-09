let mySum = 0;

for (myTemp = 0; myTemp < 101; myTemp++) {
    if (mySum <= 400) {
        mySum = myTemp + mySum;
        console.log(mySum)
    }
    else{
        console.log('it ends here')
        break;
    }
}