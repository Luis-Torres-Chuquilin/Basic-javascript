/** @format */

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

myCar.tetra = "doctor";

console.log(myCar);

//  Join 2 objects

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  ssn: "123-456-2356",
};

let job = {
  jobTitle: "JavaScript Developer",
  location: "USA",
};

let employee = {
  ...person,
  ...job,
};

console.log(employee); /*
{
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356',
    jobTitle: 'JavaScript Developer',
    location: 'USA'
}
*/

// Parse Object to Json String  // Parse Json String to  Object

console.log("Object Parsed to jsonString", JSON.stringify(employee));

let jsonString =
  '{"firstName":"John","lastName":"Doe","age":25,"ssn":"123-456-2356","jobTitle":"JavaScript Developer","location":"USA"}';

console.log("jsonString Parse to Object", JSON.parse(jsonString));
