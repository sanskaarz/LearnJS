

to copy an array((
    var a = [1,2,3,4,5]
    var b = [...a]  //(three dots are spread operator)
))

to copy an obj((
    var a = {Harsh}
    var b = {...a}
))

Falsy ((
    0 false undefined null NAN document.all
))
Truthy ((
    all except falsy
))

loops((
    (
        foreach(
            works for looping on array
            works on each and every value "Har Ek"
        )
        forin(
            works for looping on objects
            key = key ki value
        )
    )
))



callback function = esa function jo tb chlta hai jb kaam complete ho jaaye

first class functions = iske according hum functions ko as a value use kr skte hai

to print in JS

console.log(Hello World)
alert(Hello World)


heap memory is used to store the data


-00000000000000000000000000000101
00000000000000000000000000000101
00000000000000000000000000000001
00000000000000000000000000000010



Literals = Fixed Data Values =  Numbers , Strings
Variables = Used to store data values 

Identifiers are used to name variables and keywords, and functions.Also Known as Unique Variables.

Keywords =  let , var , const

# Redeclaring
let , const can not be re-decleared
var can be redecleared


var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed


const x = 2;   // Allowed
x = 4;         // Not allowed
var x = 5;     // Not allowed
let x = 6;     // Not allowed
const x = 7;   // Not allowed



let x = 2;   // Allowed
x = 4;       // Not allowed
var x = 5;     // Not allowed
let x = 6;     // Not allowed
const x = 7;   // Not allowed



Operators in JS
Arithmetic Operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation / power  x**2 is same as Math.pow(x,2)
/	Division
%	Modulus (Division Remainder)
++	Increment by 1
--	Decrement by 1



Assignment Operators
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y

Shift Assignment Operators (works on 32bit form of numbers) ()
<<= Left Shift Assignment Operator
    remove the left bit and add a 0 to the right side
>>=	Right Shift Assignment Operator
    remove the right bit and add 0 to the left side





Data Types
let x = 16 + 4 + "Volvo";
// Output = 20Volvo

let x = "Volvo" + 16 + 4;
Volvo164
Empty value ("") = String

Functions
Executed only when it is invoked / called
The code to be executed, by the function, is placed inside curly brackets: {}
Hoisting works 
You can write code that can be used many time


Strings are written inside double or sinle quotes. Numbers are written without quotes.
