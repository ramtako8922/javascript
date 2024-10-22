let boton=document.getElementById("boton");
let titulo=document.getElementById("titulo");
let boton2=document.getElementById("boton2");
let contenido=document.getElementById("contenido")
let boton3=document.getElementById("boton3");
let boton4=document.getElementById("boton4");
let bonton5=document.getElementById("boton5");
let boton6=document.getElementById("boton6");
let boton7=document.getElementById("boton7");
let boton8=document.getElementById("boton8");
let boton9=document.getElementById("boton9");
let boton10=document.getElementById("boton10");
let boton11=document.getElementById("boton11");
let parrafo=document.getElementById(" contenido-parrafo");
let contenido2=document.getElementById("contenido2");
let input=document.getElementById("input").value
let texto=document.getElementById("texto");
let parrafo2=document.getElementById("parrafo2")
let titulo2=document.getElementById("content-titulo")
let items=document.querySelectorAll(".item")
console.log(items);





//console.log(boton);
//console.log(titulo);

console.log(input);

boton.addEventListener('click',()=>{
    titulo.textContent="Titulo Cambiado";
})

boton2.addEventListener('click', function() {
    contenido.style.color="blue";
    
})

boton3.addEventListener('click', function() {
   if (titulo.style.display="none") {

    titulo.style.display="block"
    
   }else{
    titulo.style.display="none"
    
   } 
    
})

boton4.addEventListener("click",function () {
    contenido.style.backgroundColor="gray";
    
})
parrafo.innerHTML="<p > este es un párrafo hecho en js</p>"

bonton5.addEventListener('click',()=>{
    parrafo.remove();
})



document.getElementById("boton6").addEventListener("click", function() {
    // Capturar el valor del input
    const valor = document.getElementById("input").value;
    
    // Mostrar el valor en la consola
    console.log(valor);

    texto.innerHTML=" esto me llega desde el input "+ valor;

})

const ponerClase=()=>{
    boton7.addEventListener('click',()=>{
        parrafo2.classList.add("parrafo");
    })

}

const cambiarClase=()=>{
    boton8.addEventListener('click',()=>{
        titulo2.classList.toggle("parrafo2")
    })

}

const agregarTitulo=()=>{
    boton9.addEventListener('click',()=>{
        titulo2.innerHTML="<h2> Este es un titulo agregado </h2>"
    })

}

const clickBoton=()=>{
    boton10.addEventListener('click',()=>{
        boton10.textContent="boton clickeado"
        boton10.classList.add("boton")
    })

}


 
items.forEach(item=>{
            item.style.backgroundColor="green"

        })
            




        
        
   












