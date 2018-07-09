let oddOrEven = 24;

function isItOddOrEven() {
    if (oddOrEven % 2 == 0) {
        console.log(`Congrats, ${oddOrEven} is an even number!`);
    }
    else {
        console.log(`Too bad, ${oddOrEven} is an odd number :(`);
    }
}

isItOddOrEven(oddOrEven);