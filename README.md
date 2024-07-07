
<div align="center">
	
# [LearnJS](https://github.com/sanskaarz/LearnJS)

</div>

## Variables
- variable is a container = stores in  RAM
- variable names can start with $ or _ or letter ..... not number
- Harry !=(not equal) harry

- Types of Scopes
  1. let
  2. var
  3. const

  - let = initialization is optional
  - cont = initialization is Required
  - var = initialization is optional 

<div align="center">

|	  |   Block scoped |	Hoisting	|    Reassignment	  |    Initialization |
|---|---|---|---|---|
let	  |  Yes	  |          No	    |    Yes	   |         Optional |
var	  |  No	    |        Yes     |	  Yes	      |      Optional |
const	 | Yes	  |          No	   |     No	      |      Required |

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

var x = null; null = kuch to hai
var y; undefined =  kuch nai hai , Hona/Na hona Barabar hai


console.log(typeof x); = Give the type of variable

# Objects   <!--(These are same as Dictionary in Python) Key : Value Pairs-->
- To access value from it we can use :
1. objectname.key
2. objectname["Keyname"]
# Arithmetic Operators
 - \+
 - \-
 - \*
 - **
 - /
 - %
 - ++
 - \--

 # Assignment Opeartors
 - =
 - +=
 - -=
 - /=
 - %=
 - *=
 - **=

 # Comparision Operators
- = Assigns a value to variable              // Assignment Operator 
- == Equal to (does not checks the typeof variables)
- != Not Equal to (does not checks the typeof variables)
- === Equal value & Equal DataType
- !== Not Equal to & Not Equal Type
  1. \>
  2. <
  3. \>=
  4. <=

# Logical Operators
- &&  Logical and 
- ||  Logical or
- !   Logical not

# Comments in JS
- // Singel line comment
- /* Multiline Comment */

# Conditional Statements
1. if
```js 
if(condition){

}
else (condition){

}
```
2. Nested ifs
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

# To print in JS
1. prompt("output")                                             // Take input from user in prompt (In Launching)
2. alert("output")                                              // Show Alert box (In Launching)
3. console.log("output")                                        // Print output in console
4. console.error("error message")                               // Print an error message in console
5. console.warn("warning message")                              // Print an warning message in console
6. document.write("output")                                     // Print output in Main page
7. document.getElementById("demo") = "output"                   // Return output to HTML


# TypeCasting
- convert from one type to the other <!-- This part requires research on implicit and explicit typecasting-->
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
  - Gives:- 
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

- Gives:- 
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
1. strName.at(index) OR strName[index]                  // Return index charctor from string 
2. strName.charAt(index)                             // returns the character at a given index // Better option
3. strName.charCodeAt(index)                         // returns the unicode of character at a given index
4. strName.fromCharCode(CharCodeOfString);           // returns the string from unicode of character
5. strName.endsWith("")            //  check weather the string ends with specific value
6. strName.includes("")            //  check weather the string contain any specific value
7. strName.indexOf()                //  returns the index of first occurrence the given string
* Example
  * strName.indexOf("s")
  - strName.indexOf("s" , 6)        // Start searching string from 6th index
8. strName.lastIndexOf()            // returns the index of last occurrence the given string
9. strName.length()                  // To get the length of the string
10. strName.localeCompare(text2);     // Compare two strings - Returns -1 , 0 , 1
11. strName.match(/string/)           // If given string found then it returns the string

* Example
```js
  let strName = "The rain in SPAIN stays mainly in the plain";
  - console.log(strName.match(/ain/))              
    //- Gives = ["ain"]
  - console.log(strName.match(/ain/g))           //Search globally + Case sensitive
    //- Gives = ["ain", "ain", "ain"]
  - console.log(strName.match(/ain/gi))          //Search globally + Case in-sensitive
    //- Gives = ["ain", "AIN", "ain", "ain"]
```

1. strName.padEnd(l, x)
  - l = length of desired string
  - x = string to be added to incerease length

1. strName.padStart(l, x)

