


function func(){
    document.getElementById("main").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"


    document.getElementById("div2").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"
    
    document.getElementById("div_4").style.backgroundColor = "green"
}



var getCores = ['blue','orange','green','silver','black']
mudaCor()
function mudaCor(){

    for (i = 0; i < getCores.length; i++){
        
        const val = document.getElementById("div_4")
        val.style.backgroundColor = getCores[i]
        console.log(getCores[i])
    }


    setTimeout(mudaCor,5000);
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




