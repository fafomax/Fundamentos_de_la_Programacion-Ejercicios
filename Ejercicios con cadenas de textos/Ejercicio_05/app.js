// 05. Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

let numero = prompt ("Ingrese un numero")

let digitos = numero.length;

if (numero >= 0){
    alert ("El numero tiene " + digitos + " digitos.");
} else {
    alert ("No ingresaste un numero.")
}