function getUserId() {
    return 20;
}

function isUserValid() {
    if(getUserId() > 30){
        return true;
    }
    else {
        return false;
    }
}

if (isUserValid()){
    console.log('User is valid')
}
else {
    console.log('User not valid')
}