2. strName.toUpperCase()
3. strName.toLowerCase()
4. strName.slice()                     // Extracts a part of a string and returns the extracted part - accepts negative indices
    slice counts the blanks/spaces but not print them
  Examples:-
  1. strName.slice("Starting index , "End.index");
  2. strName.slice(7, 13);
  3. strName.slice(7);               // extract the whole string from 7 to end
  4. strName.slice(-7);              // extract the whole string from 7(from end) to starting
  5. strName.slice(-7 , -13);        // extract the whole string from 7(from end) to 13(from end)
  helloji its me("hello its me Devil over here )
So , todays tasks areee......ae tu ja reee


5. strName.substr("Starting index , string.length)   // Extracts a part of a string and returns the extracted part
6. strName.substring(Starting index","End Index")    // Extracts a part of a string and returns the extracted part - not accepts negative indices
7. strName.replace("old string", "new string")
8. strName.replaceAll("old string", "new string")
9. strName.concat();
10. 
  Examples:-
  let strName = "sans";
  let strName2 = "kar";
  1. console.log(strName.concat(strName2));
  2. console.log(strName.concat("kar"));
  3. console.log(strName.concat(strName2 , "is hot"));
                  **OR**
  3. console.log(strName + strName2 + " is a cool guy");
10. strName.trim()                  //  removes whitespace from both sides of a string
11. strName.trimStart()             //  removes whitespace from Start of a string
12. strName.trimEnd()               //  removes whitespace from End of a string
14. strName.startsWith("")          //  check weather the string starts with specific value
16. strName.split("separator");     //  String converted into Array, the separator is omitted
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
- const array = []
- let array = []


# Array Methods
1. arrName.length
2. arrName.toString()                      // Convert to string
3. arrName.join()                          // Merge array items by Adding value in middle , converts Array to String 
- Example:-
  ```js
  arrName = ["aa" , "bb" , 7]
  arrName.join("-") //= Gives :- aa-bb-7
  arrName.join("8") //= Gives :- aa8bb87
  ```
4. arrName.push()                          // Insert new element to array (at the end),Returns the length of the array.
- Example:-
```js
  arrName = ["aa" , "bb" , 7]
  arrName.push("cc")

  Gives:- ['aa', 'bb', 7, 'cc']
  ```
5. arrName.pop()                           // Removes last element of array, Returns the removed element
- Example:-   
  1. Bad way
  ```js
  let arr = ["yogesh" , "nitin"]
  let pushed = console.log(arr.push("snskr"))     // 3
  console.log(pushed)                             // undefined
  let popped = console.log(arr.pop())             // snskr
  console.log(popped)                             // undefined
  ```

  2. Good Way
  ```js
  let arr = ["yogesh" , "nitin"]
  let pushed = arr.push("snskr")
  console.log(pushed)                             // 3
  let popped = arr.pop()
  console.log(popped)                             // snskr
  ```
6. arrName.shift()                         // removes first element of array, returns the removed element 
7. arrName.unshift()                       // add a new elemnt to array (at the beginning), returns the new array length
  - Example:-
  ```js
  arrName = ["aa" , "bb" , 7]
  arrName.unshift("cc")
  helllo ji its me sanskar gupta 
  
  Gives:- [ 'cc', 'aa', 'bb', 7 ]
  ```
8. delete arrName[index of element]        // delete a element from array and makes a empty space there
9. concat()                                 // Merge arrays 
  - Example 1: 
  ```js
    arrName = ["aa" , "bb" , 7]
    arrName1 = ["cc" , 786]
    arrName2 = ["bb" ,"$"]
    let newlist  = arrName.concat(arrName1 , arrName2)
  ```
  - Gives:- ['aa', 'bb', 7, 'cc', 786, 'bb', '$']

  - Example 2: 
  ```js
    arrName = ["aa" , "bb" , 7]
    arrName.concat("niuuu")
  ```
10. arrName.flat()
  - Example:-
    ```js
    arrName = [[1,2],[3,[[[4]]]],[[5],6]]
    ```
  - Gives:- [1, 2, 3, 4, 5, 6]

11. arrName.splice(x , y , "" , "" , "" , ..........)
  - x= index where element to be added, 
  - y= how many elements should be removed,
  - ""= new elements

12. arr.includes()                                       // checks whether the argument element is exist in array or not.
  - Returns, True or False.

# Array Sorting
1. namelist.sort()                                       // sorts an array alphabetically
2. fruits.reverse();                                     // reverse the current array

2. fruits.reverse();                                    // reverse the current array
