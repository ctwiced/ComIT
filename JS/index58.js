let theHour = 1;

let myTemp = `It is 0${theHour}00 hours.`

if (theHour > 5 && theHour < 12) {
    console.log(myTemp + ' Good morning!')
}
else if (theHour > 12 && theHour < 18) {
    console.log(myTemp + ' Good afternoon!')
}
else if (theHour > 18 && theHour < 22) {
    console.log(myTemp + ' Good evening!')
}
else {
    console.log(myTemp + ' Good night!')
}