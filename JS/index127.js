let iceCreamFlavors = [
'Chocolate',
'vanilla',
'Strawberry',
'Butterscotch',
'Cake',
'Blueberry',
'Raspberry',
'Double Choclate',
'Salted Caramel',
'Coffee'
];


const firstShift = iceCreamFlavors.shift();
const secondShift = iceCreamFlavors.shift();
console.log(iceCreamFlavors)

console.log(`The removed flavors were ${firstShift} and ${secondShift}`)