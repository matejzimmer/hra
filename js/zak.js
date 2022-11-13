var zak = document.getElementById("zak"); 
var lavice = document.getElementById("lavice"); 
var pocitadlo = 0;
function jump(){ 
    zak.classList.add("animate"); 
    setTimeout(function(){ 
        zak.classList.remove("animate"); 
    }, 500) 
} 

var umrti = setInterval(function() {
    let zakTop = parseInt(window.getComputedStyle(zak).getPropertyValue("top"));
    let laviceLeva = parseInt(window.getComputedStyle(lavice).getPropertyValue("left"));
    if(laviceLeva<250 && laviceLeva>0 && zakTop>=400){
        lavice.style.animation = "none";
        alert("Zemřel si. Tvoje skore: "+ Math.floor(pocitadlo/10));
        pocitadlo=0;
        lavice.style.animation = "block 1s infinite linear";
    }
    if(pocitadlo==10000){
        alert("Vyhrál si, gratujuli");
    }
    else{
        pocitadlo++;
        document.getElementById("skore").innerHTML = Math.floor(pocitadlo/10);
    }
    
}, 10);

function vyhra(){
    if(pocitadlo==50){
        alert("Vyhrál si, gratujuli");
    }
}
