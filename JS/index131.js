let myFemaleStudents = ['Georgia', 'Florence', 'Tiffany', 'Cassidy', 'Donna'];
let myMaleStudents = ['Frank', 'Moses', 'Ben', 'Chris', 'John'];
let myMaleCounter = 0;
let myStudentCounter = 0;

let allStudents = myFemaleStudents.concat(myMaleStudents);
let sortedStudents = allStudents.sort();

//outputting the female student names
console.log(myFemaleStudents[0], myFemaleStudents[1], myFemaleStudents[2], myFemaleStudents[3], myFemaleStudents[4]);

//outputting the male student names
while (myMaleCounter < myMaleStudents.length){
    console.log(myMaleStudents[myMaleCounter]);
    myMaleCounter++;
}
// outputting all student names
for (myStudentCounter = 0; myStudentCounter < sortedStudents.length; myStudentCounter++) {
    console.log(sortedStudents[myStudentCounter]);
}


