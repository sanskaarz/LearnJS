<div align="center">
	
# [LearnJS](https://github.com/sanskaarz/LearnJS)

</div>

# JavaScript Learning Roadmap
Welcome to the JavaScript Learning Roadmap! This guide will help you master JavaScript, from the basics to advanced concepts. Follow the steps below to enhance your JavaScript skills.

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Basics](#javascript-basics)
3. [Control Structures and Loops](#control-structures-and-loops)
4. [Functions and Scope](#functions-and-scope)
5. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
6. [Asynchronous JavaScript](#asynchronous-javascript)
7. [JavaScript in the Browser](#javascript-in-the-browser)
8. [Advanced JavaScript Concepts](#advanced-javascript-concepts)
9. [JavaScript Ecosystem and Tools](#javascript-ecosystem-and-tools)
10. [Projects and Practice](#projects-and-practice)

---

## Introduction to JavaScript

- What is JavaScript?
- History and Evolution of JavaScript
- JavaScript in Modern Web Development
- Setting Up Your Development Environment

## JavaScript Basics

- **Variables**: `let`, `const`, and `var`
- **Data Types**: Strings, Numbers, Booleans, Null, Undefined, Objects, Symbols
- **Operators**: Arithmetic, Assignment, Comparison, Logical, Conditional (Ternary)
- **Type Coercion and Conversion**

## Control Structures and Loops

- **Control Structures**: `if`, `else if`, `else`, `switch`
- **Loops**: `for`, `while`, `do...while`
- **Break and Continue**: Controlling Loop Flow

## Functions and Scope

- **Function Declarations and Expressions**
- **Arrow Functions**
- **Parameters and Arguments**
- **Default Parameters**
- **Rest and Spread Operators**
- **Closures**
- **Scopes**: Global, Local, Block

## Object-Oriented Programming (OOP)

- **Objects**: Creation, Properties, and Methods
- **Prototypes and Inheritance**
- **Classes**: Syntax, Constructors, and Inheritance
- **Encapsulation and Modules**

## Asynchronous JavaScript

- **Callbacks**
- **Promises**: Creating, Chaining, and Error Handling
- **Async/Await**: Writing Clean Asynchronous Code
- **Event Loop and Concurrency Model**

## JavaScript in the Browser

- **DOM Manipulation**: Selecting and Modifying Elements
- **Event Handling**: Listening and Responding to Events
- **Web APIs**: Fetch API, Local Storage, and More
- **Understanding Browser Compatibility and Polyfills**

## Advanced JavaScript Concepts

- **Error Handling**: `try`, `catch`, `finally`, and Throwing Errors
- **Regular Expressions**: Patterns and Usage
- **JavaScript Engine and Runtime**: V8, Chakra, SpiderMonkey, etc.
- **Memory Management and Performance Optimization**
- **Security in JavaScript**: XSS, CSRF, and Best Practices

## JavaScript Ecosystem and Tools

- **Package Managers**: npm, Yarn
- **Module Bundlers**: Webpack, Parcel, Rollup
- **Transpilers**: Babel and TypeScript
- **Linters and Formatters**: ESLint, Prettier
- **Testing Frameworks**: Jest, Mocha, Chai
- **Build Tools and Automation**: Gulp, Grunt

## Projects and Practice

- **Beginner Projects**: Calculator, To-Do List, Tic-Tac-Toe
- **Intermediate Projects**: Weather App, Movie Database, Quiz App
- **Advanced Projects**: E-commerce Website, Social Media Dashboard, Real-Time Chat Application
- **Contributing to Open Source Projects**
- **Code Challenges and Online Platforms**: LeetCode, Codewars, HackerRank

---

Feel free to modify and add more details to each section as you progress through your JavaScript journey. Happy coding!

---

### Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

This roadmap gives a structured pathway to learning JavaScript, starting from the basics and advancing to more complex topics, with plenty of practice and project opportunities along the way.

-------------------------------------------------------------
<div align="center">
	
# [Let's get started](https://github.com/sanskaarz/LearnJS)

</div>

## Variables
- variable is a container = stores in  RAM
- variable names can start with $ or _ or letter ..... not number
- Harry !=(not equal) harry

- Types of Scopes
  1. `let`
  2. `var`
  3. `const`

  - `let` = initialization is optional
  - `cont` = initialization is Required
  - `var` = initialization is optional 

<div align="center">

|	  |   Block scoped |	Hoisting	|    Reassignment	  |    Initialization |
|---|---|---|---|---|
`let`	  |  Yes	  |          No	    |    Yes	   |         Optional |
`var`	  |  No	    |        Yes     |	  Yes	      |      Optional |
`const`	 | Yes	  |          No	   |     No	      |      Required |

</div>

# Primitive DataTypes
# Primitive DataTypes
  1. null
  2. number
  3. symbol
  4. string
  5. boolean
  6. bigint
  7. undefined
- Examles :-
  - let a = null;
  - let b = 345;
  - let c = true; // can also be false
  - let d = BigInt("567") + BigInt("3")
  - let e = "Harry"
  - let f = Symbol("I am a symbol")
  - let g;

`var x = null;`
 > null = kuch to hai

`var y; `
> undefined =  kuch nai hai , Hona/Na hona Barabar hai


`console.log(typeof x);` = Give the type of variable

# Objects   <!--(These are same as Dictionary in Python) Key : Value Pairs-->
- To access value from it we can use :
1. objectname.key
2. objectname["Keyname"]
# Arithmetic Operators
 - `+`
 - `-`
 - `*`
 - `**`
 - `/`
 - `%`
 - `++`
 - `--`

 # Assignment Opeartors
 - `=`
 - `+=`
 - `-=`
 - `/=`
 - `%=`
 - `*=`
 - `**=`

 # Comparision Operators
- `=` Assigns a value to variable              // Assignment Operator 
- `==` Equal to (does not checks the typeof variables)
- `!=` Not Equal to (does not checks the typeof variables)
- `===` Equal value & Equal DataType
- `!==` Not Equal to & Not Equal Type
  1. `\>`
  2. `<`
  3. `\>=`
  4. `<=`

# Logical Operators
- `&&`  Logical and 
- `||`  Logical or
- `!`   Logical not

# Comments in JS
```
 // Singel line comment
 ```
 ```
 /* Multiline Comment */
```

# Conditional Statements
1. if-else
```js 
if(condition){

}
else (condition){

}
```
2. Nested if-else
```js
if(condition){

}
else if (condition){

}
else{

}
```
3. Ternary Operator
 ```js
 condition? expression1:expression2;
```
4. Switch Case
```js
switch(var){
    case "1":
    result;
    break

    case "2":
    result;
    break

    case "3":
    result;
    break
}
```

#  The different methods for outputting messages in JavaScript
#### Code Output Methods

1. `prompt("output")`: Displays a dialog box with a message and an input field for the user to enter a response.
2. `alert("output")`: Displays an alert box with a message and an OK button.
3. `console.log("output")`: Prints a message to the browser console for debugging purposes.
4. `console.error("error message")`: Prints an error message to the browser console.
5. `console.warn("warning message")`: Prints a warning message to the browser console.
6. `document.write("output")`: Writes the specified content directly into the HTML document.
7. `document.getElementById("demo") = "output"`: Sets the content of an HTML element with the specified id to the given output.

Please note that the `prompt()` and `alert()` methods are used to display messages to the user, while the `console.log()`, `console.error()`, and `console.warn()` methods are used for debugging purposes and display messages in the browser console.


# TypeCasting
- convert from one type to the other <!-- This part requires research on implicit and explicit typecasting-->
> Typecasting is the process of converting a value from one data type to another in programming. It can be implicit or explicit, depending on whether it is done automatically or manually by the programmer.
```js
a = Number.parseInt(a); // Convert string to a number
a = parseInt(a); // Convert string to a number    
```

# Loops
### 1. for
```js
for(initialize; condition ; increment){
  //code to be executed
}
```

### 2. for in
- Iterates/Works over the values of an object
- Loop running count = Number of elements in the object
- Example:-
```js
const dict = {
  water : "pani",
  lens :"Chasma",
  bag : "BAsta",
  mobile : "Phone"
};
```
<!-- (let anyword in dict) = It stores all the values of dict in anyword -->

1. To print all the keys of elements of object
  ```js
  for (let anyword in dict){
    console.log(anyword);
  }
  ```

  2. To print all the values of elements of object
  - Example 1 :
  ```js
  for (let anyword in dict){
    console.log(dict[anyword]);
  }
  ```

  - Example 2 :-
  ```js
  let name = "sanskar";
    for(let a in name){
      console.log(name[a])
    }
  ```
  - output:- 
  ```
  s
  a
  n
  s
  k
  a
  r
  ```

### 3. for of
- Iterates/Works over the values of an iterable object
- Example 1:
```js
let name = "sanskar";
  for(let a of name){
    console.log(a)
  }
```

- Output:- 
``` 
s
a
n
s
k
a
r
```
- Example2:-
```js
  let name = ["s","a","n","s","k","a","r"]
  for(let i of name){
    console.log(i)
  }
```

### 4. while
```js
while(condition){
    // code to be executed
}

```
### 5. do while
```js 
  do{
      //code to be executed
  }while(condition);
```

# Function                                      
- Reusable block of code that performs Specific tasks
- Return Statement is only needed only if you want to print/use the value of variable outside function.
     
1. Function without parameters
```js
function funcName(){
    // code to be executed
}
funcName() //calling the function to use it
```
2. Function with parameters
```js
function myFunc(a,b){
    // code to be executed having the use of parameters
}
```

- Example:-
```js
function myFunc(x, y) {
  return (x + y);
}
```

### Arrow Function
* Before Arrow Function
```js
funcName = function() {
  return "Hello World!";
}
```
* After Arrow Function
```js
funcName = () => {
  return "Hello World!";
}
```
* Arrow Functions Return Value by Default &nbsp; // This works only when function has only one statement 
```js
funcName = () => "Hello World!";
```

# Strings
1. "Hello my value is " + a    //double quotes
2. 'Hello my value is ' + a   //Single Quotes 
3. \`Hello my value is ${a}`    //Backticks     
    //Template Literals = We can add variables to strings using template literals  
4. Escape Sequences (length of these are 1 in total)
   - "Hello\nWorld"               //   \n = creates a new line
   - "Hello\tWorld"               //   \t = creates a tab
   - "Hello\'World"               //   \' = creates a single quote 
   - "Hello\"World"               //   \" = creates a double quote 
   - "Hello\\World"               //   \\ = creates a double quote 

# [String Methods](https://www.w3schools.com/jsref/jsref_obj_string.asp)


- `strName.charAt(index)` or `strName[index]`: Returns the character at the specified index.
- `strName.charCodeAt(index)`: Returns the Unicode value of the character at the specified index.
- `String.fromCharCode(CharCodeOfString)`: Returns a string from the Unicode value.
- `strName.endsWith("")`: Checks if the string ends with a specific value.
- `strName.includes("")`: Checks if the string contains a specific value.
- `strName.indexOf("")`: Returns the index of the first occurrence of the given string.
- `strName.lastIndexOf("")`: Returns the index of the last occurrence of the given string.
- `strName.length`: Returns the length of the string.
- `strName.localeCompare(text2)`: Compares two strings and returns -1, 0, or 1.
- `strName.match(/string/)`: Returns the matched string if found.

For example:
```javascript
let strName = "Hello World";
console.log(strName.charAt(4)); // Output: "o"
console.log(strName.charCodeAt(6)); // Output: 87
console.log(String.fromCharCode(72)); // Output: "H"
console.log(strName.endsWith("World")); // Output: true
console.log(strName.includes("lo")); // Output: true
console.log(strName.indexOf("o")); // Output: 4
console.log(strName.lastIndexOf("o")); // Output: 7
console.log(strName.length); // Output: 11
console.log(strName.localeCompare("Hello")); // Output: 1
console.log(strName.match(/World/)); // Output: "World"
```


- Example:-
  ```js
    let text = "a,b,c,d,e,f";
    let myArray = text.split(",");
    console.log(myArray[2])
  ```
- Gives:-
  ```
  c
  ```

# Arrays      DataType = objects
- `const array = []`
- `let array = []`


# Array Methods


1. **`push()`**
   - Adds one or more elements to the end of an array and returns the new length.
   ```javascript
   let arr = [1, 2, 3];
   arr.push(4);
   console.log(arr); // [1, 2, 3, 4]
   ```

2. **`pop()`**
   - Removes the last element from an array and returns that element.
   ```javascript
   let arr = [1, 2, 3, 4];
   arr.pop();
   console.log(arr); // [1, 2, 3]
   ```

3. **`shift()`**
   - Removes the first element from an array and returns that element.
   ```javascript
   let arr = [1, 2, 3, 4];
   arr.shift();
   console.log(arr); // [2, 3, 4]
   ```

4. **`unshift()`**
   - Adds one or more elements to the beginning of an array and returns the new length.
   ```javascript
   let arr = [2, 3, 4];
   arr.unshift(1);
   console.log(arr); // [1, 2, 3, 4]
   ```

5. **`map()`**
   - Creates a new array populated with the results of calling a provided function on every element in the calling array.
   ```javascript
   let arr = [1, 2, 3, 4];
   let doubled = arr.map(x => x * 2);
   console.log(doubled); // [2, 4, 6, 8]
   ```

6. **`filter()`**
   - Creates a new array with all elements that pass the test implemented by the provided function.
   ```javascript
   let arr = [1, 2, 3, 4];
   let even = arr.filter(x => x % 2 === 0);
   console.log(even); // [2, 4]
   ```

7. **`reduce()`**
   - Executes a reducer function on each element of the array, resulting in a single output value.
   ```javascript
   let arr = [1, 2, 3, 4];
   let sum = arr.reduce((acc, x) => acc + x, 0);
   console.log(sum); // 10
   ```

8. **`forEach()`**
   - Executes a provided function once for each array element.
   ```javascript
   let arr = [1, 2, 3, 4];
   arr.forEach(x => console.log(x * 2)); // 2, 4, 6, 8
   ```

9. **`find()`**
   - Returns the value of the first element in the provided array that satisfies the provided testing function.
   ```javascript
   let arr = [1, 2, 3, 4];
   let found = arr.find(x => x > 2);
   console.log(found); // 3
   ```

10. **`findIndex()`**
    - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
    ```javascript
    let arr = [1, 2, 3, 4];
    let index = arr.findIndex(x => x > 2);
    console.log(index); // 2
    ```

11. **`slice()`**
    - Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).
    ```javascript
    let arr = [1, 2, 3, 4];
    let sliced = arr.slice(1, 3);
    console.log(sliced); // [2, 3]
    ```

12. **`splice()`**
    - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    ```javascript
    let arr = [1, 2, 3, 4];
    arr.splice(1, 2, 'a', 'b');
    console.log(arr); // [1, 'a', 'b', 4]
    ```

13. **`concat()`**
    - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    ```javascript
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let combined = arr1.concat(arr2);
    console.log(combined); // [1, 2, 3, 4]
    ```

14. **`join()`**
    - Joins all elements of an array into a string and returns this string.
    ```javascript
    let arr = [1, 2, 3, 4];
    let joined = arr.join('-');
    console.log(joined); // "1-2-3-4"
    ```

15. **`reverse()`**
    - Reverses the order of the elements in an array in place.
    ```javascript
    let arr = [1, 2, 3, 4];
    arr.reverse();
    console.log(arr); // [4, 3, 2, 1]
    ```

16. **`sort()`**
    - Sorts the elements of an array in place and returns the array. The default sort order is ascending.
    ```javascript
    let arr = [3, 1, 4, 2];
    arr.sort();
    console.log(arr); // [1, 2, 3, 4]
    ```

17. **`some()`**
    - Tests whether at least one element in the array passes the test implemented by the provided function.
    ```javascript
    let arr = [1, 2, 3, 4];
    let hasEven = arr.some(x => x % 2 === 0);
    console.log(hasEven); // true
    ```

18. **`every()`**
    - Tests whether all elements in the array pass the test implemented by the provided function.
    ```javascript
    let arr = [1, 2, 3, 4];
    let allEven = arr.every(x => x % 2 === 0);
    console.log(allEven); // false
    ```

19. **`includes()`**
    - Determines whether an array includes a certain value among its entries, returning true or false.
    ```javascript
    let arr = [1, 2, 3, 4];
    let containsTwo = arr.includes(2);
    console.log(containsTwo); // true
    ```

20. **`flat()`**
    - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    ```javascript
    let arr = [1, [2, [3, 4]], 5];
    let flattened = arr.flat(2);
    console.log(flattened); // [1, 2, 3, 4, 5]
    ```


# Array Sorting

### 1. `Array.sort()`
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings and comparing their sequences of UTF-16 code units values.

**Example:**
```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log(numbers);
```
**Output:**
```
[1, 1, 3, 4, 5, 9]
```

### 2. `Array.reverse()`
Reverses the elements of the array in place. The first array element becomes the last, and the last array element becomes the first.

**Example:**
```javascript
let fruits = ['banana', 'apple', 'cherry'];
fruits.reverse();
console.log(fruits);
```
**Output:**
```
['cherry', 'apple', 'banana']
```

### 3. `Array.sort(compareFunction)`
Sorts the elements of an array using a custom compare function. The compare function determines the sort order.

**Example:**
```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);  // Ascending order
console.log(numbers);
```
**Output:**
```
[1, 1, 3, 4, 5, 9]
```

### 4. `Array.sort().reverse()`
Combines sorting and reversing to sort the array in descending order.

**Example:**
```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort().reverse();
console.log(numbers);
```
**Output:**
```
[9, 5, 4, 3, 1, 1]
```

### 5. `Array.prototype.map().sort()`
Sorts the elements based on a property of the objects within the array.

**Example:**
```javascript
let items = [
    { name: 'apple', price: 2 },
    { name: 'banana', price: 1 },
    { name: 'cherry', price: 3 }
];
items.sort((a, b) => a.price - b.price);
console.log(items);
```
**Output:**
```
[{ name: 'banana', price: 1 }, { name: 'apple', price: 2 }, { name: 'cherry', price: 3 }]
```

### 6. `Array.prototype.sort((a, b) => b - a)`
Sorts the elements of an array in descending numerical order.

**Example:**
```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => b - a);  // Descending order
console.log(numbers);
```
**Output:**
```
[9, 5, 4, 3, 1, 1]
```

### 7. `Array.from()`
Creates a new array instance from an array-like or iterable object. Not a sorting method per se, but useful for creating arrays to sort.

**Example:**
```javascript
let set = new Set([3, 1, 4, 1, 5, 9]);
let arrayFromSet = Array.from(set).sort();
console.log(arrayFromSet);
```
**Output:**
```
[1, 3, 4, 5, 9]
```

