const contanier = document.querySelector(".container");
const splitleft = document.querySelector(".left");
const splitright = document.querySelector(".right");

splitleft.addEventListener("mouseenter",()=>{
    contanier.classList.add("active-left")
});

splitleft.addEventListener("mouseleave",()=>{
    contanier.classList.remove("active-left")
});

splitright.addEventListener("mouseenter",()=>{
    contanier.classList.add("active-right")
});

splitright.addEventListener("mouseleave",()=>{
    contanier.classList.remove("active-right")
});