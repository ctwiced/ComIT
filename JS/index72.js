let myCounter = 0
let myStar = '*';
let newStar = '';

while (myCounter < 13) {
    newStar = myStar + newStar;
    console.log(newStar)
    myCounter++;
};