JS has two versions
1. ES5(only var)(old e)
2. ECMA Script6 ES6(let & const included)


Undefined - Exist but no value
Not- Defined - Does not Exist


If there exist Brackets {} or [] or () then variale is refrence
if not Bracket exist then variable is primitive


function = name of the set of code,executed when it is called
function ke chlte hi sbse pehle execution context bnta hai 

Execution Context :-
1. variable
2. Functions inside the parent function
3. Lexical Environment - It tells us that, what we can access or what we cannot access

arguments = real values jo hum dete hai
parameters = variables jinme values store hoti hai

array = to store more then one value to a variable

{} = object

method = property of object whose value is a function

var ((
    it can be used anywhere in it's parent function(function scoped)
    it shows in window
))
let= it doesnot shows itself in window

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

heap memory is used to store the data

