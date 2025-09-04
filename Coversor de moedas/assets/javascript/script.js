const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currecy-select")

 

function convertValues(){
     const inputCurrencyValue = document.querySelector(".input-currency").value
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
     const currencyValueConverted = document.querySelector(".currency-value")
     
   
     const dolarToday = 5.2
     const euroToday = 6.2
     const libraToday = 7.2
     const bitcoinToday = 2402401

    

     if(currencySelect.value == "dolar"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style:"currency", currency:"USD"
     }).format(inputCurrencyValue / dolarToday)
     }

     if(currencySelect.value == "euro"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
          style:"currency", currency:"EUR"
     }).format(inputCurrencyValue / euroToday)
     }

      if(currencySelect.value == "libra"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' 
          }).format(inputCurrencyValue / libraToday)
     }

     if(currencySelect.value == "bitcoin"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'
     }).format(inputCurrencyValue * bitcoinToday)
     }



     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style:"currency", currency:"BRL"
     }).format(inputCurrencyValue)
}
  
     



function changeCurrency(){
     const currencyName = document.getElementById("currency-name")
     const imgNew = document.getElementById("image-swap")
     

     
     if(currencySelect.value == "dolar"){
           currencyName.innerHTML = "Dólar"
           imgNew.src = "./assets/img/estados-unidos.png"
          

     }

     if(currencySelect.value == "euro"){
           currencyName.innerHTML = "Euro"
           imgNew.src = "./assets/img/euro.png"
           
     }

      if(currencySelect.value == "libra"){
           currencyName.innerHTML = "Libra"
           imgNew.src = "./assets/img/libra.png"
          
     }

      if(currencySelect.value == "bitcoin"){
           currencyName.innerHTML = "Bitcoin"
           imgNew.src = "./assets/img/bitcoin.png"
          
     }
     
     convertValues()

    
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
