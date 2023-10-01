<div align="center">
	
# [LearnJS](https://github.com/sanskaarz/LearnJS)


</div>


Variables
Types of Scopes
- let
- var
- const


variable is a container = stores in  RAM

variable names can start with $ or _ or letter ..... not number

Harry !=(not equal) harry

- let = initialization is optional
- cont = initialization is Required
- var = initialization is optional 


<div align="center">

|	 |   Block scoped |	Hoisting	|    Reassignment	  |    Initialization |
|---|---|---|---|---|
let	  |  Yes	  |          No	    |    Yes	   |         Optional |
var	  |  No	    |        Yes     |	  Yes	      |      Optional |
const	 | Yes	  |          No	   |     No	      |      Required |

</div>





# 7 Premitive DataTypes

N - null
N - number
S - symbol
S - string
B - boolean
B - bigint
U - undefined

Examles :-

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a symbol")
let g;

var x = null; null = kuch to hai
var y; undefined =  kuch nai hai , Hona/Na hona Barabar hai


console.log(typeof x); = Give the type of variable

# Objects                                      // (These are same as Dictionary in Python) Key : Value Pairs
To access value from it we can use :
1. objectname.key
2. objectname["Keyname"]
# Arithmetic Operators
 +
 -
 *
 **
 /
 %
 ++
 --

 # Assignment Opeartors
 =
 +=
 -=
 /=
 %=
 *=
 **=

 # Comperision Operators

= Assigns a value to variable              // Assignment Operator 
== Equal to (does not checks the typeof variables)
!= Not Equal to (does not checks the typeof variables)
=== Equal value & Equal DataType
!== Not Equal to & Not Equal Type
>
<
>=
<=

# Logical Operators

&&  Logical and 
||  Logical or
!   Logical not

# Comments in JS

//
/* Multiline Comment */

# Conditional Statements

1. if
``` 
if(contition){
}
else (condition){
}
```

2. Nested if
```
if(condition){

}
else if (){

}
else{

}
```
3. Ternary Operator
 ```
 condition? expression1:expression2;
```
4. Switch Case

```
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


TypeCasting
a = Number.parseInt(a); // Convert string to a number
a = parseInt(a); // Convert string to a number                 // Latest


# Loops
### 1. for
for(initialize; condition ; increment){
  //code to be executed
}

### 2. for in
Iterates/Works over the values of an object
Loop running count = Number of elements in the object

    Example:-
    const dict = {
    water : "pani",
    lens :"Chasma",
    bag : "BAsta",
    mobile : "Phone"
  };
  <!-- (let anyword in dict) = It stores all the values of dict in anyword -->

  1. To print all the keys of elements of object

  for (let anyword in dict){
    console.log(anyword);
  }

  2. To print all the values of elements of object

  for (let anyword in dict){
    console.log(dict[anyword]);
  }

  Example 2 :-
  let name = "sanskar";
    for(let a in name){
      console.log(name[a])
    }

  Gives:- 
  s
  a
  n
  s
  k
  a
  r

### 3. for of
Iterates/Works over the values of an iterable object

Example:-
let name = "sanskar";
  for(let a of name){
    console.log(a)
  }

  Gives:- 
  s
  a
  n
  s
  k
  a
  r

  Example2:-
  let name = ["s","a","n","s","k","a","r"]
  for(let i of name){
    console.log(i)
  }

### 4. while
```
while(condition){
    // code to be executed
}
```
### 5. do while
    do{
        //code to be executed
    }while(condition);



# Function                                      // Reusable block of code that performs Specific tasks
    Return Statement is only needed only if you want to print/use the value of variable outside function.
     
1. Function without parameters
function funcName(){
    // code to be executed
}
funcName() //calling the function to use it

2. Function with parameters
function myFunc(a,b){
    // code to be executed having the use of parameters
}

Example:-
function myFunc(x, y) {
  return (x + y);
}

### Arrow Function

* After Arrow Function
```
funcName = function() {
  return "Hello World!";
}
```

* Before Arrow Function
```
funcName = () => {
  return "Hello World!";
}
```
* - Arrow Functions Return Value by Default                // This works only when function has only one statement 
```
funcName = () => "Hello World!";
```

# Strings


1. "Hello my value is " + a    //double quotes
2. 'Hello my value is ' + a   //Single Quotes 
3. `Hello my value is ${a}`    //Backticks     
    //Template Literals = We can add variables to strings using template literals  
4. Escape Sequences (length of these are 1 in total)
   "Hello\nWorld"               //   \n = creates a new line
   "Hello\tWorld"               //   \t = creates a tab
   "Hello\'World"               //   \' = creates a single quote 
   "Hello\"World"               //   \" = creates a double quote 
   "Hello\\World"               //   \\ = creates a double quote 

# [String Methods](https://www.w3schools.com/jsref/jsref_obj_string.asp)

1. strName.at(index) OR strName[index]                  // Return index charctor from string 
6. strName.charAt(index)                             // returns the character at a given index // Better option
6. strName.charCodeAt(index)                         // returns the unicode of character at a given index
6. strName.fromCharCode(CharCodeOfString);           // returns the string from unicode of character

15. strName.endsWith("")            //  check weather the string ends with specific value
13. strName.includes("")            //  check weather the string contain any specific value
1. strName.indexOf()                //  returns the index of first occurrence the given string
* Example
  * strName.indexOf("s")
  - strName.indexOf("s" , 6)        // Start searching string from 6th index
1. strName.lastIndexOf()            // returns the index of last occurrence the given string

1. strName.length()                  // To get the length of the string
1. strName.localeCompare(text2);     // Compare two strings - Returns -1 , 0 , 1
1. strName.match(/string/)           // If given string found then it returns the string

* Example
```
  let strName = "The rain in SPAIN stays mainly in the plain";
  - console.log(strName.match(/ain/))              
    - Gives = ["ain"]
  - console.log(strName.match(/ain/g))           //Search globally + Case sensitive
    - Gives = ["ain", "ain", "ain"]
  - console.log(strName.match(/ain/gi))          //Search globally + Case in-sensitive
    - Gives = ["ain", "AIN", "ain", "ain"]

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

    Example:-
    let text = "a,b,c,d,e,f";
    let myArray = text.split(",");
    console.log(myArray[2])

    Gives:-
    c


