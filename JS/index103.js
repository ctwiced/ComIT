let myNum = 0;

const evenNumbers = function() {
    while (myNum < 101) {
        if (myNum % 2 == 0) {
            console.log(myNum);
            myNum+=2;
        }
    }
}

evenNumbers();