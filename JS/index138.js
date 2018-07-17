const myMutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Beast',
'Phoenix',
'Logan',
'Gambit'
]

console.log("Original mutant list: " + myMutants)

myMutants.forEach(function(x,i) {
    if (x == 'Iceman' || x == 'Logan' || x == 'Phoenix' || x == 'Professor X') {
        myMutants[i] = x + '<3';
    }
 });

console.log( "Modified mutant list: " + myMutants );
