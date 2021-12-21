// 03. Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 

let hora = prompt ("Ingrese la hora:");
let nombre = prompt ("Ingrese su nombre:");

if (hora >= 5 && hora < 12)  {
    alert ("Buenos Días " + nombre);
} else if (hora >= 12 && hora < 19){
    alert ("Buenas Tardes " + nombre);
} else if (hora >=19 && hora<=24 || hora>=0 && hora<5) {
    alert ("Buenos Noches " + nombre);
} else{
    alert ("Hora invalida.")
}