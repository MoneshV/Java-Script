// Miscellaneous Data Types in JavaScript

//1. Boolean Data Type
/* The boolean data type in JavaScript represents a logical entity that can have one of two values: true or false. 
 Booleans are often used in conditional statements and loops to control the flow of a program based on certain conditions.
*/

let isJavaScriptFun = true;
let isRaining = false;
console.log(isJavaScriptFun, isRaining);
console.log(typeof isJavaScriptFun, typeof isRaining);

//2. Null Data Type
/* The null data type in JavaScript represents the intentional absence of any object value. 
 It is a primitive value that can be assigned to a variable to indicate that it has no value or that it is empty.
*/

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue); // typeof null returns "object" due to a historical bug in JavaScript

//3. Undefined Data Type
/* The undefined data type in JavaScript represents a variable that has been declared but has not been assigned a value. 
 It is also the default return value of functions that do not explicitly return anything.
*/

let uninitializedVariable;
console.log(uninitializedVariable);
console.log(typeof uninitializedVariable);

//4. Symbol Data Type
/* The symbol data type in JavaScript is a unique and immutable primitive value that can be used as an identifier for object properties. 
 Each symbol is guaranteed to be unique, even if they have the same description. 
 Symbols are often used to create private properties or to avoid name collisions in objects.
*/

let symbol1 = Symbol("description");
let symbol2 = Symbol("description");
console.log(symbol1, symbol2);
console.log(symbol1 === symbol2);
console.log(typeof symbol1, typeof symbol2);

//5. Object Data Type
/* The object data type in JavaScript is a complex data structure that allows you to store collections of data and more complex entities. 
 Objects are created using curly braces {} and can contain properties (key-value pairs) and methods (functions that operate on the object).
*/

let person = {
    name: "Alice",
    age: 30,
};
console.log(person);
console.log(typeof person);