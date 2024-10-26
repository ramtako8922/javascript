let traduccion=document.getElementById("traduccion");
let palabra=prompt("ingrese la palabra a traducir").toLocaleLowerCase();
traduccion.classList.add("palabra");

switch (palabra) {
    case "casa":
        traduccion.innerText=palabra +" Traducción al inglés: House"
        
        break;
    case "gato" :
         traduccion.innerText=palabra +" Traducción al inglés: Cat"
        break;
    case "mesa" :
       traduccion.innerText=palabra +" Traducción al inglés: Table"

       break;

       case "perro" :
       traduccion.innerText=palabra +" Traducción al inglés: Dog"
        break;


    default:

       traduccion.innerText=palabra +" Esa palabra no está en el diccionario"
        break;
}
