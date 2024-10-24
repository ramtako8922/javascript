const respuesta=document.getElementById("respuesta")
const numero=parseInt(prompt(" ingrese numero a analizar"));

if (numero%2==0) {

    respuesta.innerText=" el numero " + numero +" es par"
    respuesta.classList.add("respuesta");
    
} else {
    respuesta.innerText=" el numero " + numero +" es impar"
    respuesta.classList.add("respuesta");
    
}