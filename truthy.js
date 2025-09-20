const test = " ";
if (test) {
  console.log(`It's Truthy`);
} else {
  console.log(`It's Falsey`);
}

test ? console.log("Its Truthy") : console.log("Its Falsey");

const number = 10;

const result = number >= 10 && number <= 20 ? "Truthy" : "Falsey";
console.log(result);

const isActive = true;

const showUser = () => console.log("Show User Green");
const hideUser = () => console.log("Hide User");

isActive ? showUser() : hideUser();

//? if the isActive is true therefore it will show the function showUser();
isActive && showUser();
//! jodi isActive true hoi tahole showUser dekhabe

isActive || hideUser();
//! Jodi is Active False hoi tahole hideuser dekhabe

const num = "10";
console.log(+num);
console.log(typeof num);

const numberTwo = 10;
const result2 = numberTwo + "";
console.log(typeof result2);
