/**
 * ! The Spread operator in javascript is a very versetile tool used to expend iterable object
 * ! like array, strings or objects into individuals element its purpose depends on the context
 * ? Useful to avoid mutating the original array or object.
 * ? You can combine multiple arrays or objects easily.
 * ? We can convert strings or other iterables into arrays.
 */
const numbers = [10, 20, 30, 49];
const copy = [...numbers]; //? By using this we made sure the legit array and the copied array has different references
copy.push(90);
copy.push(100);
console.log(numbers);
console.log(copy);

const a = [1, 2, 3, 4];
const b = [4, 6, 8, 19];
const copy2 = [...a, ...b, 99, 78];
console.log(copy2);

/**
 * ! Collects remaining values into an array.It is often used in function parameters or destructuring.
 */
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

/**
 * ? Spread: Expands (breaks down) an array/object.
 * ? Rest: Collects (gathers up) values into an array.
 * hink of it like this:
 * ! Spread → unpack
 * ! Rest → pack
 */
