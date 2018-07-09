let weekdayNumber = 3;
let myMessage = null;
let monTemp = `Today is Monday.`
let tueTemp = `Today is Tuesday.`
let wedTemp = `Today is Wednesday.`
let thuTemp = `Today is Thursday.`
let friTemp = `Today is Friday.`
let satTemp = `Today is Saturday.`
let sunTemp = `Today is Sunday.`

let myTemp = `Today is `

// if (weekdayNumber === 1) {
//     console.log(monTemp)
// }
// else if (weekdayNumber === 2) {
//     console.log(tueTemp)
// }
// else if (weekdayNumber === 3) {
//     console.log(wedTemp)
// }
// else if (weekdayNumber === 4) {
//     console.log(thuTemp)
// }
// else if (weekdayNumber === 5) {
//     console.log(friTemp)
// }
// else if (weekdayNumber === 6) {
//     console.log(satTemp)
// }
// else if (weekdayNumber === 7) {
//     console.log(sunTemp)
// }
// else {
//     console.log('Please enter a number between 1 and 7')
// }

switch (weekdayNumber) {
    case 1:
      myMessage = 'Today is Monday.'
      break;
    case 2:
      myMessage = 'Today is Tuesday.'
      break;
    case 3:
      myMessage = 'Today is Wednesday.'
      break;
    case 4:
      myMessage = 'Today is Thursday.'
      break;
    case 5:
      myMessage = 'Today is Friday.'
      break;
    case 6:
      myMessage = 'Today is Saturday.'
      break;
    case 7:
      myMessage = 'Today is Sunday.'
      break;
    default: 
      myMessage = 'What is time even?'  
}

console.log(myMessage);