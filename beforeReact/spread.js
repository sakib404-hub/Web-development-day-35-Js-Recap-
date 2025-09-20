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
