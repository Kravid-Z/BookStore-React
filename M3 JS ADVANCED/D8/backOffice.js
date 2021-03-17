console.log("backOffice => connected");
/** PRODUCT => OBJECT MODEL
{
                "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
                "name": "app test 1",  //REQUIRED
                "description": "somthing longer", //REQUIRED
                "brand": "nokia", //REQUIRED  //------->>>>> category for me
                "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
                "price": 100, //REQUIRED
                "userId": "admin", //SERVER GENERATED
                "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
                "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
                "__v": 0 //SERVER GENERATED
            }

            booksUrl =  https://striveschool-api.herokuapp.com/books

            fetch(books)
 */

//<----------------------------------------------------------------------------------------&&------------------------------------------------------------------------>

/** BackOffice Template
-----Template card-product----------
book = {
            asin: "1940026091"
            category: "scifi"
            img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
            price: 7.81
            title: "Pandemic (The Extinction Files, Book 1)"
}


-----Template card-product----------
`<div class="col">
    <div class="card mb-3" style="max-width: 440px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img class="img-fluid" src=${book.imageUrl}alt="Book Cover">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${book.name}</h5>
              <p class="card-text">${book.description}</p>
              <p> <span>${book.brand}</span><span>${book.price}</span> </p> 
              <!--book.brand === book.category from the other API-->
              <p class="card-text"><small class="text-muted">Last updated: ${book.updatedAt}</small></p>
            </div>
          </div>
        </div>
      </div>
</div>`
-----End template card-product--------  

 */

const booksUrl = "https://striveschool-api.herokuapp.com/books";
let choiceList = document.querySelector("select");

const createOptionBook = (book)=>{
    return ` <option> ${book.title} <span>Asin: ${book.asin}</span></option>`
};

const populatechioceList=(prev,book)=>{
    return prev + createOptionBook(book)
}

const getBooksfromApi = () => {
  fetch(booksUrl)
    .then((response) => response.json())
    .then((books) => {
      console.log(books);
      const listOptions = books.reduce((prev,book)=>populatechioceList(prev,book),"")
      choiceList.innerHTML = "";
      choiceList.innerHTML = listOptions
    });
};

window.onload = () => {
  getBooksfromApi();
};
