mySum = null;

for (myEven = 0; myEven < 1000; myEven = myEven + 1) {
    while ( myEven < 20)
        if (myEven % 2 ==0) {
            mySum = myEven + mySum
            console.log(mySum)
        }
    break
}