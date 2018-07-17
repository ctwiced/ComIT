const myNumbers = [];
const myNumbersPlusTen = null;

for (let myCounter = 0; myCounter <= 100; myCounter++) {
    myNumbers.push(myCounter);
}

const filteredEvenNumbers = myNumbers.filter(function(number) {
        if (number % 2 == 0 && number <= 40) {
            return number;
    }
});

const filteredOddNumbers = myNumbers.filter(function(number) {
    if (number % 2 != 0 && number >= 80) {
        return number;
}
});

console.log(`The even numbers are: ` + filteredEvenNumbers);
console.log(`The even numbers are: ` + filteredOddNumbers);
