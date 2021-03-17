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

let books;

const booksUrl = "https://striveschool-api.herokuapp.com/books";
const choiceList = document.querySelector("select");
const optionsTags = document.getElementsByTagName("option");
const bookPreviewCol = document.querySelector("#bookPreview");
const inputPrice = document.querySelector("#price")

const createOptionBook = (book) => {
  return ` <option value="${book.asin}"> ${book.title}</option>`;
};

const populatechioceList = (prev, book) => {
  return prev + createOptionBook(book);
};

const renderBookPreview = (value) => {
  bookPreviewCol.innerHTML = "";
  console.log(value);
  let bookSelected = books.filter((book) => book.asin === value);
  console.log(bookSelected);
  inputPrice.setAttribute("placeholder",`This is a suggest Price: ${bookSelected[0].price}`)
  
  let renderCardPreview = ` <div class="col">
                                <div class="card mb-3" style="max-width: 440px;">
                                    <div class="row no-gutters">
                                      <div class="col-md-4">
                                        <img class="img-fluid" src="${bookSelected[0].img}" alt="Book Cover">
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h5 class="card-title">${bookSelected[0].title}</h5>
                                          <p class="card-text">Dummy description : This a great Betseller</p>
                                          <p> <span class ="text-monospace"> Category: ${bookSelected[0].category}</span></p>
                                          <button type="button" class="btn btn-outline-warning btn-sm"> <span class="px-2"><i class="fas fa-shopping-cart"></i></span> <span class="lead" > Price: ${bookSelected[0].price}</span></button> 
                                          <!--book.brand === book.category from the other API-->
                                          <p class="card-text"><small class="text-muted">Last updated: Dummy Time 14:50</small></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>`;
bookPreviewCol.innerHTML = renderCardPreview
};

const getBooksfromApi = () => {
  fetch(booksUrl)
    .then((response) => response.json())
    .then((_books) => {
      books = _books;

      const listOptions = _books.reduce(
        (prev, book) => populatechioceList(prev, book),
        ""
      );
      choiceList.innerHTML = "";
      choiceList.innerHTML = listOptions;
    });
};

window.onload = () => {
  getBooksfromApi();
};
