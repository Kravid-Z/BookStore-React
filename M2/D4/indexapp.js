//Variables Globales
const striversList = document.querySelector("#strivers-list")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const alertMssg = document.querySelector("#alertLastName")
const operator = 0  //? value default for button of teams, before start to create 
const memoryParticipants = [/** Here will be my list of participants p1, p2, p3, p4... */]
const memoryQofT = [ /**Here will be my numbers as index for teamsR array 1, 2, 3, 4... */] //---> operator for loop para crear la memoria
const teamsR = [/** this will contain one array for each team ex: [Team1],[Team2]... */] // inside this will  be our teams in each array, operator will create with a forloop our arrays teams


// **********>  FUNCTIONS
//**--->Random func

const getRandomOfArrays = (arraylength) => {
let numberi = Math.floor(Math.random() * (arraylength) + 1)
return numberi
}
//**---> Charging memoryQofT []

const chargeMemoryQofT = (operator) => {
    for (let i = 0; i < operator; i++) {
        memoryQofT.push(i + 1) 
    }
}
/** Should call this func when user choose the quantity of teams */

//**---> Creating our teams UI

const createTeams = ()=>{
    
}

//**---> Add condition to avoid adding a just the firstname to the list, it must be necesary always the last name so we could manage people with the same name. 
const addUser = ()=>{
    if (lastName.value === "") {
        const strongt = document.createElement("strong")
        const smallt = document.createElement("small")
        const buttonalert = document.createElement("button")
        const spanhid = document.createElement("span")
        const divalert = document.createElement("div")
        divalert.classList.add("alert")
        divalert.classList.add("alert-warning")
        divalert.classList.add("alert-dismissible")
        divalert.classList.add("fade")
        divalert.classList.add("show")
        divalert.setAttribute("role","alert")
        strongt.innerText = "Holy guacamole!"
        smallt.innerText = " Last Name it's required"
        buttonalert.setAttribute("type","button")
        buttonalert.classList.add("close")
        buttonalert.setAttribute("data-dismiss","alert")
        buttonalert.setAttribute("aria-label","Close")
        spanhid.setAttribute("aria-hidden","true")
        spanhid.innerText = "x"
        alertMssg.appendChild(divalert)
        divalert.appendChild(buttonalert)
        divalert.appendChild(strongt)
        divalert.appendChild(smallt)
        buttonalert.appendChild(spanhid)
    } else {
        const li = document.createElement("li")
        li.innerText = `${firstName.value} ${lastName.value}`
        striversList.appendChild(li)
        firstName.value = ""
        lastName.value= ""   
    }
}
//-----------This func is just for #lastName Input, this let's validate a complete user name
const addUserPressingEnter = (event) =>{
    if (event.keyCode === 13) {
        addUser()
    }
}

// const addingEventListener = () =>{
//     const divdropmenu = document.getElementsByClassName(".dropdown-item")
//    for (let i = 0; i < divdropmenu.length; i++) {
//        divdropmenu.item(i).onclick = operatorFunc
//    }
// }

const operatorFunc = (event)=>{
    console.log(event)
}
//-----------> Random Func

const randomPandT = ()=>{
    if (memoryParticipants[0] === undefined) {
        /**Show message to user, please add participants to the list to be randomized in teams */
        console.log("Participants not added")
    } else if (operator === 0) {
        /**Show message, please choose the number of teams you want to create */
        console.log ("You dind't choose number of teams")
    } else {
        let nOfP = getRandomOfArrays(memoryParticipants.length) /** Random number from length of the array of memoryParticipants */
        let p = memoryParticipants.splice(nOfP,1)  /** P is a new array just with, participants name of the participant randomized, splice(return always a new array with the participant taken from memoryof participants)*/
        let participantsName = p.toString() //convert my array in a string
        
            if (memoryQofT.length === 0) {
                chargeMemoryQofT()
            } else {
                let nQofT = getRandomOfArrays(memoryQofT.length) /** index random from my memoryQofT (array of numbers will contain one reference to each index number of teams ) */
                
                let nOfT = memoryQofT[nQofT] //nOfT -> will be the specific index stored in my memoryQofT, won't be one index of that memory, will be an index stored in that memory, (the reference will avoid apply to same team in each call to action of random addPtoT())

                let t = teamsR[nOfT] // t -> will contain the specific index to add my participant

                addPtoT(p,nOfT)
            
                teamsR[t.push(participantsName)] 
                memoryQofT.splice(nQofT,1)

            }

         
    }
        

}

//-----------> This function will add the random participant to a random team, and will receive as parameter P=(participant) and T=(Team#)
const addPtoT = (p,nOfT) =>{

}