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
-----Body Store Page -----------------------
<h2>Mega-sale Books</h2>
<div id="megaSaleList" class="row row-cols-sm-1 row-cols-md-3">

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

</div>
----End Body HomeP----------------------
 */
//Global Elements Target
let jsEntryPoint = document.getElementById("jsEntryPoint");

let bodyStorePage = ` <h2>Mega-sale Books</h2>
                        <div id="megaSaleList" class="row row-cols-sm-1 row-cols-md-3">
                        </div>`;
jsEntryPoint.innerHTML = bodyStorePage;
let megaSaleList = document.querySelector("#megaSaleList");

//SRC GET
const dataBaseStore = "https://striveschool-api.herokuapp.com/api/product/"; //GET method to this Api, will bring me array with objects

const renderCardBook = (book) => {
    return `<div class="col ">
    <div class="card mb-3" style="max-width: 440px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img class="img-fluid" src="${book.imageUrl}" alt="Book Cover">
          </div>
          <div class="col-md-8">
            <div class="card-body text-center py-0">
              <h5 class="card-title">${book.name}</h5>
              <small class="card-text mb-0">Dummy description : This a great Betseller</small>
              <div>
                <button type="button" class="btn btn-outline-warning btn-sm my-1"> <span class="px-2"><i class="fas fa-shopping-cart"></i></span> <span class="lead" > ${book.price} €</span></button> 
              </div>
              <div class ="text-monospace"> Category: ${book.brand}</div>
              <!--book.brand === book.category from the other API-->
              <p class="card-text"><small class="text-muted">Last updated: ${book.updatedAt}</small></p>
            </div>
          </div>
        </div>
      </div>
</div>`
//   return `<div class="col">
//     <div class="card mb-3" style="max-width: 440px;">
//         <div class="row no-gutters">
//           <div class="col-md-4">
//             <img class="img-fluid" src="${book.imageUrl}"alt="Book Cover">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${book.name}</h5>
//               <p class="card-text">${book.description}</p>
//               <p> <span>${book.brand}</span><span>${book.price}</span> </p> 
//               <!--book.brand === book.category from the other API-->
//               <p class="card-text"><small class="text-muted">Last updated: ${book.updatedAt}</small></p>
//             </div>
//           </div>
//         </div>
//       </div>
// </div>`;
};

window.onload = () => {
  console.log("Page loaded");
  const getAvailableBooks = () => {
    fetch(dataBaseStore, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZThjMTg5YzI2ZjAwMTU3ZjljMjgiLCJpYXQiOjE2MTU5ODA3MzgsImV4cCI6MTYxNzE5MDMzOH0.7ecaHsVow0aLX_UvZMM5X65HUmrVhWqs445ZEX-G258",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        megaSaleList.innerHTML = ""; // clean my list cards
        const renderAvailableBooks = (prev, book) => {
          return prev + renderCardBook(book);
        };
        const availableBooks = data.reduce(
          (prev, book) => renderAvailableBooks(prev, book),
          ""
        );
        megaSaleList.innerHTML = availableBooks;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getAvailableBooks();
};

/**
 *  fetch(urlPostMethod, {
      method: "POST",
      body: JSON.stringfy(newBookStore),
      headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZThjMTg5YzI2ZjAwMTU3ZjljMjgiLCJpYXQiOjE2MTU5ODA3MzgsImV4cCI6MTYxNzE5MDMzOH0.7ecaHsVow0aLX_UvZMM5X65HUmrVhWqs445ZEX-G258",
          "Content-Type:" "application/json"  
        },
    })
      .then((response) => {
          if (response.ok))
      })
 */
