let msg = "Hellow Javascript";

console.log(msg.includes("Hellow"));
console.log(msg.startsWith("Hellow"));
console.log(msg.endsWith("script"));
console.log(msg.indexOf("Java"));
console.log(msg.lastIndexOf("a"));

const greet = "hellow";
const hg = "MOTHERFUCKER";
console.log(greet.toUpperCase());
console.log(hg.toLowerCase());

//? Replacing
const hobby = "I love Javascript";
console.log(hobby);
console.log(hobby.replace("Javascript", "React"));
console.log(hobby.replaceAll("a", "o"));

//? Splitting and joining
const fruits = "apple, banana, cucumber, melon, coconut";
const fruitArr = fruits.split(",");
console.log(fruitArr);
const fruitString = fruitArr.join(",");
console.log(fruitString);

//? Triming of the white spaces
const name = "         Shakib       ";
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
const result2 = reverseString("Hellow");
console.log(result2);

const uni = "Daffodil";
console.log(uni.split("").reverse().join(""));

//? Checking if a string is palindrom or not
const checkPalinDrom = (str) => {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  }
  return false;
};

if (checkPalinDrom("lol")) {
  console.log("Yes this is a PalinDrom");
}

//Capitalizing First Word

const Capitalize = (str) => {
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  console.log(str);
};
Capitalize("hellow funcking funny");

const rev = "Hellow World";
console.log(
  rev
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .reverse()
    .join(" ")
);

//?Counting the length of the string
const uniName = "Daffodil International University";
console.log(uniName.length);

//?Looping Through the String
const looping = "Hellow";
looping.split("").map((char) => {
  console.log(char);
});

//? COunting Vowels in a string

const countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;
  str.split("").map((char) => {
    if (vowels.includes(char)) {
      count++;
    }
  });
  console.log(`Number of Vowels in the string is ${count}`);
};
countVowels("Hellow World");

//? Template literal

const fName = "Shakib";
const lName = "Hosseen";
const fullName = `Full Name is : ${fName} ${lName}`;
console.log(fullName);

//? Object
const person = {};
const age = 24;
person["age"] = age;
const key = "name";
person[key] = "Shakib";
console.log(person);

//? Nested Object

let user = {
  profile: {
    details: {},
  },
};
let key1 = "hobby";
user.profile.details[key1] = "Cricket";
console.log(user);
