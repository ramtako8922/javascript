//estas son variables declaradas en el lenguaje JavaScript
    //var nombre="Ricardo";
 
    var numero2=34.50;
    var decision=true;

    numero2=56.70
    alert("El valor de la variable es " +numero2);
   
    // Comentario en linea
   // alert(" hola"+ nombre + "tienes"+ numero+ "años de edad y pesas "+ numero2+ "¿es esto " + decision)
 
//Comentario en bloque

   /* nombre="juan"
   nombre=354

   const nombre2="Jose"
   alert(nombre2)

   function probrvariables() {
      let nombre="Deisy"
      alert(nombre);

      
      if(numero==54){
        alert("este chico se llama "+ nombre)
      }

   }

   nombre2="Fabiola"
    
  
    probrvariables();

    alert(nombre); */

    palabra="hola";

   // alert(palabra);

    var x;
     console.log(x)
     x=5;

     console.log(x)

    var palabra;

    const pi=3.14;

    function mostrarnombre() {
        let nombre="Karla"
        console.log(nombre)
        if (nombre=="Paola") {

            console.log(" se llama " + nombre)
            
        } else {

            console.log("no, ella se llama "+nombre)

            //No se puede cambiar el valor

            console.log(pi);

            
        }
    }







    mostrarnombre();

    //console.log(nombre);

    console.log(pi);

    let apellido="Mejía";

    let numero=34;
    let decimal=23.34;
    let verdadero=true;
    
    var animal;
    console.log(typeof(numero));
    console.log(typeof(decimal));
    console.log(typeof(verdadero))
    console.log(typeof(apellido));
    console.log(typeof(animal));

    //Definición de Objeto el cual es una estructura de datos
    

     
     

     
     //Arreglos
     miArray=[1,2,3,4,6,7];
     console.log(miArray);
     console.log(miArray.length)

     miArray.push(8);
     miArray.push(10);

     console.log(miArray);
     miArray.pop()
     console.log(miArray);

     miArray2=[1,"fabio",true,false];
     console.log(miArray2);
     //Operaciones con fechas
     let fechaActual=new Date();
     console.log(fechaActual);
     console.log(fechaActual.getFullYear());
     console.log(fechaActual.getDate());
     console.log(fechaActual.getMonth());

     //Expresiones regulares

     let expresion=/hello/i;

     let saludo="hello Ricardo";
     console.log(expresion.test(saludo));
     console.log(expresion.exec(saludo));

     //otra forma de definir expresiones regulares


     let re = new RegExp("ab*c");
     let propiedad="el abaco es muy bonito";
     console.log(re.test(propiedad)); //true
     console.log(re.exec(propiedad));

     //Operaciones matemáticas con Math

     let cantidad=64;

     let cantidad2=4.5;

     console.log(Math.sqrt(cantidad));

     console.log(Math.floor(cantidad2));

     let numeroRandom= Math.random();
     console.log(numeroRandom);

     function getRandom(min,max){
       let nRandom=Math.round(Math.random()*(max-min)+min) ;

        console.log(nRandom);
     }

     getRandom(10,150);


     var persona={
        nombre: "Pablo",
        edad:34,
        profesión: "Doctor",
        estatura: 1.50,
        direccion:{
            casa: 12,
            barrio:"morichal"

        }


     };

     //Acceso a propiedades
     console.log(persona)
     console.log(persona.edad);
     console.log(persona.estatura);
     console.log(persona.profesión);

     console.log(persona.direccion.casa);

     console.log(persona["direccion"].casa)

     // la variable persona 2 tienes los mismos datos de la variable persona porque apunta a la misma referencia en memoria
     let persona2=persona; //Apunta al mismo espacio en memoria de la variable persona
      //Persona 2
      console.log("persona 2");
     console.log(persona2);

     persona2.nombre="Juan";
     //Persona 1
     console.log("persona 1");
     console.log(persona);
    


     let personaJson=JSON.stringify(persona);
     console.log(personaJson);

     let personaObjeto=JSON.parse(personaJson);

     console.log(personaObjeto);
    
     //uso de estructura de datos map


     let mapa= new Map();

     mapa.set("ciudad","Madrid");
     mapa.set("Coordenada",23.45)
     mapa.set("capital","Bogotá");

     mapa.get("ciudad");

     console.log(mapa);

     console.log(mapa.get("ciudad"));
     console.log(mapa.size);

     let promesa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const datos = {
        nombre: 'ricardo',
        edad: 35
            };
            //si todo sale bien
            resolve("Operación exitosa" ,datos);

        },5000)
        
     })

     promesa.then((datos)=>{
        console.log(datos);
     })

     let numero3=123456.6789
     console.log(new Intl.NumberFormat("es-ES").format(numero3));
     console.log(new Intl.NumberFormat("es-ES").format(new Date()));

     //Funcioness escristas de la forma tracional
      
    function operaciones(num1, num2) {
        let resultado=num1+num2;
        let resultado2=num1-num2;
        let resultado3=num1*num2;
        let resultado4=num1/num2;
       
        return resultado;
        
    }

    console.log("esta es la función "+operaciones(5,2));

    //fuciones tipo flecha

    const operaciones2=(num1, num2)=>{
        let resultado4=num1/num2;

        return resultado4;

    }

    console.log("esta es la función tipo flecha "+operaciones2(5,2));

    //Estructuras de Control
   
    //uso de condicionales

    const compararValores=()=>{
        num1=8;
        num2=3;

        if (num2>num1) {

           

            console.log(num1+ "es mayor que "+num2);
            
        }else{


            console.log(num2+ "es menor que "+num1);
        }


    }

    compararValores();

    



    const compararEdades=(edad)=>{
        if(edad<=5){
        console.log("Eres un niño")
        

    }else if(edad>5 && edad<=15 ){
        console.log("Eres un adolescente")

    } else if(edad>15 && edad<=28 ){
        
        console.log("Eres  adulto joven");
   

    }
    else if(edad>28 && edad<=55){

        console.log("Eres  adulto ");
    }

    else{
        

        console.log("Eres un anciano");
    }
    }

    compararEdades(60);

    const validarIndependencia=(edad,casa)=>{

        if(edad>=18){
            if(casa==true){

                console.log("ya eres independiente");
            }
        }
        
    }

    validarIndependencia(20,true)

    const validarIMC=(peso, altura)=>{
        altura=1.70
        peso=12;

        if(altura>=1.50 || peso>=30){
            console.log(" estas gordito");
        }

    }

    validarIMC();

    /*
    operadores de comparación
    > mayor que
    < menor que
    >= mayor o igual
    <= menor o igual
    = igual que
    
    == es igual que
    != es diferente de

    Operadores lógicos

    && operador y
    || operador o

    */

    //switch

    let color="rojo"

    switch (color) {
        case "verde":
            console.log("estas pintando de verde");
            
            break;
        case "rojo":

        console.log("estas pintando de rojo");
        break;

        case "morado":
        console.log("estas pintando de roja");
        break;

        default:
        console.log("no tengo ese color para pintar");
            break;
    }

    /*  let nombre6=prompt("ingrese su nombre");
    alert( "TE LLAMAS "+ nombre6);
  */



    /*  const calucladora=(val1,val2)=>{
    let opcion=prompt("ingre la opereción a relizar")
      
    switch (opcion) {
        case "suma":
             alert(val1+val2); 
            
            break;
        case "resta":

      alert( val1-val2);
        break;

        case "multiplicación":
        alert( val1*val2);
        break;

        case "división":
        alert( val1/val2); 
        break;


        default:
            alert("no tengo esa operación");
            break;
      }

    }

    calucladora(34,56); */

    //bucles
    
    //For

    /* array=[1,2,3,4,5,6];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        alert(element);


        
    }  */

    function contarNumeros(numLimite) {
        let resultado=0;
        for (let index = 1; index <= numLimite; index++) {
            
            alert(index) 
            
        }
        
        
    }

    contarNumeros(10);

    //While

    let suma = 0;
    while (true) {
        let entrada = prompt("ingrese un numero o escribe  salir para terminar")
        if (entrada.toLocaleLowerCase() === "salir") {
            break;
        }
        suma += parseInt(entrada);
    }
    console.log("la suma total es :", suma);




//do While
 let contador = 1;
    do {
        console.log("contador es", contador);
        contador++;
    } while (contador <= 5);


