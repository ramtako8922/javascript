
let validacion=document.getElementById("validacion");


const validarContraseña=(event)=>{
   
    event.preventDefault();
    const contraseña=document.getElementById("contraseña").value
    const input=document.getElementById("contraseña")

    validacion.style.display = "block";

    if (contraseña==="1234") {
        validacion.classList.add("validacion")
        validacion.classList.remove("validacionno")
        validacion.innerText="inicio de sesión exitoso"
        
        
    } else {
        validacion.classList.add("validacionno")
        validacion.classList.remove("validacion")
         validacion.innerText="Contraseña incorrecta"
        
    }
    setTimeout(()=>{
        validacion.style.display="none"
        
    },2000)
    document.getElementById("contraseña").value=""
    input.focus()

}
