 /* EX7 */   const changingH1 = () => {
    let selectFirstHeading = document.querySelector(`h1`)
    selectFirstHeading.innerText = `Iphonus` 
   //  console.log(selectFirstHeading)
}

/* EX8 */   const changePageBackground = () => {
   let selectbody = document.querySelector(`body`)
    selectbody.style.backgroundColor = `#342E37` //This is Black Coffee
    selectbody.style.color = `#FAFFFD` //This is BabyPowder
   //  console.log(selectbody)
}
   
/* EX9 */   const changeFooterAdress = () => {
   let selectFooterAdress = document.querySelector(`.footer h4`)
   selectFooterAdress.innerText = `Av Dr. Federico Rubio Y Gali 67`
   //  console.log(selectFooterAdress)
}
   
/* EX10 */   const addingCssToLinks = () => {

    let selectLinksAmazon = document.querySelectorAll(`a`)
    //  console.log(selectLinksAmazon)
   for (let i = 0; i < selectLinksAmazon.length; i++) {
       selectLinksAmazon[i].style.color = `#FA824C` //This is Mandarin            
   }
}
   
/* EX11 */   const togglingImages = () => {}
   
/* EX12 */   const coloringPrices = () => {}

