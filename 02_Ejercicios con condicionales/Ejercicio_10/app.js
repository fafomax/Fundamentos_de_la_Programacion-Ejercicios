// 10. Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.

let mes = prompt("Indica un mes (del 1 al 12) en numero.")

if(mes==1 || mes==3 || mes==5 || mes==7|| mes==8 || mes==10 ||mes==12){
    alert ("El mes " + mes + " tiene 31 días")
} else if (mes==2){
    alert("El mes: " + mes + " tiene 28/29 días.")
} else if (mes==2 || mes==4 || mes==6 || mes==9|| mes==11){
    alert ("El mes: " + mes + " tiene 30 días")
} else {
    alert ("No ingresaste un mes valido.")
}
