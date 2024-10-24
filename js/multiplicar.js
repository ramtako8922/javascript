const resultado=document.getElementById("resultado");

const numero=parseInt(prompt("ingrese el numero del que quiere conocer la tabla"))

for (let index = 1; index < 10; index++) {

    let operacion=numero+index;
     
     resultado.innerHtml=numero+ " "+"x"+" "+index+" "+" ="
    
}