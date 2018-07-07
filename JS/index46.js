const userAndPassword = 'pepito2017,12345';
const extractName = userAndPassword.substr(0, 10);
const extractPass = userAndPassword.substr(11, 17);

const template = `The username is ${extractName} and the password is ${extractPass}`;

console.log(template);