

**To copy an array**
```js
    var a = [1,2,3,4,5]
    var b = [...a]  //(three dots are spread operator)
```

**To copy an obj**
```js
    var a = {Harsh}
    var b = {...a}
```

**Falsy Values**
```js
    0 false undefined null NaN 
```
**Truthy Values**
    all except falsy

**Loops**
```
        foreach(
            works for looping on array
            works on each and every value "Har Ek"
        )

        forin(
            works for looping on objects
            key = key ki value
        )
    
```




**Callback function** = esa function jo tb chlta hai jb kaam complete ho jaaye

**First class functions** = iske according hum functions ko as a value use kr skte hai



**Heap memory** is used to store the data

**Literals** = Fixed Data Values =  Numbers , Strings

**Variables** = Used to store data values 

**Identifiers** are used to name variables and keywords, and functions they are also know as Unique Variables.

**Keywords** =  let , var , const

# Redeclaring

-  ```let``` , ```const``` can not be re-decleared
-   var can be redecleared
```js
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
```

```js
const x = 2;   // Allowed
x = 4;         // Not allowed
var x = 5;     // Not allowed
let x = 6;     // Not allowed
const x = 7;   // Not allowed
```

```js
let x = 2;   // Allowed
x = 4;       // Not allowed
var x = 5;     // Not allowed
let x = 6;     // Not allowed
const x = 7;   // Not allowed
```


**Operators in JS**

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
| Operator | Usage   |  Expanded Form    | 
|---| ----| ---- | 
|=|	x = y	|x = y
+=	|x += y	|x = x + y
-=	|x -= y	|x = x - y
*=	|x *= y	|x = x * y
/=	|x /= y	|x = x / y
%=	|x %= y	|x = x % y
**=	|x **= y	|x = x ** y

Shift Assignment Operators (works on 32bit form of numbers) ()
<<= Left Shift Assignment Operator
    remove the left bit and add a 0 to the right side
>>=	Right Shift Assignment Operator
    remove the right bit and add 0 to the left side




**Data Types**
```js
let x = 16 + 4 + "Volvo";
// Output = 20Volvo
```
```js
let x = "Volvo" + 16 + 4;
Volvo164
Empty value ("") = String
```

**Functions**

Executed only when it is invoked / called
The code to be executed, by the function, is placed inside curly brackets: {}
Hoisting works 
You can write code that can be used many time

```js
function addTwoNumbers(a,b){
    let c = a + b;
    console.log(a + b)
}

addTwoNumber(5,7)  // Ouput => 12
```


Strings are written inside double or sinle quotes. Numbers are written without quotes.
