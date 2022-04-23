/** @format */

let object = { amigo: "Luis", hermano: "Jesus" };
let object2 = [
  { amigo: "Luis", hermano: "Jesus" },
  { amigo: "Luis", hermano: "Jesus" },
];

let array = ["2", "madre mia", 343];

console.log("object typeof", typeof object);
console.log("object2 typeof", typeof object2);
console.log("array typeof", typeof array);
for (property in object) {
  console.log(property);
} // amigo , hermano

try {
  for (property of object2) {
    console.log(property);
  }
} catch (e) {
  console.log("Error object is not iterable");
}
//

console.log("ARRAY");
for (property of array) {
  console.log(property);
} // 2 ,  madre mia , 343

for (property in array) {
  console.log(property);
} // 0 , 1 , 2
