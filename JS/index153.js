const myMath = {
    myAddition: function(firstNumber, SecondNumber) {
        myResult = firstNumber + SecondNumber;
        console.log(`${firstNumber} plus ${SecondNumber} equals ${myResult}`);
    },
    mySubtraction: function(firstNumber, SecondNumber) {
        myResult = firstNumber - SecondNumber;
        console.log(`${firstNumber} minus ${SecondNumber} equals ${myResult}`);
    },
    myDivision: function(firstNumber, SecondNumber) {
        myResult = firstNumber/SecondNumber;
        console.log(`${firstNumber} divided by ${SecondNumber} equals ${myResult}`);
    },
    myMultiplication: function(firstNumber, SecondNumber) {
        myResult = firstNumber * SecondNumber;
        console.log(`${firstNumber} times ${SecondNumber} equals ${myResult}`);
    }
}

myMath.myAddition(2, 3);
myMath.mySubtraction(2, 3);
myMath.myDivision(2, 3);
myMath.myMultiplication(2, 3);