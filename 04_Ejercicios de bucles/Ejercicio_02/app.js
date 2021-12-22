// 02. Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

/*
let numero1 = parseInt(prompt ("Decime un numero"));
let numero2 = parseInt(prompt ("Decime otro numero"));
let numero3 = parseInt(prompt ("Decime otro numero"));
let numero4 = parseInt(prompt ("Decime otro numero"));
let numero5 = parseInt(prompt ("Decime uno mas"));

alert("El numero final es: " + (numero1 + numero2 + numero3 + numero4 + numero5));
*/

let numero=1;
let sumaNumeros = 0;

for (numero=1;numero<=5;numero++){
    let numeroIngresado = prompt("Ingrese un numero: ");
    sumaNumeros = parseInt(sumaNumeros) + parseInt(numeroIngresado);
}

alert (sumaNumeros);

