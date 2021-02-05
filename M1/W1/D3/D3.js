// ********* Objects - Arrays - Loops ************
// TERNARY OPERATOR
// == WHY AND WHAT IS DOUBLE EQUALITY ?

// Truthy or Falsy
// let testtruthyorfalsy = 1 ? "Truthy":"Falsy"
// let testtruthyorfalsy = 0 ? "Truthy":"Falsy"
// console.log (testtruthyorfalsy)


//  Objects ********

let user = { // This is an object
    name: "Dave", //This is a property of my object
    age: 18,
    
}
/* Arrays *********
They have methods ___()
They have propeties namearray.____ (ex:lenght)
*/

/*  I SHOULD TRY TO UNDERSTAND EVERYTIME THE KIND OF RELATIONSHIP BETEEWN THE THINGS IM USING
*/

//----------> BYMYOWN (Compare two objects email, taking in mind lower and upper case)

const user1 = {
    name: "David",
    surname: "Zapata",
    emailAddress: "michaelJack@gmail.com",
    age: 30 
};

const user2 = {
    name: "Michael",
    surname: "Jackson",
    emailAddress: "michaelJack@gmail.com"
}
//obj.name.toLowerCase()
user2.emailAddress.toLowerCase()
console.log(user2.emailAddress)

// let sameEmail = user2.emailAddress === user1.emailAddress 
// console.log(sameEmail)