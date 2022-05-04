/** @format */

// ARRAY
let array = ["2", "madre mia", 343];

let array2 = [
  { amigo: "Luis", hermano: "Jesus" },
  { amigo: "Luis", hermano: "Jesus" },
];

for (property in array) {
  console.log(property);
} // 0 , 1 , 2

for (property in array2) {
  console.log("property in array2", property);
} // 0 , 1
