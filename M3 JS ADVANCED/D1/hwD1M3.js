/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const tripleIfEqual = (a,b)=>{
    let sum = undefined
    if (a != b) {
        sum = a + b        
    }
    else if (a === b) {
        sum = (a+b)*3
    }
    return sum
}
// console.log(tripleIfEqual(2,2)); 
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const numberOrResultIs50 = (a,b) => {
    let answer = undefined
    if (a > 49 || b > 49) {
       a === 50 || b === 50? answer = true : answer=false    
    }else{
        a + b === 50? answer = true : answer= false
    }
    return answer
}
// console.log(numberOrResultIs50(30,15));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const deleteOneSpecified = (string, position) =>{
    let stringtoChange = string.split("")
    let erasedposition = stringtoChange.splice(position,1)
    let myNewStr = stringtoChange.join("")
    return `This is my new string ==> ${myNewStr} & This is that we put off ==> ${erasedposition}`
}
// console.log(deleteOneSpecified("Hello world",0));
/*

4)
 Create a function to find the largest of three given integers.
*/
const whoIsTheLargest = (a,b,c)=>{
    let largest = undefined
    a > b && c ? largest = a : b > c && a ? largest = b : largest = c
    return largest
}
console.log(whoIsTheLargest(1,2,3));
console.log(whoIsTheLargest(6,5,4));
console.log(whoIsTheLargest(7,9,8));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkingRange = (a,b) => {
    if (a && b > 39 && a && b < 61) {
        console.log("In the range 40..60");
    } else if (a && b > 69 && a && b < 101) {
        console.log("In the range 70..100");
    }else{
        console.log("Not in the range");
    }
}
// checkingRange(39,61)
// checkingRange(40,60)
// checkingRange(69,101)
// checkingRange(70,100)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const newStrOfSpecifiedCopies = (string, number) => {
    let numberPositive = number 
    let newStr = string

    if (numberPositive > 1) {
        for (let i = 1; i <= number; i++) {
            newStr += ` copy # ${i} ` + string
        }    
    }
    return newStr
}
// console.log(newStrOfSpecifiedCopies("Hello World", -2));
// console.log(newStrOfSpecifiedCopies("Hello World", 5));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityWith = (city)=>{
    let checkCity = city.split("")
    let startsWith = checkCity.splice(0,3)
    let compare3First = startsWith.join("")
    if (compare3First === "Los" || compare3First === "New") {
        return city
    } else {
        return `not found`
    }
}
// console.log(cityWith("Lo"));
// console.log(cityWith("Los Angeles"));
// console.log(cityWith("New jersey"));
// console.log(cityWith("Madrid"));


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let arr = [1,2,3,4]
// let otherarr = ["a","b","c"]

const sum3OfArray = (array)=>{
    // let answerIfNot = undefined
    let isarrayOfNumbers = []
    let sum = undefined
    for (let i = 0; i < array.length; i++) {
        isarrayOfNumbers[i] = array[i]        //next step check if is array of numbers array[i] === NaN ? answerIfNot = "Is not array of numbers":     
    }
    if (isarrayOfNumbers.length === 3) {
        for (let i = 0; i < isarrayOfNumbers.length; i++) {
            sum = isarrayOfNumbers[i] + isarrayOfNumbers[i]
        }
        return sum
    }
    return `Array have more than 4 elements to sum`

}
// console.log(sum3OfArray(arr));
// console.log(sum3OfArray(otherarr));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
let array1 = [1,2]
let array3 = [3,2]
let array0 = [5,4]

const arrayof2Int = (array)=>{
   return array.inlcudes(1||3)
}

// console.log(arrayof2Int(array1))
// console.log(arrayof2Int(array3))
// console.log(arrayof2Int(array0))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/