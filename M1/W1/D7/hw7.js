
      /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

     function changeTitle(newTitle){
         let selectMyHeading = document.querySelector("h1")
         selectMyHeading.innerText = newTitle
    }   //--> I wrote this function to pass the newTitle trough the console inside the function(newTitle) as parameter.

    /* EXERCISE 2
    Write a function for changing the class of the title of the page in "myHeading".
    */

    function addClassToTitle(){
        let selectMyHeading = document.querySelector("h1")
        selectMyHeading.classList.add("myHeading") 
    }

    /* EXERCISE 3
    Write a function for changing the text of only the p which are children of a div.
    */

    function changePcontent(){
        let selectPofDivs = document.querySelector("div p")
        selectPofDivs.innerText = "This is a short Lorem Ipsummmmmmmmmm...  who cares :) !"
    }

    /* EXERCISE 4
    Write a function for changing the destination of every link to https://www.google.com
    */

    function changeUrls() {
        let selectAtoChange = document.querySelector("main a")
        selectAtoChange.removeAttribute("href")
        selectAtoChange.setAttribute("href","https://www.google.com")
        selectAtoChange.innerText = "Now this link goes to Google, Strivers!"
    }

     /* EXERCISE 5
     Write a function for adding a new item in the second list.
     */

    function addToTheSecond(content){
        let selectingLists = document.getElementsByTagName("ul")
        let secondList = selectingLists[1]
        let newLiItem = document.createElement("li")
        secondList.insertAdjacentElement("beforeend", newLiItem)
        newLiItem.innerText = "Here we have the fourth new element in this list!"
    }

    /* EXERCISE 6
    Write a function for adding a second paragraph to the div.
    */

    function addParagraph(content){
        let selectingDivs = document.querySelectorAll("main div")
        let firstDiv = selectingDivs[0]
        let newPinsideFirstDiv = document.createElement("p")
        firstDiv.insertAdjacentElement ("beforeend", newPinsideFirstDiv )
        newPinsideFirstDiv.innerText = content
    }   //--> I wrote this function to pass the content of my "p" trough the console inside the function(content) as parameter.

    /* EXERCISE 7
    Write a function for making the first UL disappear.
    */

    function firstUlDisappear() {
        let selectingLists = document.getElementsByTagName("ul")
        let firstList = selectingLists[0]
        firstList.style.display = "none"

    }

    /* EXERCISE 8
    Write a function for making the background of every UL green.
    */

    function paintItGreen(){
        let selectingLists = document.querySelectorAll("ul")
        // selectingLists.forEach(ul=> ul.style.backgroundColor = "green" ) //This is the short-hand code
        for (let i = 0; i < selectingLists.length; i++) {
            selectingLists[i].style.backgroundColor = "green";  
        }   
    }

    /* EXERCISE 9
    Make the heading of the page change color every time the user clicks on it.
    */

    function makeItClickable(){

    }

    /* EXERCISE 10
    Change the footer text with something else when the user clicks on it.
    */

    function changeFooterText(){

    }

    /* EXERCISE 11
    Attach an event listener to the input field in the page for console logging its value just after any keystroke.
    */

    // const inputField = document.getElementById('input-field')
    // ...

    /* EXERCISE 12
    Create a new welcome alert message when the page successfully loads.
    */

    // window.onload = function(){

    // }

    /* EXERCISE 13
    Use HTML5 tags to divide the content of the page in a more semantic way.
    */
  