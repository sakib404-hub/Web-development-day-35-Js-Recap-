/**
 * ! Defined with the function keyword
 * ! Hoisted because it can be called before it is defined
 * !This is known as the function declearation
 */
function sayHi() {
  console.log("Hi");
}
sayHi();

/**
 * ? Function Expression
 * ? In function Expression function can not be called earlier if it is not defined earlier
 */

const sayHellow = function () {
  console.log("Hellow");
};
sayHellow();

/**
 * TODO : The most of the cases the function that we will be using is the arrow function
 * TODO: Shorter syntax that was introduced in ES6
 * TODO: Great for inline or for the callback function
 */

const addition = (a, b) => a + b;
const result = addition(9, 10);
console.log(result);

const greet = (name = "Guest") => {
  console.log(`Welcome ${name}`);
};
greet("Shakib");
greet();
