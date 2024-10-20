let boton=document.getElementById("boton");
let titulo=document.getElementById("titulo");
let boton2=document.getElementById("boton2");
let contenido=document.getElementById("contenido")
let boton3=document.getElementById("boton3");
let boton4=document.getElementById("boton4");
let bonton5=document.getElementById("boton5");
let boton6=document.getElementById("boton6")
let parrafo=document.getElementById(" contenido-parrafo");
let contenido2=document.getElementById("contenido2");
let input=document.getElementById("input").value
let texto=document.getElementById("texto");



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
    titulo.style.display="none"
    
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

    texto.innerHTML=" esto me llega desde el input "+ valor
;

})






