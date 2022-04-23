/** @format */

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));

const doctor = () => {
  console.log("Doctor Function");
};

doctor();

let car = (amigos) => {
  console.log(`donde esta mis amigos ${amigos}`);
};

car("camellos");

function myFunc(theObject) {
  theObject.caramelo = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.caramelo; // y gets the value "Toyota"
// (the make property was changed by the function)

for (i in mycar) {
  console.log(i);
}

console.log(y);

/////////

function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
function f(x) {
  return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
