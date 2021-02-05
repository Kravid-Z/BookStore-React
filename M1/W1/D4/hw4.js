/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
function area (b1,a2) {
    const totalArea = b1*a2
    return console.log(`This is the total area of your rectangle: ${totalArea}`)
}

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

function boundary (n) {
    if (n < 20) {
        return console.log(false)
    } else if(n <= 100){
        return console.log(true)
    } else if(n === 400){
        return console.log(true)
    } else {
        return console.log(false)
    }
}

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

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

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