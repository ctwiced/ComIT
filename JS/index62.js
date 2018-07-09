let monthNumber = 2;
let monthName = null;
let monthDays = null;
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dayArray = ['28', '29', '30', '31']

switch (monthNumber) {
    case 1:
        message = `The month is ${monthArray[0]} and the number of days is ${dayArray[3]}.`
        break;    
    case 2:
        message = `The month is ${monthArray[1]} and the number of days is ${dayArray[0]} in a common year and ${dayArray[1]} days in a leap year.`
        break;
    case 3:
        message = `The month is ${monthArray[2]} and the number of days is ${dayArray[3]}.`
        break;
    case 4:
        message = `The month is ${monthArray[3]} and the number of days is ${dayArray[2]}.`
        break;
    case 5:
        message = `The month is ${monthArray[4]} and the number of days is ${dayArray[3]}.`
        break;
    case 6:
        message = `The month is ${monthArray[5]} and the number of days is ${dayArray[2]}.` 
        break;
    case 7:
        message = `The month is ${monthArray[6]} and the number of days is ${dayArray[3]}.`
        break;
    case 8:
        message = `The month is ${monthArray[7]} and the number of days is ${dayArray[3]}.`
        break;
    case 9:
        message = `The month is ${monthArray[8]} and the number of days is ${dayArray[2]}.`
        break;
    case 10:
        message = `The month is ${monthArray[9]} and the number of days is ${dayArray[3]}.`
        break;
    case 11:
        message = `The month is ${monthArray[10]} and the number of days is ${dayArray[2]}.`
        break;
    case 12:
        message = `The month is ${monthArray[11]} and the number of days is ${dayArray[3]}.`
        break;
    default:
        message = `Time is just a construct of human perception.`
        break;      
} 

console.log(message);