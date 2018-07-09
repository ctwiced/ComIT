let myMutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Beast',
'Phoenix',
]


if (myMutants.indexOf('Magneto') > -1) {
    console.log('Magneto is here!')
} else {
    for (mutantCounter = 0; mutantCounter < myMutants.length; mutantCounter++) {
        console.log(myMutants[mutantCounter])
    }
}
