const section= document.querySelector("section");
const h1= document.querySelector("h1");
const article= document.querySelector("article");

window.addEventListener("load", () => {

    h1.innerText += "AGREGAR PELÍCULAS";
    h1.classList.add("titulo");
    article.classList.add("fondoTransparente");
    section.classList.add("fondoCRUD");

})