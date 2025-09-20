//? Array.slice(StartingIndex, Ending Index)
//? Therefore that is what we do with the slice

const numbers = [10, 20, 30, 40, 50];
const part = numbers.slice(1, 4);
console.log(part);
console.log(numbers);

/**
 * TODO : Purpose of the splice()
 * ? Add or Remove Elements From an Array
 * ?  Modifies the original Array
 * ? Syntax : Array.Splice(Starting Index, Delete Count/ Replace Count)
 */

//? 1 no index theke suru kore 2 ta element delete koro
numbers.splice(1, 2);
console.log(numbers);

//? 1 no index e first e 25 pore 35 asteche
numbers.splice(1, 0, 25, 35);
console.log(numbers);

//? Replacing
numbers.splice(3, 1, 78);
console.log(numbers);

// join
const fruits = ["Apple", "Banana", "Mango", "Orenge"];
console.log(typeof fruits.join(" ,"));
console.log(fruits.join(" ,"));

const marks = [89, 88, 78, 78, 36];

const sum = marks.reduce((acc, current) => (acc += current), 0);
const mul = marks.reduce((acc, curr) => (acc *= curr), 1);
console.log(sum);
