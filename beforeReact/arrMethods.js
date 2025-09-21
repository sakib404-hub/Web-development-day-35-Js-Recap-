const numbers = [18, 58, 90, 67, 43, 64, 93];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const firstOdd = numbers.find((num) => num % 2);
console.log(firstOdd);

const total = numbers.reduce((acc, curr) => (acc += curr));
console.log(total);

numbers.forEach((num) => {
  num *= 2;
  console.log(num);
});

const hasEven = numbers.some((num) => num % 2 == 0);
const allEven = numbers.every((num) => num % 2 == 0);
console.log(hasEven);
console.log(allEven);

const index = numbers.findIndex((num) => num === 67);
console.log(index);

const ascending = [...numbers].sort((x, y) => x - y);
console.log(ascending);

const descending = [...numbers].sort((x, y) => y - x);
console.log(descending);
