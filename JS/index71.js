let myTemp = 1;
let myMult = 9;
let updateTemp = 0;

while (myTemp < 11) {
        updateTemp = myTemp * myMult;
        console.log(`${myMult} times ${myTemp} equals ` + updateTemp);
        myTemp++;
}

console.log('I hate loops')