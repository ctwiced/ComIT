const myNumbers = [];
const myNumbersPlusTen = null;

for (let myCounter = 0; myCounter <= 100; myCounter++) {
    myNumbers.push(myCounter);
}

for (let myCounter = 0; myCounter <= 100; myCounter++) {
    const myNumbersPlusTen = myNumbers.map(x => x + 10);
    console.log(`Index number: ${myCounter}, Original number: ${myCounter}, Incremented number: ${myNumbersPlusTen[myCounter]}`);
}

