// 12. Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte una alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. (Ej.: La cerveza cuesta $50 y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

let edad = prompt("Ingrese su edad");
let bebida = prompt("Ingrese una bebida (Cerveza, jugo, agua).");
let costoCerveza = parseInt(50);
let costoJugo = parseInt(30);
let costoAgua = parseInt(20);

if( bebida == "cerveza" && edad < 18){
    alert ("No puede realizar la compra de alcohol por ser menor edad.")
}
else if ( bebida == "cerveza" && edad >= 18){
    let vuelto = prompt("El costo de la cerveza es de: " + costoCerveza + ". Con cuanto va a pagar?");
        if(vuelto<costoCerveza){
            alert("ERROR. El monto con el que va a pagar es menor que el precio del producto.")
        }else{
            alert("Su vuelto es: " + (vuelto - costoCerveza))
        }
        
}
else if( bebida == "jugo" ){
    let vuelto = prompt("El costo del Jugo es de :" + costoJugo + " Con cuanto va a pagar?")
    if(vuelto<costoJugo){
        alert("ERROR. El monto con el que va a pagar es menor que el precio del producto.")
    }else if (vuelto>costoJugo){
        alert("Su vuelto es: " + (vuelto - costoJugo))
    }
}

else if( bebida == "agua" ){
    let vuelto = prompt("El costo del Agua es de :" + costoAgua + " Con cuanto va a pagar?")
    if(vuelto<costoAgua){
        alert("ERROR. El monto con el que va a pagar es menor que el precio del producto.")
    }else if (vuelto>costoAgua){
        alert("Su vuelto es: " + (vuelto - costoAgua))
    }
}

