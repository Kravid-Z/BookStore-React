/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE:
We could mention at least 4 different kind of datatypes in JS:

1. Strings:
Strings are every character (number or letters or symbols) 
we should envolved in quotes '' or double quotes ""

2. Numbers:
Could be integer or float 

3. Booleans:
Booleans just have two values in this case we will use reserved words "true" or "false",
("on" or "off", "1" or "0") could be booleans but we should 
use it with a deep knowledged of it

4. Undefined:

it's a special datatype in js that means "undefined" type

Outside this comment some examples in console.log() */

console.log ("")

console.log ("******* Examples of EX 1 ********")

console.log ("")

let creatingAString = "Hello Strivers" //This is a string datatype
console.log ("This is a example of EXCERCISE 1 creating a string datatype :" + creatingAString)
console.log (typeof creatingAString)

console.log ("")

let creatingANumber = 2 //This is a number datatype
console.log("This is a example of EXCERCISE 1 creating a number datatype :" + creatingANumber)
console.log (typeof creatingANumber)

console.log ("")

let creatingABoolean = false //This is a boolean datatype
console.log("This is a example of EXCERCISE 1 creating a boolean datatype :" + creatingABoolean)
console.log (typeof creatingABoolean)

console.log ("")

let creatingUndefinedVariable = undefined
console.log("This is a example of EXCERCISE 1 creating an undefined datatype :" + creatingUndefinedVariable)
console.log (typeof creatingUndefinedVariable)

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE 

Variable is a empty container where we'll put a value, 
this value could be a different datatype
We should use the key word "let" to create or declare a variable, 
after this we could use our variable just using it's name 
and we could change it's value every time we want

It's so important to create our variable names in camelCase in order 
our code could be more readable. Also we should avoid name our variables 
with numbers at first this could brings us some errors

Outside this comment some examples in console.log()*/

console.log ("")
console.log ("******* Examples of EX 2 ********")

let creatingANewVar = "Hello I'm a variable"
console.log(creatingANewVar)

creatingANewVar = 1
console.log("Now our variable store a number: " + creatingANewVar)

creatingANewVar = false
console.log("And now our variable store a boolean: " + creatingANewVar)

creatingANewVar = undefined
console.log("And now our variable is set to undefined: " + creatingANewVar)


/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/
/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Two Possible Solution to EX3  ***** ")

let sum = 12 + 20
console.log(sum)

let number1 = 12
let number2 = 20
sum = number1 + number2
console.log(sum)


/* EXERCISE 4
Create a variable named x containing the number 12.
*/
/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Solution to EX4  ***** ")

let x = 12
console.log (x)

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/
/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Solution to EX5  ***** ")

let name = "Jhon Doe"
console.log(name)

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/

/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Solution to EX6  ***** ")
let subtraction = 12 - x
console.log(subtraction)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Solution to EX7  ***** ")

let name1 = "jhon"
let name2 = "Jhon"
console.log(name1 === name2)
console.log(name1 === name2.toLowerCase())

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
/* WRITE YOUR CODE HERE */
console.log ("")
console.log("***** Possible Solution to EX8  ***** ")

let newX = 5
if (newX === 5)
{console.log("five")}

let number0_9toliteral = [zero,one,two,three,four,five,six,seven,eigth,nine]
let newX2 = undefined
newX2 = 4
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
/* WRITE YOUR CODE HERE 
let name = "David"
let surname = "Zapata"
let completeName = undefined

if (name === name, surname === surname)
{completeName = name + surname
console.log(completeName)}

this is the ternary operator "?"

*/



/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/