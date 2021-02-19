//Variables Globales
const striversList = document.querySelector("#strivers-list")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const alertMssg = document.querySelector("#alertLastName")
const operator = 0

// **********>  FUNCTIONS
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
