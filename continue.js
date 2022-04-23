/** @format */

// The type of declartion is "let" and hist identifier is "i"
//  there is three kind of declarations var , let , const
// the indentifier must start with a letter,   _ , $ , subsequent character can also be digits (0-9)
let i = 0;
let n = 0;

while (i < 5) {
  i++;
  if (i == 3) continue;
  console.log(`the value of the identifier "i" is ${i}`);
  n += i;
  console.log(
    `the value of the "n" indetifier of the "let" declaration is: ${n}`
  );
}
