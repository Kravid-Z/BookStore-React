console.log("Index => connected");

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
 */

//<----------------------------------------------------------------------------------------&&------------------------------------------------------------------------>

/** My Template card-deck <=====================>
 * 
-----Body Home Page -----------------------
<h2>Mega-sale Books</h2>
<div id="megaSaleList" class="row row-cols-sm-1 row-cols-md-3">

-----Template card-product----------
     <div class="col">
                    <div class="card mb-3" style="max-width: 440px;">
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img class="img-fluid" src="https://via.placeholder.com/1024x1700" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Just quick description.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
-----End template card-product--------  

</div>
----End Body HomeP----------------------
 */
//Elements Target
const jsEntryPoint = document.getElementById("jsEntryPoint")
const megaSaleList = document.querySelector("#megaSaleList")

//SRC GET
const urlGetMethod = "https://striveschool-api.herokuapp.com/api/product/"; //GET method to this Api, will bring me array with objects

const renderCardBook = (book) =>{
    return `<div class="col">
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
}

window.onload = () => {
  console.log("Page loaded");
  const getAvailableBooks = () => {
    fetch(urlGetMethod, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZThjMTg5YzI2ZjAwMTU3ZjljMjgiLCJpYXQiOjE2MTU5ODA3MzgsImV4cCI6MTYxNzE5MDMzOH0.7ecaHsVow0aLX_UvZMM5X65HUmrVhWqs445ZEX-G258",
      },
    })
      .then((response) => response.json())
      .then(data =>{
          megaSaleList.innerHTML = "" // clean my list cards
          const renderAvailableBooks = (prev,book)=>{
              return prev + renderCardBook(book)
          }
          const availableBooks = data.reduce((prev,book)=>renderAvailableBooks(prev,book),"")
          megaSaleList.innerHTML = availableBooks   
      });
  };
  getAvailableBooks();
};
