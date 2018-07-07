const playerName = 'Patrik Laine is lame';
const someTeams = 'New Jersey Devils, New York Rangers, Winnipeg Jets & Pittsburgh Penguins';
const myMessage = 'Winnipeg is the best Canadian city, Go Winnipeg'

const resultOne = playerName.slice(0, 12);
const resultTwo = myMessage.slice(9, 20);
const resultThree = someTeams.slice(45, 50);
const resultFour = myMessage.slice(36, 38);



console.log(resultOne.toLocaleUpperCase() + ' ' + resultTwo + resultThree + ' ' + 'player, ' + resultFour + resultThree)