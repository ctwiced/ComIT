const myMutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit'
]

const specialMutants = myMutants.filter(function(mutant) {
    if (mutant == 'Magneto' || mutant == 'Iceman' || mutant == 'Gambit') {
        return mutant;
    }
});
console.log('Original mutants: ' + myMutants);
console.log('Filtered mutants: ' + specialMutants);