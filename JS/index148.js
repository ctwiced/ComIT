const myHero = {
    name: 'Batman',
    secretName: 'Bruce',
    sideKick: ['Robin', 'Alfred', 'Gordon'],
    strength: '70',
}

myHero.speed = 80;

const properties = Object.keys(myHero);

properties.forEach(function(property) {
  console.log(myHero[property]);
});
