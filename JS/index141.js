const tripExpenses = [200, 700, 100];

const tripCostBreakdown = `hotel: $${tripExpenses[0]}, trip: $${tripExpenses[1]}, meals: $${tripExpenses[2]}`

const tripTotaler = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(tripCostBreakdown)
console.log(`total trip cost: $${tripTotaler}`)

  