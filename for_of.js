/** @format */

// OBJECT -  for in
let object = { amigo: "Luis", hermano: "Jesus" };

for (property in object) {
  console.log("property in object", property);
} // amigo , hermano

// ARRAY
let array = ["2", "madre mia", 343];

let array2 = [
  { amigo: "Luis", hermano: "Jesus" },
  { amigo: "Luis", hermano: "Jesus" },
];

for (property of array) {
  console.log(property);
} // 2 ,  madre mia , 343

for (property of array2) {
  console.log("property of array2", property);
}

for (property in array) {
  console.log(property);
} // 0 , 1 , 2

for (property in array2) {
  console.log("property in array2", property);
} // 0 , 1
