// operators in javascript
/* 
 1. unary operator
 2. binary operator
 3. ternary operator 
 4. string concatenation operator
 5. type conversion operator
 6. assignment operator
 7. Decrement and Increment operator
 8. comparison operator
 9. null and undefined comparison
 10. logical operators
 11. comma operator

*/

// unary operator
let a = 10;
a++;
console.log(a); // Output: 11

a--;
console.log(a); // Output: 10

// binary operator +, -, *, /, %, ** 
let b = 5;
let c = 3;
let sum = b + c;
console.log(sum); // Output: 8

// ternary operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: "Yes"

// string concatenation using + operator
let m  = "Hi";
let n = " there!";
let greeting = m + n;
console.log(greeting); // Output: "Hi there!"

// type conversion 
let num = '10';
let numm1 = '20';
//let sum1 = Number(num) + Number(numm1);
let sum1 = +num + +numm1; // using unary plus operator for type conversion
console.log(sum1); // Output: 30

// assignment operator
let x = y = z = 12; // This is a chained assignment. It assigns the value 12 to z, then assigns the value of z to y, and finally assigns the value of y to x.
console.log(x,y,z); // Output: 12 12 12

let p = 5;
p += 10;
console.log(p); // Output: 15

p -= 3;
console.log(p); // Output: 12

p *= 2;
console.log(p);

p /= 4;
console.log(p);

p %= 5;
console.log(p);

p **= 3;
console.log(p); // Output: 8

// decrement and increment operator
let q = 7;
console.log(q++); // Output: 7 (post-increment: returns the value before incrementing)
console.log(q);   // Output: 8 (now q has been incremented)

let r = 7;
console.log(++r); // Output: 8 (pre-increment: increments the value before returning it)
console.log(r);   // Output: 8 (r is already incremented)   

/*
Type conversion operators are used to convert values from one type to another. JavaScript provides several built-in functions for type conversion, such as Number(), String(), and Boolean(). Additionally, the unary plus operator (+) can be used to convert a value to a number.
The type conversion operators are essential for ensuring that values are in the correct format for various operations, such as arithmetic calculations or string concatenation. Understanding how to use these operators effectively can help prevent errors and improve the readability of your code.
*/


let s = 12;
let d = 13;
let f = ++s + d--;
console.log(f); // Output: 26 (s becomes 13, d becomes 12, so 13 + 12 = 25)

// comparison operator
let num1 = 10;
let num2 = 20;  
console.log(num1 > num2); // Output: false
console.log(num1 < num2); // Output: true
console.log(num1 >= num2); // Output: false
console.log(num1 <= num2);      // Output: true
console.log(num1 == num2); // Output: false (loose equality, checks value only)
console.log(num1 === num2); // Output: false (strict equality, checks value and type)
console.log(num1 != num2); // Output: true (loose inequality, checks value only)
console.log(num1 !== num2); // Output: true (strict inequality, checks value and type)  


let k = '0';
k = Boolean(k);
console.log(k); // Output: true
// In JavaScript, any non-empty string is considered truthy, so when the string '0' is converted to a boolean, it evaluates to true.
 let l = 0;
l = Boolean(l);
console.log(l); // Output: false
// In JavaScript, the number 0 is considered falsy, so when it is converted to a boolean, it evaluates to false.

console.log( l == k); // Output: false (loose equality, checks value only)

// null and undefined

console.log(null == undefined); // Output: true (loose equality, null and undefined are considered equal
console.log(null === undefined); // Output: false (strict equality, null and undefined are different type)

console.log(null > 0); // Output: false
console.log(null <= 0); // Output: true
// In JavaScript, null is considered equal to undefined when using loose equality (==), but they are not equal when using strict equality (===) because they are of different types. Additionally, null is treated as 0 in numeric comparisons, which is why null > 0 is false and null <= 0 is true.
console.log(null == 0); // Output: false (loose equality, null is not equal to 0)

console.log(undefined > 0); // Output: false
console.log(undefined <= 0); // Output: false
// In JavaScript, undefined is not equal to any value, including itself, and it is treated as NaN in numeric comparisons. Therefore, any comparison involving undefined will return false, except for loose equality (==) where undefined is only equal to null.
console.log(undefined == 0); // Output: false (loose equality, undefined is not equal to 0)
console.log(Number(undefined)); // Output: NaN (undefined is converted to NaN when using the Number() function)

// logical operators
let x1 = true;
let y1 = false; 
console.log(x1 && y1); // Output: false (logical AND, both operands must be true)
console.log(x1 || y1); // Output: true (logical OR, at least one operand must be true)
console.log(!x1); // Output: false (logical NOT, negates the value of x1
console.log(!y1); // Output: true (logical NOT, negates the value of y1)    

// comma operator
let a1 = 1, b1 = 2, c1 = 3;
let result = (a1 + b1, a1 * c1);
console.log(result); // Output: 3 (the comma operator evaluates both expressions but returns the value of the last one, which is a1 * c1)   
