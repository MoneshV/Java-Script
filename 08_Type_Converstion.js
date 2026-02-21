// Type Conversion in JavaScript
/* 
Type conversion in JavaScript refers to the process of converting one data type to another. 
JavaScript is a dynamically typed language, which means that variables do not have a fixed type. 
This allows for automatic type conversion in many cases, but it's also important to understand how to manually convert types when needed.
*/

// implicit Type Conversion (Type Coercion)
let num = 10;
let str = "The number is: " + num;
console.log(str); // Output: "The number is: 10"

// explicit Type Conversion (Type Casting)
let strNum = "123";
let numFromStr = Number(strNum);
console.log(numFromStr); // Output: 123
console.log(typeof numFromStr); // Output: "number"    

let isAdult = true;
isAdult = String(isAdult);
console.log(isAdult); // Output: "true"
console.log(typeof isAdult); // Output: "string"

//boolean conversion
let x = 1;

console.log(typeof x , Boolean(x)); // Output: "number" true

x = 0;
console.log(typeof x , Boolean(x)); // Output: "number" false
// In JavaScript, the following values are considered falsy:
// false
// 0 (zero)
// -0 (negative zero)
// NaN (Not a Number)
// null
// undefined

x = 456;
console.log(typeof x , Boolean(x)); // Output: "number" true

x = -456;
console.log(typeof x , Boolean(x)); // Output: "number" true
// In JavaScript, all non-zero numbers (positive and negative) are considered truthy, meaning they will evaluate to true when converted to a boolean.


// string conversion
let num1 = 100;
let str1 = String(num1);
console.log(str1);
console.log(typeof str1); // Output: "string"

let boolValue = false;  
let str2 = String(boolValue);
console.log(str2);
console.log(typeof str2); // Output: "string"

// string conversion becomes empty string if the value is null or undefined 
let nullValue = null;
let str3 = String(nullValue);
console.log(str3);
console.log(typeof str3); // Output: "string"
let undefinedValue = undefined;
let str4 = String(undefinedValue);
console.log(str4);
console.log(typeof str4); // Output: "string"

let  ana = "";
console.log(typeof ana, Boolean(ana)); // Output: "string" false
// In JavaScript, an empty string ("") is considered falsy, meaning it will evaluate to false when converted to a boolean.

