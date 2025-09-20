/**
 * TODO : Arithmetic Operators
 * ? + Plus or knbown as the addition
 * ? - Minus or known as the substraction
 * ? * Multiplication
 * ? / Division
 * ? % Modulus
 * ? ** Power
 */

const number = 2 ** 3;
console.log(number);
const numberTwo = 5 ** 3;
console.log(numberTwo);

/**
 * TODO : Comparison Operator
 * ? == Eual to checks if both side of the equal has the same value
 * ? === This is also known as the Equal to Operator therefore it checks the value and the type also
 * ? != This is known as the not Equal to where it checks only for the value
 * ? !== This is also known as the not Equal to Opeator but it  checks the value and also the types of the both side also
 * ? > Greater Then
 * ? >= Greater then or Equal to
 * ? < Less then
 * ? <= Less then or Equal to Operator
 */

if (number > 6) {
  console.log("Therefore it satisfy the condition that is given");
}

/**
 * TODO : Logical Operators
 * ? && logical And operator
 * ? || logical OR operator
 * ? ! Logical Not Operator
 * ? ----> This known as the ternary Operator
 */

const personAge = 19;

const statusOne = personAge > 18 ? "Adult" : "TeenAge";
console.log(statusOne);

let marks = [90, 98, 78, 89, 90, 86];

let [phy, chem, bio, ban, eng, math] = marks;
const subject = [phy, chem, bio, ban, eng, math];

subject.forEach((mark) => {
  if (mark >= 80) {
    console.log("A+");
  } else if (mark >= 70) {
    console.log("A");
  } else if (mark >= 60) {
    console.log("A-");
  } else if (mark >= 50) {
    console.log("B");
  } else if (mark >= 40) {
    console.log("C");
  } else if (mark >= 33) {
    console.log("D");
  } else {
    console.log("F");
  }

  //? Doing it with the Ternary Operaor
  let grade =
    mark >= 80
      ? "A+"
      : mark >= 70
      ? "A"
      : mark >= 60
      ? "A-"
      : mark >= 50
      ? "B"
      : mark >= 40
      ? "C"
      : mark >= 33
      ? "D"
      : "F";
  console.log(grade);
});
