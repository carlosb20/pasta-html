


function func(){
    document.getElementById("main").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"


    document.getElementById("div2").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"
    
    document.getElementById("div_4").style.backgroundColor = "green"
}




mudaCor()
function mudaCor(){

    let muda_cor = document.getElementById("div_4");
    console.log(muda_cor)

    if (muda_cor.style.background == "blue"){
        
        muda_cor.style.transition = "backgroundColor 4s";
        muda_cor.style.backgroundColor = "red"

    }else{

        muda_cor.style.backgroundColor = "blue";
        muda_cor.style.transition = "backgroundColor 4s"

      
    }

    setTimeout(mudaCor,3000);
}



var myIdex = 0;
carousel();

function carousel(){

    var i;
    var x = document.getElementsByClassName("mySlides")
    
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
       
    } 
    myIdex ++;
    if (myIdex > x.length){

        myIdex = 1
    }
    x[myIdex-1].style.display = "block";
    setTimeout(carousel,6000);
}




