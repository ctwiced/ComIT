const myMutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Beast',
'Phoenix',
'Logan',
'Gambit'
]

selectedMutants = [];
mutationObserver = [];

myMutants.forEach(function(name) {
    if (name == 'Iceman' || name == 'Logan' || name == 'Phoenix') {
        selectedMutants.push(name);
    }
});

console.log(selectedMutants.toString());