const input = prompt('Introduzca la frase:');
const input_limpia = input.toLowerCase().trim().replace(/\s/g,'');

document.write('<br />La frase introducida es → ' + input + '<br /><br />');
document.write('<br />La frase limpia es → ' + input_limpia + '<br /><br />');

for (i=0, j=(input_limpia.length-1); i<input_limpia.length; i++, j--) {
    document.write('<tr><td>' + input_limpia[i] + '</td>' + '<td>' + input_limpia[j] + '</td></tr>');
    if (input_limpia[i] == input_limpia[j]) {
        continue;
    } else {
        alert('No coincide');
        break;
    }
}