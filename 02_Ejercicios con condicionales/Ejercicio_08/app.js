// 08. Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado, y 6 o más aprobado. 

let nota = prompt ("Ingrese la nota de su parcial (del 1 al 10): ")
 
if(nota >= 1 && nota  <= 3){
    alert("Aplazado");
} else if(nota > 3 && nota < 6){
    alert("Reprobado");    
} else if(nota >= 6 && nota <= 10){
    alert("Aprobado");
}
else {
    alert("Numero no valido");
}