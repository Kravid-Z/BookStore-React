console.log("JScript connected");


const fetchData = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let users = await response.json();
      console.log("Data Structure",users);

      const input = document.querySelector(".form-control")
      let queryU =""
      input.addEventListener("change",()=>{
          queryU = input.value
          console.log(queryU);
          return queryU  
      })
      
        let names = []
         users.forEach(user => {
            names.push(user.name)
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