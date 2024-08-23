
<div align="center">
	
# [LearnJS](https://github.com/sanskaarz/LearnJS)

</div>

## Variables
- A variable is a container that stores data in RAM.
- Variable names can start with `$`, `_`, or a letter but not a number.
- `Harry` is not equal to `harry`.

### Types of Scopes
1. `let`
2. `var`
3. `const`

- `let`: Initialization is optional.
- `const`: Initialization is required.
- `var`: Initialization is optional.

<div align="center">

|       | Block Scoped | Hoisting | Reassignment | Initialization |
|-------|---------------|----------|--------------|----------------|
| `let` | Yes           | No       | Yes          | Optional       |
| `var` | No            | Yes      | Yes          | Optional       |
| `const`| Yes          | No       | No           | Required       |

</div>

## Primitive Data Types
1. `null`
2. `number`
3. `symbol`
4. `string`
5. `boolean`
6. `bigint`
7. `undefined`

### Examples:
```javascript
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a symbol");
let g;
```

### Type of a Variable
```javascript
console.log(typeof a); // Output: object
```

## Objects
Objects in JavaScript are similar to dictionaries in Python (key-value pairs).

### Accessing Object Values
1. `objectname.key`
2. `objectname["Keyname"]`

## Operators

### Arithmetic Operators
- `+`, `-`, `*`, `**`, `/`, `%`, `++`, `--`

### Assignment Operators
- `=`, `+=`, `-=`, `/=`, `%=`, `*=`, `**=`

---

| Operator | Name                        | Description                                                                 | Example                 | Equivalent to           | Result                  |
|----------|-----------------------------|-----------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|
| `=`      | Assignment                  | Assigns a value to a variable.                                              | `x = 5`                 | —                       | `x = 5`                 |
| `+=`     | Addition Assignment         | Adds the right operand to the left operand and assigns the result to the left operand. | `x += 3`                | `x = x + 3`             | `x` becomes `8`         |
| `-=`     | Subtraction Assignment      | Subtracts the right operand from the left operand and assigns the result to the left operand. | `x -= 2`                | `x = x - 2`             | `x` becomes `6`         |
| `*=`     | Multiplication Assignment   | Multiplies the left operand by the right operand and assigns the result to the left operand. | `x *= 4`                | `x = x * 4`             | `x` becomes `20`        |
| `/=`     | Division Assignment         | Divides the left operand by the right operand and assigns the result to the left operand. | `x /= 5`                | `x = x / 5`             | `x` becomes `4`         |
| `%=`     | Modulus Assignment          | Takes the modulus using the two operands and assigns the result to the left operand. | `x %= 3`                | `x = x % 3`             | `x` becomes `1`         |
| `**=`    | Exponentiation Assignment   | Raises the left operand to the power of the right operand and assigns the result to the left operand. | `x **= 2`               | `x = x ** 2`            | `x` becomes `16`        |

---

### Notes:

- **Assignment (`=`)**: Simply assigns the right-hand value to the left-hand variable.
- **Addition Assignment (`+=`)**: Adds the value of the right-hand operand to the left-hand operand and assigns the result to the left-hand operand.
- **Subtraction Assignment (`-=`)**: Subtracts the right-hand operand from the left-hand operand and assigns the result to the left-hand operand.
- **Multiplication Assignment (`*=`)**: Multiplies the left-hand operand by the right-hand operand and assigns the result to the left-hand operand.
- **Division Assignment (`/=`)**: Divides the left-hand operand by the right-hand operand and assigns the result to the left-hand operand.
- **Modulus Assignment (`%=`)**: Takes the modulus using the left-hand operand and the right-hand operand and assigns the result to the left-hand operand.
- **Exponentiation Assignment (`**=`)**: Raises the left-hand operand to the power of the right-hand operand and assigns the result to the left-hand operand.

---
### Comparison Operators
- `==`: Equal to (does not check the type).
- `!=`: Not equal to (does not check the type).
- `===`: Equal value and equal type.
- `!==`: Not equal value and not equal type.
- `>`, `<`, `>=`, `<=`

### Logical Operators
- `&&`: Logical AND
- `||`: Logical OR
- `!`: Logical NOT

## Comments in JavaScript
```javascript
// Single line comment

/* 
   Multi-line comment 
*/
```

