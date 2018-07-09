let myMult = 9;
let updateTemp = 0;

for (myTemp = 1; myTemp < 11; myTemp++) {
    updateTemp = myTemp * myMult;
    console.log(`${myMult} times ${myTemp} equals ` + updateTemp);
}
console.log('I hate loops')