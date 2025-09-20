const number = [10, 20, 30, 40, 50, 60, 70, 80];

const length = number.length;
console.log(length);

// ? Way - 1 of finding the index of an array
for (let index in number) {
  console.log(`Index : ${index} ---> Value : ${number[index]}`);
}

//? Way - 2 of Finding the index of the an array
for (let [index, value] of number.entries()) {
  console.log(`Index : ${index} ---> Value : ${value}`);
}

//? Push and the Pop Opearation
number.push(100);
number.push(10);
console.log(number);
number.pop();
console.log(number);

//? Shift and the Unshift Operation

number.unshift(90);
number.unshift(87);
console.log(number);
number.shift();
console.log(number);

//? Index of Operator

let marks = [19, 67, 63, 78, 98];
const index = marks.indexOf(67);
const indextwo = marks.indexOf(78, 2); //? Starts Searching from the Second Index
console.log(index + 1);

//? Includes In Array
console.log(marks.includes(67));
console.log(marks.includes(87));

//? Checking if the provided thing is an array or not

console.log(Array.isArray(marks));
const person = {
  name: "Shakib",
  age: 20,
};
console.log(Array.isArray(person));
console.log(typeof person);
