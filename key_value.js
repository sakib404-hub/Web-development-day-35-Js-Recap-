const person = {
  name: "Shakib Hossen",
  age: 22,
  friends: ["Halim", "Kalim", "Dalim", "Jalim"],
  family: {
    fatherName: "Abbas Uddin",
    motherName: "Taslima Nasrin",
  },
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);
