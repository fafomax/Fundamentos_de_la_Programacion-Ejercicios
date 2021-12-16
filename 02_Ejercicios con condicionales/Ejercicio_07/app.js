// 07. Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

const frase = prompt("Escribi una frase: ");
const posicion = prompt("Elige una posición: ");
const letra = frase.charAt(posicion);


if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    alert("La letra en la posición " + posicion + " es una vocal.");

}else{
    alert("La letra en la posición " + posicion + " no es una vocal.");
}
