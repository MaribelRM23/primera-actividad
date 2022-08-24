var fondo = document.querySelector("section");
var llantanimada1 = document.querySelector(".llanta1"); 
var llantanimada2 = document.querySelector(".llanta2"); 
var humos = document.querySelector(".humo"); 

fondo.addEventListener("click", animaciones);

function animaciones(){
    fondo.classList.add("animaciones");
    llantanimada1.classList.add("llanta");
    llantanimada2.classList.add("llantaa")
    humos.classList.add("animaciones");
}