## Conditional Statements
1. **if-else**
   ```javascript
   if (condition) {
       // code to be executed if condition is true
   } else {
       // code to be executed if condition is false
   }
   ```

2. **Nested if-else**
   ```javascript
   if (condition1) {
       // code to be executed if condition1 is true
   } else if (condition2) {
       // code to be executed if condition2 is true
   } else {
       // code to be executed if both conditions are false
   }
   ```

3. **Ternary Operator**
   ```javascript
   condition ? expression1 : expression2;
   ```

4. **Switch Case**
   ```javascript
   switch (variable) {
       case "1":
           // code to be executed if variable is "1"
           break;
       case "2":
           // code to be executed if variable is "2"
           break;
       default:
           // code to be executed if variable doesn't match any case
   }
   ```

## Output Methods
1. `prompt("output")`: Displays a dialog box with a message and an input field for the user.
2. `alert("output")`: Displays an alert box with a message and an OK button.
3. `console.log("output")`: Prints a message to the browser console for debugging.
4. `console.error("error message")`: Prints an error message to the browser console.
5. `console.warn("warning message")`: Prints a warning message to the browser console.
6. `document.write("output")`: Writes content directly into the HTML document.
7. `document.getElementById("demo").innerHTML = "output"`: Sets the content of an HTML element with the specified id.

## TypeCasting
Typecasting is converting a value from one data type to another. It can be implicit or explicit.

### Examples:
```javascript
let a = "123";
a = Number.parseInt(a); // Convert string to a number
a = parseInt(a); // Convert string to a number
```

## Loops
### 1. for
```javascript
for (initialize; condition; increment) {
  // code to be executed
}
```

### 2. for-in
Iterates over the properties of an object.
```javascript
const dict = {
  water: "pani",
  lens: "chasma",
  bag: "basta",
  mobile: "phone"
};

for (let key in dict) {
  console.log(key); // prints keys
  console.log(dict[key]); // prints values
}
```

### 3. for-of
Iterates over the values of an iterable object.
```javascript
let name = "sanskar";
for (let char of name) {
  console.log(char); // prints each character
}
```

### 4. while
```javascript
while (condition) {
  // code to be executed
}
```

### 5. do-while
```javascript
do {
  // code to be executed
} while (condition);
```

## Functions
Reusable blocks of code that perform specific tasks.

### Function without Parameters
```javascript
function funcName() {
  // code to be executed
}
funcName(); // calling the function
```

### Function with Parameters
```javascript
function myFunc(a, b) {
  return a + b;
}
```

### Arrow Function
```javascript
// Before Arrow Function
funcName = function() {
  return "Hello World!";
}

// After Arrow Function
funcName = () => "Hello World!";
```

## Strings
1. `"Hello my value is " + a` // double quotes
2. `'Hello my value is ' + a` // single quotes
3. ``Hello my value is ${a}`` // backticks (template literals)

### Escape Sequences
- `\n`: New line
- `\t`: Tab
- `\'`: Single quote
- `\"`: Double quote
- `\\`: Backslash

### String Methods
- `strName.charAt(index)` or `strName[index]`: Returns the character at the specified index.
- `strName.charCodeAt(index)`: Returns the Unicode value of the character at the specified index.
- `String.fromCharCode(CharCodeOfString)`: Returns a string from the Unicode value.
- `strName.endsWith("text")`: Checks if the string ends with a specific value.
- `strName.includes("text")`: Checks if the string contains a specific value.
- `strName.indexOf("text")`: Returns the index of the first occurrence of the given string.
- `strName.lastIndexOf("text")`: Returns the index of the last occurrence of the given string.
- `strName.length`: Returns the length of the string.
- `strName.localeCompare("text2")`: Compares two strings and returns -1, 0, or 1.
- `strName.match(/text/)`: Returns the matched string if found.

