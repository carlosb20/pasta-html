

function num(){

    var val = document.querySelector(".item1").classList;
    val.add('myStyle')

    const ca = document.querySelector(".item1")
    ca.innerHTML = 'carlos'
    
    console.log(val)
}


const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';

const divItem = document.querySelector("#cre")

async function getPosta(){

    const response = await fetch(url);
    const data = await response.json();

    const tp = document.createElement("p")
    divItem.appendChild(tp)

    tp.innerHTML = data['USDBRL'].bid + " $ ";
    tp.style.backgroundColor = 'green';
    tp.style.border = '1px solid red';
    tp.style.color = 'white'
    tp.style.textAlign = 'center'
    tp.style.borderRadius = '10px'
   
}

getPosta()

const fil = 'https://www.themoviedb.org/';

async function filmes(){
    
    const filme = await fetch(fil);
    const ver = await filme.json()

    console.log(ver)
}

filmes()
