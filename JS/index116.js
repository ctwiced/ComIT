myColor = 'black';

//Commented out the console.logs after I figured out how to return a string (just call the whole function in a console.log below)
function getHexaColor () {
    if (myColor == 'white') {
        // console.log(`param: ${myColor}, return value: #FFFFFF`)
        return 'param: ' + myColor + 'return value: #FFFFFF';
    }
    else if (myColor = 'black'){
        // console.log(`param: ${myColor}, return value: #000000`)
        return 'param: ' + myColor + 'return value: #000000';
    }
    else if (myColor = 'blue'){
        // console.log(`param: ${myColor}, return value: #0b24fb`)
        return 'param: ' + myColor + 'return value: #0b24fb';
    }
    else if (myColor = 'green'){
        // console.log(`param: ${myColor}, return value: #0e7e12`)
        return 'param: ' + myColor + 'return value: #0e7e12';
    }
    else if (myColor = 'yellow'){
        // console.log(`param: ${myColor}, return value: #fffd38`)
        return 'param: ' + myColor + 'return value: #fffd38';
    }
    else if (myColor = 'pink'){
        // console.log(`param: ${myColor}, return value: #fec1cc`)
        return 'param: ' + myColor + 'return value: #fec1cc';
    }
}

console.log(getHexaColor(myColor));