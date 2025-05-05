let a = 10;
let b = 2;

// equal operator
// a = b;            // a = 2, b = 2, in other words a == b
// a += b;           // a = 12, b = 2, in other words a = a + b
// a -= b;           // a = 8, b = 2, in other words a = a - b
// a *= b;           // a = 20, b = 2, in other words a = a * b
// a /= b;           // a = 5, b = 2, in other words a = a / b
// a %= b;           // a = 0, b = 2, in other words a = a % b
// a **= b;          // a = 100, b = 2, in other words a = a ** b

// let s1 = "Greetings";
// let s2 = "Learners";

// let output = `${s1} ${s2}`;
// console.log(output);

// setting a string to lowercase
let s1 = "Greeting";
let s2 = " Students ";
let s3 = 403;

console.log(s1.toLowerCase());

// setting a string to uppercase
console.log(s1.toUpperCase());

// trimming a string
// remove blank spaces around a string
console.log("Hello" + s2.trim() + "FSD");

// converting data into a string
s3 = s3.toString();
console.log(typeof s3);
console.log(s3);

// splitting a string
let str = "Hello world";
let result = str.split(" ");
console.log(result);

// splitting a string by setting a limit (inclusive)
let str2 = "Hello World JS Coders";
let result2 = str2.split(" ", 3);
console.log(result2);

// slicing a string
let str3 = "Hello world";
let result3 = str3.slice(0, 5); // (start index, end index - 1)
console.log(result3);

// concatenating a string
let strA = "Hello World";
let strB = "JS Coders";
let result4 = strA.concat(" ", strB);
console.log(result4);

const prompt = require("prompt-sync")();

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
console.log(`Welcome ${firstName.concat(" ", lastName)}`);

// capture part of a string using substring()
let fullStr = "JavaScript";
let result5 = fullStr.substring(0, 4); // (start index, end index - 1)
console.log(result5);
