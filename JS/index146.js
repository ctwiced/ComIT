const myUser = {
    username: 'Batman',
    password: 'Alfred1960ROCKS!'
};

function shouldOpenBatCave(x, y) {
    if (x == 'Batman' && y == 'Alfred1960ROCKS!') {
        console.log(`Welcome ${myUser.username}!`)
    }
    else {
        console.log("Sorry, you can't enter the Batcave, try again..")
    }
}

shouldOpenBatCave(myUser.username, myUser.password);