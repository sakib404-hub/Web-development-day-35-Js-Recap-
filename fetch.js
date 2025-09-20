const person = {
  name: "Shakib Hossen",
  age: 22,
  friends: ["Halim", "Kalim", "Dalim", "Jalim"],
  family: {
    fatherName: "Abbas Uddin",
    motherName: "Taslima Nasrin",
  },
};

//? Converting object into a json Data
const jsonData = JSON.stringify(person);

//? Converting Json Data into an object based Data
const objData = JSON.parse(jsonData);

console.log(jsonData);
console.log(objData);

/**
 * TODO: What is Fetch ?
 * ? Fetch is a Built in browser API that lets you make HTTP request to get send update and delete data from the server
 * ? It returns a promise that resolves to a response object which i can process furture like converting to json, text, blob and etc
 */

// this is How we will be using the fetch
const url = "";
fetch(url)
  .then((res) => res.json())
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
