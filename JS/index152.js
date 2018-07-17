const myUser = {
    username: null,
    password: null,
    greet: function() {
        if (myUser.username != null) {
            console.log(`Hello, I'm ${this.username}`);
        } else {
            console.log(`Please assign a username`);
        }
    },
    updatePassword: function(newPassword) {
        myUser.password = newPassword;
    },
    updateUsername: function(newUsername) {
        myUser.username = newUsername;
    }
}

myUser.greet();
myUser.updatePassword('Denise123');
myUser.updateUsername('Bill Cooper')
myUser.greet();


console.log(myUser);