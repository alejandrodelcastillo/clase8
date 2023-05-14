const moreOptions = document.querySelector("#bdescanso");
const bShowMovileLink = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".link");
const descansoMenu = document.querySelector(".descanso .menu");

bShowMovileLink.addEventListener("click", (e) => {
    e.preventDefault();
    movileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    descansoMenu.classList.toggle("show");
});

const imagenes = [
{
    id:"caballos.jpg",
},
{
    id:"Dique_otras_(1).jpg",
},{
    id:"Embudo_Dique_Celestino_Gelsi.jpg",
},{
    id:"Vertiente_del_Dique_Celestino_Gelsi.jpg",
},
]

const sliderContainer = document.querySelector("#slider");
const crrentContainer = document.querySelector("#current");
const imagenesContainer = document.querySelector("#imagenes-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) =>{
    current = current + 1 < imagenes.length ? current + 1: current;
    renderCurrentImagenes(imagenes[current].id);
});
bPrev.addEventListener("click", (e) =>{});

function renderCurrentImagenes(id){
    currentContainer.innerHTML = "";

}