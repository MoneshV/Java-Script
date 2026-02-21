// Data Types in JavaScript

// 1. Number Data Type
/* In JavaScript, the number data type is used to represent both integer and floating-point numbers. 
 JavaScript uses a double-precision 64-bit binary format to represent numbers, which allows for a wide range of values and precision.

 */

let pi, price;
pi = 3.14, price = 29;
console.log(pi, price);
console.log(typeof pi, typeof price);

//Special numeric values
let inifi = Infinity;
let negInfi = -Infinity;
let notANumber = NaN;
notANumber = NaN ** 0;
console.log(inifi, '\n', negInfi, '\n', notANumber);
console.log(typeof inifi, typeof negInfi, typeof notANumber);

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log(0/0); // NaN

//2. BigInt Data Type
/* The BigInt data type in JavaScript is used to represent integers that are larger than the maximum safe integer limit for the Number data type (which is 2^53 - 1). 
 BigInt allows you to work with arbitrarily large integers without losing precision. 
 You can create a BigInt by appending 'n' to the end of an integer literal or by using the BigInt constructor.
*/

let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt1 + 1n , bigInt2 + 4n);
console.log(typeof bigInt1, typeof bigInt2);

//3. String Data Type
/* The string data type in JavaScript is used to represent textual data. 
 A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). 
 Strings can contain letters, numbers, symbols, and whitespace characters. 
 JavaScript provides various methods for manipulating strings, such as concatenation, slicing, and searching.
*/

let intro = "Hello, my name is John.";
console.log(intro);
console.log(typeof intro);

let greeting = "Hi there!  Welcome to demi's world.";
console.log(greeting);

let characters = `This is a string that can span multiple lines.
It can also include "special" characters like \n for 'new lines' and \t for tabs.`;
console.log(characters);

let solve = `The result of 2 + 3 is ${2 + 3}.`; // use ${} to embed expressions in a string
console.log(solve);

let char = 'A';
console.log(char);
console.log(typeof char);

let name = "Demi";
let fullname = `My name is ${name}.`;
console.log(fullname);