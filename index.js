

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

//--------------------------------------------------------------------------------------------------------

const key = 'd47b61bde3350c283c19a90cf0e4367e'


async function tempo(city){
    pass = 0;

   
    const urltem = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const re = await fetch(urltem);
    const tem = await re.json();
    
    

    if(tem.cod == 200){


        const foto = tem.weather[0]['icon']

        const imagem =  document.querySelector('#getimg')
        
        const setimg = document.createElement('img')
        setimg.src = `https://openweathermap.org/img/wn/${foto}@2x.png`
        
        const setp = document.createElement('p')

        const setname = document.createElement('p')

        const setH3 = document.querySelector('#H3')

        const tempo_min = document.querySelector('#tempo-min')

        const Humi = document.querySelector('#humi')

    
        
        setimg.style.margin =  '0'
        setimg.style.padding = '0'
        setimg.style.position = 'relative'
        setimg.style.left = '59px'
        setimg.style.bottom = '9px'

        setname.style.color = 'white'
        setname.style.textShadow = '2px 2px 2px black'
        

        setp.style.margin = '0px'
        setp.style.position = 'relative'
        setp.style.left = '168px'
        setp.style.padding = '0px'
        setp.style.textAlign = 'center'
        setp.style.color = 'white'
        setp.style.textShadow = '2px 2px 2px black'

       

        setp.innerHTML = 'Tempo : ' + tem.weather[0]['description']
        setname.innerHTML = 'Cidade : ' +  tem.name

        setH3.innerHTML = ' Tempo-max ' + Math.floor(tem.main.temp) + ' °C'
        tempo_min.innerHTML = ' Tempo-min ' + Math.floor(tem.main.temp_min) + ' °C'
        Humi.innerHTML = 'Umidade do tempo ' + tem.main.humidity 

        
        const conte = document.querySelector('#cont2')

        conte.style.display = 'block'

        
       
            imagem.appendChild(setname)
            imagem.appendChild(setimg)
            imagem.appendChild(setp)
        
           

    }else{

        alert('Por favor verifica o nome digita')
    }
     
}

document.querySelector("#search").addEventListener('submit',(evel)=>{
    evel.preventDefault();

    const city = document.querySelector("#nome").value;

    if(!(city == '')){

        tempo(city)
        document.querySelector("#nome").value ="";  

    }else{

        alert('enforme um cidade ')
    }   
    
})





















