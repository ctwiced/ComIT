const firstPerson = ['Chris', 'Cooper', '414 Kenderdine', 31];
const secondPerson = ['Chris', 'Cooper', '414 Kenderdine', 31 ];

const firstResult = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

const secondResult = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

function personChecker(x, y) {
    if (firstResult == secondResult) {
        console.log("Same person, duh");
    }
    else {
        console.log("Different people!")
    }
}

console.log(firstResult);
console.log(secondResult);

personChecker(firstResult, secondResult);