

function num(){

    var val = document.querySelector(".item1").classList;
    val.add('myStyle')

    const ca = document.querySelector(".item1")
    ca.innerHTML = 'carlos'
    
    
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


const btn = document.createElement("button");
btn.style.backgroundColor = 'orange'
btn.style.border = '1px solid white'
btn.style.borderRadius = '10px'
btn.style.color = 'blue'
btn.innerHTML = 'click mim !';

btn.addEventListener('mouseenter',()=>{

    btn.style.transform = 'scale(1.1)'
    btn.style.cursor = 'pointer'
})

btn.addEventListener('mouseleave',()=>{

   
    btn.style.transform = 'scale(1.0)'
    
})

const div_item = document.querySelector(".item2")

div_item.appendChild(btn)





























