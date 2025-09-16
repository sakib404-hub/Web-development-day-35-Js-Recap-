const number = 20;

if (number > 10 && number < 30) {
  console.log("Yes");
} else {
  console.log("No");
}

const friends = ["Hero", "Zero", "SRK", "Rahim"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
friends.push("Foysal");
console.log(friends);
friends.pop();
console.log(friends);
friends.unshift("Shakib");
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.slice(2, 3));
console.log(friends.splice(2, 4));
