//! Template STring known as the Backtick

const fName = "Shakib";
const lName = "Hossen";

console.log(
  `I am MD. ${
    fName + " " + lName
  } Currently Studying in Daffodil International University in Computer Science and Engineering`
);

const addtwo = (numberOne, numberTwo) => {
  const result = numberOne + numberTwo;
  return result;
};

const multiply = (x, y) => x * y; //?Auto return kore but when its in single line  not in multiple line
console.log(addtwo(9, 8));

//Using the rest operator usually it is the spread Operator
const sum = (...rests) => {
  let total = 0;
  for (const number of rests) {
    total += number;
  }
  return total;
};
console.log(sum(1, 2, 3));

const number = [1, 2, 5, 100, 89];
const numberTwo = [...number];
numberTwo.push(1000);
numberTwo.push(59);
number.push(23);
console.log(...number);
console.log(numberTwo);
