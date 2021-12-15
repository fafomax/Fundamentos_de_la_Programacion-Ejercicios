// 09. Solicitar un texto y mostrarlo todo menos la primera letra.

let frase = prompt ("Ingrese una FRASE: ");

const newStr = frase.slice(1);
alert ("La frase quedaria: " + newStr );