

function num(){

    var val = document.querySelector(".item1").classList;
    val.add('myStyle')

    const ca = document.querySelector(".item1")
    ca.innerHTML = 'carlos'
    
    
}

//-------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------

const valor = [...document.getElementsByClassName("item3")]




valor.map((el) => {

    const p = document.createElement('p')
    p.style.fontSize = '40px'
    p.style.textShadow = '1px 1px red'
    p.innerHTML = 'carlos alberto soares nascimento'
    
    const das = document.querySelector("#pos1")
    das.style.borderRadius = '10px'
    das.innerHTML = 'div id = pos1'
    das.style.backgroundColor = 'pink'
    das.style.border = '1px solid green'
    das.style.textAlign = 'center'
    
    const pos2 = document.querySelector("#pos2")
    pos2.style.backgroundColor = 'orange'
    pos2.innerHTML = 'div id pos2'
    pos2.style.borderRadius = '10px'

    const pos3 = document.querySelector("#pos3")
    pos3.style.backgroundColor = '#00bfff'
    pos3.innerHTML = 'div id pos2'
    pos3.style.borderRadius = '10px'

    const pos4 = document.querySelector("#pos4")
    pos4.style.backgroundColor = 'green'
    pos4.innerHTML = 'div id pos2'
    pos4.style.borderRadius = '10px'
    
    das.appendChild(p)

})

// cb9799f1bfc9e4663813cd632bccb561

const tem = "http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=parauapebas&state=PA&token=cb9799f1bfc9e4663813cd632bccb561"


async function tempo(){

    const re = await fetch(tem);
    const Tempo = await re.json();
    console.log(Tempo)
}

tempo()





















