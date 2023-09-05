variable is a containeor = stores in  RAM

varable names can start with $ or _ or letter ..... not number

Harry != harry

let = initialization is optional
cont = initialization is Required
var = initialization is optional 


	    Block scoped	Hoisting	    Reassignment	      Initialization
let	    Yes	            No	        Yes	            Optional
var	    No	            Yes     	  Yes	            Optional
const	  Yes	            No	        No	            Required


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

# Objects (These are same as Dictionary in Python) Used of Mapping , Key : Value Pairs
To access value from it we can use :
1. objectname.key
2. objectname["Keyname"]
# Arithmetic Operatrs
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
1. 
if(contition){

}
else (condition){

}

2. Netsting
if(contition){

}
else if (){

}
else{

}

3. Ternory Operator
 condition? expression1:expression2;

4. Switch Case
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


prompt()
alert()
console.log()


TypeCasting
a = Number.parseInt(a); // Convert string to a number

# Loops 
1. # for
for(initialize; condition ; increament)

2. # for in
Iterates/Works over the properties of an object
used to go through all the properties (keys) of an object
Loop running count = Number of elemets in the object

Example:-

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


3. # for out
Iterates/Works over the values of an iterable object
Rearly used 


4. # while

while(condition){
    // code to be executed
}

5. # Do While
    do{
        //code to be executed
    }while(condition);

# Function
1. Function without parameters
function functionname(){
    // code to be executed 
}

2. Function with parameters
function functionname(a,b){
    // code to be executed having the use of parameters
}


Example:-

function myfunc(x, y) {
  return (x + y)
}

# Strings

1. "Hello my value is " + a    //double quotes
2. 'Hello' my value is " + a   //Single Quotes 
3. `Hello my value is ${a}`    //Backticks     
    //Template Literals = We can add variables to strings using template literals  
4. Escape Sequences
   "Hello\nWorld"               //   /n = creates a new line
   "Hello\tWorld"               //   /t = creates a tab
   "Hello\'World"               //   /' = creates a single quote 
  