### Example:
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
console.log(strName.match(/World/)); // Output: ["World"]
```

### Splitting a String into an Array
```javascript
let text = "a,b,c,d,e,f";
let myArray = text.split(",");
console.log(myArray[2]); // Output: "c"
```

## Arrays
- `const array = []`
- `let array = []`

### Array Methods
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
   - Adds one or more elements to the beginning of an array and returns the new length

.
   ```javascript
   let arr = [1, 2, 3, 4];
   arr.unshift(0);
   console.log(arr); // [0, 1, 2, 3, 4]
   ```

5. **`splice()`**
   - Adds/removes elements from an array.
   ```javascript
   let arr = [1, 2, 3, 4];
   arr.splice(2, 1, 10);
   console.log(arr); // [1, 2, 10, 4]
   ```

6. **`slice()`**
   - Returns a shallow copy of a portion of an array.
   ```javascript
   let arr = [1, 2, 3, 4];
   let newArr = arr.slice(1, 3);
   console.log(newArr); // [2, 3]
   ```

7. **`concat()`**
   - Merges two or more arrays.
   ```javascript
   let arr1 = [1, 2];
   let arr2 = [3, 4];
   let newArr = arr1.concat(arr2);
   console.log(newArr); // [1, 2, 3, 4]
   ```

8. **`join()`**
   - Joins all elements of an array into a string.
   ```javascript
   let arr = [1, 2, 3, 4];
   let str = arr.join("-");
   console.log(str); // "1-2-3-4"
   ```

9. **`map()`**
   - Creates a new array with the results of calling a provided function on every element.
   ```javascript
   let arr = [1, 2, 3, 4];
   let newArr = arr.map(x => x * 2);
   console.log(newArr); // [2, 4, 6, 8]
   ```

10. **`filter()`**
    - Creates a new array with all elements that pass the test implemented by the provided function.
    ```javascript
    let arr = [1, 2, 3, 4];
    let newArr = arr.filter(x => x > 2);
    console.log(newArr); // [3, 4]
    ```

11. **`reduce()`**
    - Executes a reducer function on each element, resulting in a single output value.
    ```javascript
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 10
    ```

12. **`sort()`**
    - Sorts the elements of an array.
    ```javascript
    let arr = [4, 2, 3, 1];
    arr.sort();
    console.log(arr); // [1, 2, 3, 4]
    ```

13. **`reverse()`**
    - Reverses the elements in an array.
    ```javascript
    let arr = [1, 2, 3, 4];
    arr.reverse();
    console.log(arr); // [4, 3, 2, 1]
    ```

14. **`find()`**
    - Returns the value of the first element that satisfies the provided testing function.
    ```javascript
    let arr = [1, 2, 3, 4];
    let found = arr.find(x => x > 2);
    console.log(found); // 3
    ```

15. **`findIndex()`**
    - Returns the index of the first element that satisfies the provided testing function.
    ```javascript
    let arr = [1, 2, 3, 4];
    let index = arr.findIndex(x => x > 2);
    console.log(index); // 2
    ```

## Window Object
The window object represents the browser's window. It contains various properties and methods.

### Common Methods
- `alert("Hello, World!");`
- `prompt("Enter your name:");`
- `confirm("Are you sure?");`

### Timer Methods
- `setTimeout(function, milliseconds)`: Executes a function after a specified number of milliseconds.
- `setInterval(function, milliseconds)`: Repeats execution of a function continuously every specified number of milliseconds.

### Example:
```javascript
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

let interval = setInterval(() => {
  console.log("Repeating every 2 seconds");
}, 2000);

// To clear the interval
clearInterval(interval);
```

## DOM Manipulation
The Document Object Model (DOM) allows scripts to update the content, structure, and style of a document.

### Selecting Elements
- `document.getElementById("id")`
- `document.getElementsByClassName("className")`
- `document.getElementsByTagName("tagName")`
- `document.querySelector("selector")`
- `document.querySelectorAll("selector")`

### Modifying Elements
- `element.innerHTML = "New Content"`
- `element.style.property = "value"`
- `element.setAttribute("attribute", "value")`
- `element.classList.add("className")`
- `element.classList.remove("className")`
- `element.classList.toggle("className")`

### Creating and Removing Elements
- `document.createElement("tagName")`
- `element.appendChild(child)`
- `element.removeChild(child)`
- `element.replaceChild(newChild, oldChild)`

### Event Handling
- `element.addEventListener("event", function)`
- `element.removeEventListener("event", function)`

### Example:
```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

let div = document.createElement("div");
div.innerHTML = "Hello, World!";
document.body.appendChild(div);

document.body.removeChild(div);
```

### Adding External JavaScript
Add the following line in your HTML file inside the `<head>` or `<body>` tag:
```html
<script src="filename.js"></script>
```

This concludes the LearnJS summary of fundamental JavaScript concepts and syntax.
