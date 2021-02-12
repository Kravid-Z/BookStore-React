window.onload = () => {
    const numbersBingoTable = []

    const creatingMyBingo = function ()  {
      let myBingoTable = document.querySelector("#myBingoTable")
      for (let i = 0; i < 76; i++) {
      const childDiv = document.createElement("div")
      childDiv.className = "bingoNumber"
      const bingoNumber = document.createElement("h3")
      bingoNumber.innerText = i +1
      childDiv.appendChild(bingoNumber)
      myBingoTable.appendChild(childDiv)
      numbersBingoTable[i] = childDiv
    }
  }
  creatingMyBingo()
}
// const numbersBingoTable = []
        
// const creatingMyBingo = function ()  {
//   let myBingoTable = document.querySelector("#myBingoTable")
//   for (let i = 0; i < 76; i++) {
//     const childDiv = document.createElement("div")
//     childDiv.className = "bingoNumber"
//     const bingoNumber = document.createElement("h3")
//     bingoNumber.innerText = i +1
//     childDiv.appendChild(bingoNumber)
//     myBingoTable.appendChild(childDiv)
//     numbersBingoTable[i] = childDiv
//   }
// }
