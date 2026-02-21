// Variables in javascript
// A variable is a container for storing data values. In JavaScript, you can declare a variable using the var, let, or const keyword. The choice of keyword depends on the scope and mutability of the variable.

// let: The let keyword is used to declare a block-scoped variable. It can be reassigned but cannot be redeclared within the same scope.
let bookname;

// variable initialization
bookname = "Harry Potter and the Sorcerer's Stone";
console.log(bookname);

// combining declaration and initialization
let author = "J.K. Rowling";
console.log(author);

// using one let statement to declare multiple variables
let firstName = "John", lastName = "Doe", age = 30;
console.log(firstName);
console.log(lastName);
console.log(age);

// using let statement to declare variables without initialization
let city, country;
city = "New York";
country = "USA";
console.log(city);
console.log(country);

// let variables can be reassigned
let score = 100;
console.log(score);
score = 150;
console.log(score);

// let variable using multiple lines
let x = 10,
    y = 20,
    z = 30;
console.log(x);
console.log(y);
console.log(z);

/* 
    Rules for naming variables in JavaScript:
1. Variable names must begin with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
2. Variable names can contain letters, digits (0-9), underscores, and dollar signs.
3. Variable names cannot contain spaces.
4. Variable names are case-sensitive (e.g., myVariable and myvariable are different).
5. Variable names cannot be reserved keywords in JavaScript (e.g., var, let, const, if, else, etc.).

*/