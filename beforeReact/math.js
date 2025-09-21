const numbers = [10, 20, 30, 40, 50];
const maximum = Math.max(...numbers);
console.log(maximum);
const minimum = Math.min(...numbers);
console.log(minimum);

//? Finding minimum or the maximum number by using the reduce
const maxNum = numbers.reduce((max, num) => {
  return (max = num > max ? num : max);
}, numbers[0]);
console.log(maxNum);

const minNum = numbers.reduce((minimum, curr) => {
  return (minimum = minimum > curr ? curr : minimum);
}, numbers[0]);
console.log(minNum);

//? ceil

const ceilValue = Math.ceil(4.289);
console.log(ceilValue);

const floorValue = Math.floor(4.987);
console.log(floorValue);

const roundValueOne = Math.round(8.578);
console.log(roundValueOne);
const roundValueTwo = Math.round(8.34);
console.log(roundValueTwo);

const absValue = Math.abs(-100);
console.log(absValue);

const randomValue = Math.round(15 + Math.random() * (10000 - 15));
console.log(randomValue);

const sqrtValue = Math.sqrt(25);
console.log(sqrtValue);

const power = 6 ** 2;
console.log(power);
