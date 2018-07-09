let firstNum = 10;
let secondNum = 8;
let thirdNum = 25;
let highToLow = true;


function sorterThingy() {
    if (firstNum < secondNum && firstNum < thirdNum) {
        if (highToLow == true){
            console.log(firstNum, secondNum, thirdNum);
        }
        else {
            console.log(thirdNum, secondNum, firstNum);
        }
    }
    else if (firstNum < secondNum && firstNum > thirdNum) {
        if (highToLow == true){
            console.log(thirdNum, firstNum, secondNum);
        }
        else {
            console.log(secondNum, firstNum, thirdNum);
        }
    }
    else if (firstNum > secondNum && thirdNum > firstNum) {
        if (highToLow == true){
            console.log(secondNum, firstNum, thirdNum);
        }
        else {
            console.log(thirdNum, firstNum, secondNum);
        }
    }
    else if (firstNum > secondNum && thirdNum < secondNum) {
        if (highToLow == true){
            console.log(thirdNum, firstNum, firstNum);
        }
        else {
            console.log(firstNum, firstNum, thirdNum);
        }
    }
}




sorterThingy(firstNum, secondNum, thirdNum, highToLow);