# Arrays      DataType = objects

const array = []
let array = []


# Array Methods

1. arrName.length
2. arrName.toString()                      // Convert to string
3. arrName.join()                          // Merge array items by Adding value in middle , converts Array to String 

    Example:-
     arrName = ["aa" , "bb" , 7]
     arrName.join("-") = Gives :- aa-bb-7
     arrName.join("8") = Gives :- aa8bb87

4. arrName.push()                          // Insert new element to array (at the end),Returns the length of the array.

    Example:-
     arrName = ["aa" , "bb" , 7]
     arrName.push("cc")

     Gives:- ['aa', 'bb', 7, 'cc']
5. arrName.pop()                           // Removes last element of array, Returns the removed element
    Example:-
    
    1. Bad way
    let arr = ["yogesh" , "nitin"]
    let pushed = console.log(arr.push("snskr"))     // 3
    console.log(pushed)                             // undefined
    let popped = console.log(arr.pop())             // snskr
    console.log(popped)                             // undefined

    2. Good Way
    let arr = ["yogesh" , "nitin"]
    let pushed = arr.push("snskr")
    console.log(pushed)                             // 3
    let popped = arr.pop()
    console.log(popped)                             // snskr

6. arrName.shift()                         // removes first element of array, returns the removed element 
7. arrName.unshift()                       // add a new elemnt to array (at the beginning), returns the new array length
    Example:-
     arrName = ["aa" , "bb" , 7]
     arrName.unshift("cc")
     helllo ji its me sanskar gupta 
     
     Gives:- [ 'cc', 'aa', 'bb', 7 ]

8. delete arrName[index of element]        // delete a element from array and makes a empty space there
9. concat()                                 // Merge arrays

 
    Example:-
    1. 
    arrName = ["aa" , "bb" , 7]
    arrName1 = ["cc" , 786]
    arrName2 = ["bb" ,"$"]
    let newlist  = arrName.concat(arrName1 , arrName2)

    Gives:- ['aa', 'bb', 7, 'cc', 786, 'bb', '$']

    2. 
    arrName = ["aa" , "bb" , 7]
    arrName.concat("niuuu")

10. arrName.flat()



    Example:-
    ```
    arrName = [[1,2],[3,[[[4]]]],[[5],6]]
    ```
    Gives:- [1, 2, 3, 4, 5, 6]

11. arrName.splice(x , y , "" , "" , "" , ..........)

    x= index where element to be added, 
    y= how many elements should be removed,
    ""= new elements

12. arr.includes()                                       // checks whether the argument element is exist in array or not.
    Returns, True or False.

# Array Sorting

1. arrName.sort()                                       // sorts an array alphabetically

2. fruits.reverse();                                    // reverse the current array
