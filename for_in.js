/** @format */

// for (variable in object) statement

const object = { a: "doctor", b: "caminando", c: "terminando" };

for (let property in object)
  console.log(
    `The name of the property is "${property}" and his value is: "${object[property]}"`
  ); // a , b ,c

try {
  for (let property of object)
    console.log(
      `The name of the property is "${property}" and his value is: "${object[property]}"`
    ); // a , b ,c
} catch (e) {
  console.log("The error is 'cause it can not read let property of object");
} finally {
  console.log("Siguiente prueba");
}
