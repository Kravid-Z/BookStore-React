console.log(".js connected");

const memorycart = []

window.onload = () =>{
   
    const renderBook = (curr) => {
       return `<div id="${curr.asin}" class="card mb-3" style="max-width: 380px; max-height: 200px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="./details.html?details=${curr.asin}">
                <img class="img-fluid my-img" src="${curr.img}" alt="${curr.title}">
            </a>  
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title">${curr.title}</h6>
              <p class="card-text">
              <small class="font-weight-light">Category</small><br>  
              <small class="text-muted text-monospace">${curr.category}</small>
                </p>
              <div class="btn-group" role="group" aria-label="...">
                <button id="addToCard" onclick="passToWishList(${curr.asin})" type="button" class="btn btn-warning"><i class="fas fa-shopping-cart"></i> <span class="">${curr.price}</span></button>
                <button id="skip" type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    
    const createCardsBook = (prev,curr)=>{
        return prev+renderBook(curr)
    }

    const getInfoApi = () => {
        fetch("https://striveschool-api.herokuapp.com/books").then(response => response.json()).then(
            data => {
                console.log(data)
                const listavailable = data.reduce((prev, libro) => createCardsBook(prev, libro),"")
                const list = document.querySelector("#list")
                list.innerHTML = ""
                list.innerHTML = listavailable
                // console.log(categories);
            }
        )
    } 
    
    getInfoApi()
}

// Why when pass my id as parameter trough my func doesn't work when the Id has a Zero \0 at the beginig and other character as X at the last, in other cases
const passToWishList = (asin) => {
    const myCurrentBookCard = document.getElementById(`${asin}`)
    const wishList = document.querySelector("#wishlist")
    console.log(myCurrentBookCard);
    memorycart.push(myCurrentBookCard)
    myCurrentBookCard.parentNode.removeChild(myCurrentBookCard)
    wishList.insertAdjacentElement("beforeend", memorycart[memorycart.length-1])

    console.log(memorycart)
}



console.log(memorycart)