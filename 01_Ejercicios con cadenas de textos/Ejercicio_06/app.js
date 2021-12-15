// 06. Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

let frase = prompt ("Ingrese una frase: ");

var ultimoCaracter = frase.charAt(frase.length - 1);
alert ("Su ultimo caracter de la frase es: " + ultimoCaracter);