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

= Assigns a value to variable
== Equal to (does not checks the typeof variables)
!= Not Equal to (does not checks the typeof variables)
=== Equal to 7 Equal type
!== Not Equal to & Not Equal Type
>
<
>=
<=

# Logical Operators

&&  and and 
||  or
!   not

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
if(contition){

}
else if (){

}
else{

}
```
3. Ternory Operator
 condition? expression1:expression2;

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
4. document.write("output")                                     // Print ouutput in Main page
5. document.getElementById("demo") = "output"                   // Return output to HTML


TypeCasting
a = Number.parseInt(a); // Convert string to a number
a = parseInt(a); // Convert string to a number                 // Latest


# Loops 
1. # for
for(initialize; condition ; increament){
  //code to be executed
}

2. # for in
Iterates/Works over the properties/keys of an object
Loop running count = Number of elemets in the object

  Example 1 :-

  const dict = {
    water : "pani",
    lens :"Chasma",
    bag : "BAsta",
    mobile : "Phone"
  };

  1. To print all the elements of object as an object 4 times
  for (let anyword in dict){
    console.log(dict);
  }

  2. To print all the values of elements of object

  for (let anyword in dict){
    console.log(anyword);
  }

  3. To print all the keys of elements of object

  for (let anyword in dict){
    console.log(dict[anyword]);
  }
              **OR**
  for (let anyword in dict){
    console.log(dict.anyword);
  }

  let anyword in dict = It stores all the values of dict in anyword

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

3. # for of
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

4. # while

while(condition){
    // code to be executed
}

5. # do while
    do{
        //code to be executed
    }while(condition);

# Function                                      // Resuable block of code that performs Specific tasks
    Return Statement is only needed only if you want to print/use the value of variable outside function.
     
1. Function without parameters
function myFunc(){
    // code to be executed
}

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

hello = function() {
  return "Hello World!";
}

* Before Arrow Function

hello = () => {
  return "Hello World!";
}

* - Arrow Functions Return Value by Default                // This works only when function has only one statement 
hello = () => "Hello World!";




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

1. name.at("index") = name["index"]                         // Return index charctor from string 
6. name.charAt(index)                             // returns the character at a given index
6. name.charCodeAt(index)                         // returns the unicode of character at a given index
6. name.fromCharCode(CharCodeOfString);           // returns the string from unicode of character

15. name.endsWith("")            //  check weather the string ends with specific value
13. name.includes("")            //  check weather the string contain any specific value
1. name.indexOf()                //  returns the index of first occurrence the given string
* Example
  * name.indexOf("s")
  - name.indexOf("s" , 6)        // Start searching string from 6th index
1. name.lastIndexOf()            // returns the index of last occurrence the given string

1. name.length()                  // To get the length of the string
1. name.localeCompare(text2);       // Compare two strings - Returns -1 , 0 , 1
1. name.match(/string/)           // If given string found then it returns the string

* Example
```
  let name = "The rain in SPAIN stays mainly in the plain";
  - console.log(name.match(/ain/))              
    - Gives = ["ain"]
  - console.log(name.match(/ain/g))           //Search globally + Case sensitive
    - Gives = ["ain", "ain", "ain"]
  - console.log(name.match(/ain/gi))          //Search globally + Case in-sensitive
    - Gives = ["ain", "AIN", "ain", "ain"]

```
1. name.padEnd(l, x)
  - l = length of desired string
  - x = string to be added to incerease length

1. name.padStart(l, x)

2. name.toUpperCase()
3. name.toLowerCase()
4. name.slice()                     // Extracts a part of a string and returns the extracted part - accepts negative indices
    slice counts the blanks/spaces but not print them
  Examples:-
  1. name.slice(7, 13);
  2. name.slice(7, 13);
  3. name.slice(7);               // extract the whole string from 7 to end
  4. name.slice(-7);              // extract the whole string from 7(from end) to starting
  5. name.slice(-7 , -13);        // extract the whole string from 7(from end) to 13(from end)

5. name.substr("Starting index , string.length)   // Extracts a part of a string and returns the extracted part
6. name.substring(Starting index","End Index")    // Extracts a part of a string and returns the extracted part - not accepts negative indices
7. name.replace("old string", "new string")
8. name.replaceAll("old string", "new string")
9. name.concat();
  Examples:-
  let name = "sans";
  let name2 = "kar";
  1. console.log(name.concat(name2));
  2. console.log(name.concat("kar"));
  3. console.log(name.concat(name2 , "is hot"));
                  **OR**
  3. console.log(name + name2 + " is a cool guy");
10. name.trim()                  //  removes whitespace from both sides of a string
11. name.trimStart()             //  removes whitespace from Start of a string
12. name.trimEnd()               //  removes whitespace from End of a string
14. name.startsWith("")          //  check weather the string starts with specific value
16. name.split("separator");     //  String converted into Array, the separator is omitted

    Example:-
    let text = "a,b,c,d,e,f";
    let myArray = text.split(",");
    console.log(myArray[2];)

    Gives:-
    c


# Arrays      DataType = objects

const array = []
let array = []


# Array Mathods

1. namelist.length
2. namelist.toString()                      // Convert to string
3. namelist.join()                          // Merge array items by Adding value in middle , converts Array to String 

    Example:-
     namelist = ["aa" , "bb" , 7]
     namelist.join("-") = Gives :- aa-bb-7
     namelist.join("8") = Gives :- aa8bb87

4. namelist.pop()                           // Removes last element of array
5. namelist.push()                          // Insert new element to array (at the end)

    Example:-
     namelist = ["aa" , "bb" , 7]
     namelist.push("cc")

     Gives:- ['aa', 'bb', 7, 'cc']

6. namelist.shift()                         // removes first element of array
7. namelist.unshift()                       // add a new elemnt to array (at the beginning)

    Example:-
     namelist = ["aa" , "bb" , 7]
     namelist.unshift("cc")
     
     Gives:- [ 'cc', 'aa', 'bb', 7 ]

8. delete namelist[index of element]        // delete a element from array and makes a empty space there
9. concat()                                 // Merge arrays

    Example:-
    1. 
    namelist = ["aa" , "bb" , 7]
    namelistt = ["cc" , 786]
    namelisttt = ["bb" ,"$"]
    let newlist  = namelist.concat(namelistt , namelisttt)

    Gives:- ['aa', 'bb', 7, 'cc', 786, 'bb', '$']

    2. 
    namelist = ["aa" , "bb" , 7]
    namelist.concat("niuuu")

10. namelist.flat()

    Example:-
    
    namelist = [[1,2],[3,[[[4]]]],[[5],6]]

    Gives:- [1, 2, 3, 4, 5, 6]

11. namelist.splice(x , y , "" , "" , "" , ..........)

    x= index where element to be added, 
    y= how many elements should be removed,
    ""= new elements


# Array Sorting

1. namelist.sort()                                       // sorts an array alphabetically
2. fruits.reverse();                                     // reverse the current array

