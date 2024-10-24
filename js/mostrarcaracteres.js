let frase=prompt("favor introducir la frase");
function mostrarCaracteres(frase){
    for(let i=0; i<frase.length;i++){
        let caracter=frase[i];
        if(isNaN(caracter)||caracter===' '){
            console.log(caracter);
        }
    }
}
mostrarCaracteres(frase);