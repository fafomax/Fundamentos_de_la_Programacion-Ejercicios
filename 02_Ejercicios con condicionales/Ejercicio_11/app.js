// 11. Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

let numero1 = parseInt(prompt("Indicar el primer numero"));
let numero2 = parseInt(prompt("Indicar el segundo numero"));
let numero3 = parseInt(prompt("Indicar el tercer numero"));


if(numero1>numero2 && numero1>numero3){
    alert("El numero: " + numero1 + " es mayor que el resto.")
}

else if (numero1<numero2 && numero2>numero3){
    alert("El numero: " + numero2 + " es mayor que el resto.")
} 
else if (numero3>numero2 && numero3 >numero1){
    alert("El numero: " + numero3 + " es mayor que el resto.")
}
