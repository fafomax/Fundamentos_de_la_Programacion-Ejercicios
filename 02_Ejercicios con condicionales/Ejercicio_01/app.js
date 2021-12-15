// 01. Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error.


// Ejercicio 5:
let numero = prompt ("Ingrese un numero")

let digitos = numero.length;

if (numero >= 0){
    alert ("El numero tiene " + digitos + " digitos.");
} else {
    alert ("No ingresaste una medida"); 
}







let metros = prompt ("Escribe una medida en metros: ")

let pies = metros * 3.28084;
let pulgadas = metros * 39.3701;
let centimetros = metros * 100;

if (metros >= 0){
    alert ("La conversion de " + metros + " metros " + "es: " + pies + " pies, " + pulgadas + " pulgadas, " + centimetros + " centimetros.");
} else {
    alert ("Error");
}
