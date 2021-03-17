console.log("JScript connected");

let tbody = document.getElementsByTagName("tbody");
tbody[0] = "";
let users;

const fetchData = async () => {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    users = await response.json();
    console.log("Data Structure", users);

    const renderUser = (user) => {
      return ` <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
      </tr>`;
    };

    const renderAll = (curr, user) => {
      return curr + renderUser(user);
    };
    let allList = users.reduce(
      (curr, user) => renderAll(curr, user),
      ""
    );
    // console.log(allList);
    tbody[0].innerHTML = allList;
    // console.log(tbody[0]);

    const input = document.querySelector(".form-control");
    let queryU = "";
    input.addEventListener("change", () => {
      queryU = input.value;
      console.log(queryU);
      return queryU;
    });

    let names = [];
    users.forEach((user) => {
      names.push(user.name);
    });
    console.log(names);

    //   let search = names.filter((name)=>{
    //       return queryU === name
    //   })
    //   console.log(search);
  } catch (error) {}
};

fetchData();

//========================================================================================
// const getData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(arrayOfUsers => {
//         console.log(arrayOfUsers)
//         let names = []
//         const getNames = (arrayOfUsers)=>{
//             names = arrayOfUsers.foreach(user=>names.push(user.name))
//         }
//     })
// }

// window.onload = () =>{
//     getData()
//     }
