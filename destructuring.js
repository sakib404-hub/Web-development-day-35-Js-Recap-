const friends = ["Alim", "Kalim", "Dalim", "Zalim", "Halim"];

/**
 * ! If i need every Single Element Separately thefore we use array Destructuring
 * ! if all the elements in the array is not need therefore arraay destructing is useless
 */
const [ele1, ele2, ele3, ele4, ele5] = friends;
console.log(ele1);
console.log(ele2);
console.log(ele3);
console.log(ele4);
console.log(ele5);

const person = {
  name: "Halim Udddin Dalim",
  age: 22,
  friend: friends,
  country: "Bangladesh",
};
console.log(person);
console.log(person.country);

//! const { name: userName, age: userAge } = person; we can do this thing also

const { name: userName, age, friend, country: cny } = person;
console.log(cny);
