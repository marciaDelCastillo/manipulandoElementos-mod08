//const query = new URLSearchParams(location.search);

const main= document.querySelector("main");
const h2= document.querySelector("h2");
const p= document.querySelectorAll("p");
const a= document.querySelector("a");

window.addEventListener("load", () => {
    let name = prompt('Ingrese su nombre');
    if(name==""){
        h2.innerText += " invitado";
    }else{
        h2.innerText+=" "+name;
    }
    h2.style.textTransform = "uppercase";
    a.style.color = "#e51b3e";
    let respuesta = confirm("¿Desea colocar un fondo de pantalla?");
    if(respuesta){
        document.querySelector("body").classList.add("fondo");
    }
    for(let i=0;i<p.length;i++){
        if((i+1)%2==0){
            p[i].classList.add("destacadoPar")
        }else{
            p[i].classList.add("destacadoImpar")
        }
    }
    document.querySelector("main").style.display = 'block';
    

})
  