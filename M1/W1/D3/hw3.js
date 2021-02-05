/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/
/* WRITE YOUR CODE HERE */

let arrayOfNumbers = [1,2,3,4,5]
// console.log (arrayOfNumbers)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
/* WRITE YOUR CODE HERE */
const user1 = {
    name: "David",
    surname: "Zapata",
    emailAddress: "kravdev_64@gmail.com",
    age: 30 
};
// console.log(user1)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
/* WRITE YOUR CODE HERE */

user1.drivingLicense = true
// console.log(user1)

/* EXERCISE 4
Remove from the previously created object the age property.
*/
/* WRITE YOUR CODE HERE */

delete user1.age
// console.log(user1.age)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
/* WRITE YOUR CODE HERE */

const user2 = {
    name: "Michael",
    surname: "Jackson",
    emailAddress: "michaelJack@gmail.com"
}

let sameEmail = user2.emailAddress === user1.emailAddress 
// console.log(sameEmail)

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/
/* WRITE YOUR CODE HERE */

let totalShoppingCart = 49;
let shippingCost = totalShoppingCart > 50 ? 0: 10; 

/* ********testing with and if statement 
 if (totalShoppingCart > 50) {
    shippingCost = 0    
    } else {
        shippingCost = 10
    }
*/
let totalCost;

// totalShoppingCart = 55 (Why ? if change value later it fuction different)

totalCost = totalShoppingCart + shippingCost

// console.log(totalCost)

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
/* WRITE YOUR CODE HERE */

const blackFridayDiscount = totalShoppingCart * 20 /100
totalShoppingCart = totalShoppingCart - blackFridayDiscount 
totalCost = totalShoppingCart + shippingCost
// console.log (totalCost)


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
/* WRITE YOUR CODE HERE */
 
const car1 = {
brand: "Volkswagen",
model: "Touran",
licensePLate: "AD1"
}
const car2 = {}, car3 ={}, car4={}, car5={} 

Object.assign(car2 ,car1)
car2.licensePLate = "AD2"

Object.assign(car3 ,car1)
car3.licensePLate = "AD3"

Object.assign(car4 ,car1)
car4.licensePLate = "AD4"

Object.assign(car5 ,car1)
car5.licensePLate = "AD5"

// console.log(car1,car2,car3,car4,car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
/* WRITE YOUR CODE HERE */

const carsForRent = [car1,car2,car3,car4,car5]
// console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
/* WRITE YOUR CODE HERE */
carsForRent.shift()
carsForRent.pop()
// console.log (carsForRent)

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

console.log( typeof car3)
console.log( typeof car3.licensePLate)
console.log (typeof car3.brand)

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/