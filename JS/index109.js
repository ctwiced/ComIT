myUsername = 'pedro';
myPassword = 'Batman0217';


function validateUser() {
    if (myUsername == 'nacho' && myPassword == 'Nerd1979') {
        console.log(`Welcome ${myUsername}, nice to see you again`);
    } else if (myUsername == 'pedro' && myPassword == 'Batman0217'){
        console.log(`Welcome ${myUsername}, nice to see you again`);
    } else if (myUsername == 'marta' && myPassword == 'Mother2312'){
        console.log(`Welcome ${myUsername}, nice to see you again`);
    }
    else {
        console.log('Please input valid credentials!')
    }
}



validateUser(myUsername, myPassword)