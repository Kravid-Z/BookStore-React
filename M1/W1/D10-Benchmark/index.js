// src ="questions"  -->
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, wh    ich of these keywords    would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
/** --------->  Pseudo Code <----------
**---->GLOBAL VARIABLES<------**
let userScore = 0
let questionNumber = 0
let userName = ""
const arrayOfQuestion = questions
**----> Functions Needed

getQuestion ()=>{
            // From arrayofQuestions get a number ramdomized and pass it's [i] to get the objectQuestion choosed, 
            and pass each property of obectQuestion to our #playGround
            create new elements in #dashboardQuestion

            newh3 = typeQ (multiple || True&&False) = object.type 
            newP question = object.question 
            
            if(type.Q === "multiple")

            --> create ul of input radio-button inside #dashboardQuestion - inserted in the bottom, merging true_answer with incorrect_answer
            
            createoneli
            createtruebutton.id = "true"
            appendtruebutton.child to li
            appendchildli to #dashboard

            #truebutton.value = object.correct_answer
            
            forloop(let i=0; i<= 3; i++){
                createelement li
                createelemt inputbutton
                input.addclass = falseAnswer
                appendchild input to li
                appendchild li to #dashboardQuestion
            }
        else{
            create two input button:
            button.addID = "true"
            button.addID = "false"
            button #True.value = true
            button #False.value = false
            appendchild to parent
            Attach an eventListener .onclick = nextQuestion for my #buttonNext button    
            }
               falseAnswers = getelementsbyclass falseAnswer = []
            falseAnswers.li.value = object.incorrect_asnwers

            //---> implementar un metodo ramdom para organizar de forma distinta las respuestas siempre que se llame a una pregunta con multiple

        }
------------------    *    ------------------
nextQuestion()=>{
            if (questionNumber === 5){
                giveScore()
            }else{
            saveScore()    
            getQuestion()    
            }
}
------------------    *    ------------------
giveScore()=>{
            Change from display to none, the Display: property from #playGround , to hide the our playGround
            createelement div with usersName and Usersscore in inner            
}
------------------    *    ------------------
saveScore()=>{

}
------------------    *    ------------------
1. Attach an eventListener: .onclick = getUsersData to my #fireButton button when window.onload 
2. Get the users name to tracking his || her Brain$Coin (Score)
     
    Previous: create a func for getUsersData()=>{
        Change from display to none, the Display: property from #rules && #fireButton , to hide the rules and fireButton
        Change from none to display, the Display: property from #usersData, to see the txt button for name and Create User button
        Attach an eventListener .onclick = saveName for my #createNewUser button
        Previous, create func saveName ()=>{}
        After onclickevent of #createNewUser button change display property of #usersData to none again
        Change from none to display, the Display: property from #playGround , to see the our playGround
        //Functions to run in first show:
        getQuestion()
        

    }
    
3. Show he||she a maximun of 5 question ramdomized, per a total of five minutes, one minute per each question 
4. Return her||his Brain$Coin when finish in new div with the usersname and userScore    
*/

let userScore = 0
let questionNumber = 0
let userName = ""
const arrayOfQuestion = questions
// console.log(arrayOfQuestion[1].category) ---> Testing how to get acces each questionobject

const getQuestion = () => {
let iOfArrayQ = (Math.random()*10 +1)
}
for (let i = 0; i < 20; i++) {
    let iOfArrayQ = parseInt(Math.random()*10 +1)
    console.log(iOfArrayQ)        
}
// let iOfArrayQ = parseInt((Math.random()*10 +1))
// console.log(iOfArrayQ)