/** @format */

// ARRAY
let array = ["2", "madre mia", 343];

for (property of array) {
  console.log(property);
} // 2 ,  madre mia , 343

let array2 = [
  { amigo: "Luis", hermano: "Jesus" },
  { amigo: "Luis", hermano: "Jesus" },
];

for (property of array2) {
  console.log("property of array2", property);
} // { amigo: "Luis", hermano: "Jesus" }, { amigo: "Luis", hermano: "Jesus" }
