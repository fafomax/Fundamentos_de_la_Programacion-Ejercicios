// 10. Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

let texto = prompt ("Ingresa tu nombre en minusculas: ");

const primerCaracter = texto.charAt(0).toUpperCase();
const restoDeLaCadena = texto.slice(1, texto.length);

alert ("La frase quedaria: " + primerCaracter + restoDeLaCadena);
