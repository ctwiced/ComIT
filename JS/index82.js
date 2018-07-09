let myCounter = 0
let myStar = '*';
let newStar = '';

do {
    newStar = myStar + newStar;
    console.log(newStar)
    myCounter++;
} while (myCounter < 13);