


function func(){
    document.getElementById("main").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"

    num.map((e)=>{
        e.classList.add("des")
        console.log(e)
    })

    document.getElementById("div2").innerHTML = "<img src='porfoli/youtube_.png' width=80px>foto</img>"
    
}

const num = [...document.getElementsByClassName("item")]


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




