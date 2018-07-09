let firstString = 'longer';
let secondString = 'longerer';

function getLongertext() {
    if (firstString.length > secondString.length) {
        console.log(firstString + ' is longer than ' + secondString);
    }
    else {
        console.log(secondString + ' is longer than ' + firstString);
    }
}

getLongertext(firstString, secondString);