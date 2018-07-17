const myUser = {
    username: 'Batman',
    password: 'Alfred1960ROCKS!'
};

function shouldOpenBatCave() {
    if (x == 'Batman' && y == 'Alfred1960ROCKS!') {
        console.log(`Welcome ${myUser.username}!`)
    }
    else {
        console.log("Sorry, you can't enter the Batcave, try again..")
    }
}

shouldOpenBatCave();