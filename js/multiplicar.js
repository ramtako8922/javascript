const resultado=document.querySelector(".resultado")

const numero=Number(prompt("ingrese el numero del que quiere conocer la tabla"))
let muestraResultado="";
for (var index = 1; index <= 10; index++) {

    let operacion=numero*index;

    console.log(operacion);
     
    
     muestraResultado+=numero+ " "+ "x"+" "+index+ "= "+operacion+"\n";
}
resultado.innerText=muestraResultado;