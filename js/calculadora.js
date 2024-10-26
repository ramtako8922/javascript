let pantalla = document.getElementById("pantalla");
let expresion = "";

function escribir(numero) {
  expresion += numero;
  pantalla.value = expresion;
}

function operar(operador){
  expresion+=operador;
  pantalla.value=expresion;

}

function limpiar(){
  expresion="";
  pantalla.value="";

}

function borrar() {
  expresion=expresion.slice(0,-1);
  pantalla.value=expresion;
  
}

function calcular(){
  try {

    pantalla.value=eval(expresion);
    expresion=pantalla.value;

    
  } catch (error) {
    pantalla.value="Error "+error;
    expresion=""
    
  }

}
  



