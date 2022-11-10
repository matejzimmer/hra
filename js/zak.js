var zak = document.getElementById("zak");
var lavice = document.getElementById("lavice");
function jump(){
    zak.classList.add("animate");
    setTimeout(function(){
        zak.classList.remove("animate");
    }, 500)
}
function pohyb(){
    lavice.classList.add("animace");
}