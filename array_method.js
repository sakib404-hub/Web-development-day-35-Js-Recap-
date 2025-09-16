const product = [
  { name: "Redmmi", brand: "Xiaomi", price: 30000, color: "black" },
  { name: "Redmmi K40 PRO", brand: "Xiaomi", price: 50000, color: "black" },
  { name: "Huwaei Y MaX", brand: "Huawei", price: 40000, color: "white" },
  {
    name: "Samsung Galaxgy s24",
    brand: "Samsung",
    price: 50000,
    color: "Gold",
  },
  { name: "Kidney Mobile", brand: "Iphone", price: 60000, color: "Pink" },
];

const color = product.map((product) => product.color);
console.log(color);

const price = product.map((product) => product.price);
console.log(price);

const brand = product.map((product) => product.brand);
console.log(brand);

// For Each Does not return anything it returns nothing it only does something to the object
product.forEach((product) => {
  console.log(product.name);
});

//Filtering an Array based on the matched condition that we will provide
const onlyBlack = product.filter(
  (product) => product.color === "black" && product.price > 40000
);
console.log(onlyBlack);

//? Finding the first element that matches the condition
//? Find will produce [undefined] whenever the condition we provide will not match anything
const model = product.find((product) => product.price > 40000);
console.log(model);
