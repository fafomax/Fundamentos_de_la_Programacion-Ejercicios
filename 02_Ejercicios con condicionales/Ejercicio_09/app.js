// 09. Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

let numero1 = prompt("Indicar el primer numero");
let numero2 = prompt("Indicar el segundo numero");

if (numero1 > numero2) {
    alert ("El numero " + numero1 + " es mayor que " + numero2)
} else if (numero1 == numero2){
    alert ("Ambos numeros son iguales.")
} else {
    alert("El numero " + numero1 + " es menor que " + numero2)
}