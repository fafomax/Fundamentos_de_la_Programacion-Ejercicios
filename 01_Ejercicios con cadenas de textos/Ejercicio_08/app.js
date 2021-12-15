// 08. Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

let letra = prompt ("Ingrese una LETRA a buscar: ");
let frase = prompt ("Ingrese una FRASE: ");

if (frase.includes(letra)){
    alert ("La palabra incluye la letra: " + letra);
} else {
    alert("La palabra NO incluye la letra: "+ letra);
}