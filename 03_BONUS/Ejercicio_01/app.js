// 01. Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

let clave = 1234;
let balance = 50000;

let claveIngresada = prompt("Ingrese su clave de 4 digitos: ");

if (claveIngresada == clave){
    let dineroRetirar = prompt("¿Cuanto desea retirar?")
        if (balance >= dineroRetirar){
            alert("Su operacion se ha realizado con exito. Su balance es: " + (balance-dineroRetirar))
        } else {
            alert("Saldo insuficiente. Por favor, ingrese otro monto. Su balance actual es: $" + balance )
        }
    
} else{
    alert("Clave incorrecta")
}