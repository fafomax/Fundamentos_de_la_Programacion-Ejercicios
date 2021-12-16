// 06. Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

const numero = prompt("Ingrese el Monto a pagar: ");

if(numero >2000){      
    alert("El monto a pagar es: " + numero*0.9);
}else{  
    alert("El monto a pagar es:" + numero);
}
