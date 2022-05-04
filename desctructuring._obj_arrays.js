/** @format */

/*
OBJECT;

*/
let payload = { cantante: "Luis" };

const post = "doctor";
payload = { ...payload, post };

console.log(payload); // { post: 'doctor'}

const { cantante } = payload;

console.log(cantante);

/*
ARRAY;

*/

let payload2 = [];

let l1 = [1, 2];
l1 = [...l1, "camaleon"];
console.log("l3", l1);
