let grade = prompt ("whats is your grade?");
// grade = 'h';


if (typeof grade == 'string'){
grade =  grade.toUpperCase() ;
}

if ((grade=='A') || (grade=='B') || (grade == 'C') || (grade == 'F') || (grade == 'D')){
console.log(`Your grade is ${grade} !!`);
}else{
    console.log("INVALID");
}

  if (typeof grade === 'number'){

if( (grade >= 0) && (grade <= 64) ){
        grade = "F";
        console.log(`your grade is ${grade} !!`);
}else if( (grade >= 65) && (grade <= 69)){
        grade = "D";
        console.log(`your grade is ${grade} !!`);
}else if( (grade >= 70) && (grade <= 79) ){
    grade = "C"
    console.log(`your grade is ${grade} !!`);
}else if( (grade >= 80) && (grade <= 89) ){
    grade = "B"
    console.log(`your grade is ${grade} !!`);
}else if( (grade >= 90) && (grade <= 100) ){
    grade = "A"
    console.log(`your grade is ${grade} !!`);
} else {
    console.log("INVALID");
} 

  }