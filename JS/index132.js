let myMutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Beast',
'Phoenix',
]

if (myMutants.indexOf('Logan') && myMutants.indexOf('Professor X') > -1) {
    console.log('We love X-Men')
}

console.log('Checking gambit presence...Not present!')

if (myMutants.indexOf('Gambit')) {
    console.log('...X-Men sucks')
}