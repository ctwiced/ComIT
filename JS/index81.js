let myTemp = 1;
let myMult = 9;
let updateTemp = 0;

do {
    updateTemp = myTemp * myMult;
    console.log(`${myMult} times ${myTemp} equals ` + updateTemp);
    myTemp++;
}
while (myTemp < 11);

console.log('I hate loops')