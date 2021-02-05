/* MY NOTES AFTER THE "one1on1s" ==> about_this_homework: 

*? I should try to understand the scope of the block which i'm using

if(){Which is the scope of this?}

func(){which  is the scope this?}

*? Also I should ask myself, may i write my code in a shortest and smartest way.

-> Please, Don't console.log inside the func if is't the purpose of it.
it's quite better store my func in a variable and later console.log the func,
or func with a (parameter)
__________________________________________
+++ "THIS." key word +++
also if i use key word "this." ---> I should be aware of the scope and something like inheritance of the parent.
EX ----->
const person = {    <---* Object is the parent
    name:"Tetiana",
    surname:"Yaremko",
   "fullName" is like child func of the object *---> fullName: function () {
       return this.name+ ' ' +this.surname
    }
}
---> if I want to use a result from a func I should store it in a variable, like this: 
const result =person.fullName()
and then console.log the variable for ex.
console.log(result)
__________________________________________

THIS IS AN ARROW FUNCTION -----> const whatever = (Parameter or parameters of my func) => {body of my func}

$-> May I use an arrow func inside an object?
Answ/-> **Sorry No I can't, because it's related to the scope, ex if i use "this." key word,
 .js can't identify to whom it owns **

$-> Why is better to create a func as this (const nameofmyfunc = (paremeter){body})?
Answ/-> **Cause it save me from overriding a function in my code**

$-> May I use an arrow func without curly brackets{}? 
Answ/-> **Yeah it's possible, IF I have just a one line func. 
Also isn't neccesary to put key word return if I want to return something,
cause it is like a property of the arrow func "=>"**

EX -----> const checkN2 = (n) => typeof n === `number` ? true:false // Pro Version to do func ==> its just for one line code.
__________________________________________
*/

/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area (b1,a2) {
    const totalArea = b1*a2
    return console.log(`This is the total area of your rectangle: ${totalArea}`)
}

// - You can ask for tutor's help

//  ******* =====> Testing Function area()
// area (2,3)      

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(n1,n2) {
let totalSum = n1 + n2 
        if (n1 === n2) {
        totalSum = totalSum * 3
    } 
    return console.log (totalSum)
}
//  ******* =====> Testing Function crazySum()
// crazySum (2,3)
// crazySum (2,2)


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(n) {
    let absoluteDiff = n - 19
    
    if (absoluteDiff < 0) {
        absoluteDiff = -absoluteDiff
    } else if (n > 19){
        absoluteDiff = absoluteDiff *  3
    }
    return console.log(absoluteDiff)
}
//  ******* =====> Testing Function crazyDiff()
// crazyDiff(10)
// crazyDiff(20)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
/* WRITE YOUR CODE HERE */

//FUNC with if ( thiscondition && thiscondition || or this condition){return true} return false.

// The long Way -->
function boundary (n) {
  if((n <= 100 && n>=20) || n===400){
        return true
    }
    return false
}
// The other long Way using ? Ternary Operator-->
function boundary2(n) {
    return (n<=100 && n>=20) || n===400 ? true : false
}
// The short Way --> 
const boundary3 =(n)=>  (n<=100 && n>=20) || n===400 ? true : false 

//Task from Tetiana.  Make a func thats accept an integer and check if is a number and if it is return true if not return false
// The long Way -->
function checkN (N) {
    if (typeof N === 'number') return true
    else return false
    
}
// The short Way -->
const checkN2 = (N) => typeof N === `number` ? true:false // Pro Version to do func ==> its just for one line code.

//  ******* =====> Testing Function boundary()
// boundary(2)
// boundary(20)
// boundary(100)
// boundary(400)
// boundary(401)


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
/* WRITE YOUR CODE HERE */
function strivify (string) {
    let strivify = "Strive"
    if (string === strivify) {
        console.log(string)
    } else {
        console.log(`${strivify} ${string}`)
    }
}
// strivify("Says Hi... David")
// strivify("Strive")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
/* WRITE YOUR CODE HERE */

function check3and7(n) {
  let isNmultipleOf3 = n%3 
  let isNmultipleOf7 = n%7 

if (n < 0) {
    if (isNmultipleOf3===0) {
        console.log(`Your ${n} is multiple of 3`)
    }if (isNmultipleOf7===0) {
        console.log(`Your ${n} is multiple of 7`)
    }else {
        console.log(`Sorry still we are working to create a function pretty cute, 
        by this time with this function you just will know multiple of 3 or 7`)
    }
} else {
    console.log (`Sorry our function just goes with positive number, 
    return again next month... we should found a solution by that time ^^_ `)
}

}

// check3and7(9)
// check3and7(14)
// check3and7(21)
// check3and7(16)
// console.log(6%3)
// console.log(9%3)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/