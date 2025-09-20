//? For loop
for (let i = 0; i < 5; i++) {
  console.log("Hellow this is ME 5 times!");
}

//? While loop
let count = 0;
while (count < 5) {
  count++;
  console.log("This is again me in while Loop");
}

//? DO-While Loop

count = 0;
do {
  console.log("This is ME again from The Do-While Loop");
  ++count;
} while (count <= 4);

//? For of loop

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for of without the index
for (let num of numbers) {
  console.log(num);
}
//? for of if i want index also

for (let [index, num] of numbers.entries()) {
  console.log(`Index is ${index} and value of the element is ${num}`);
}

//? With the for-in looping thing
for (let index in numbers) {
  console.log(
    `Index is ${index} and value of the element is ${numbers[index]}`
  );
}
