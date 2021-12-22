// 0. Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.


let clave = 1234;
let balance = 100000;
let bucle = true; 



let claveIngresada = prompt("Ingrese su clave de 4 digitos: ");

for (bucle=true; bucle==true;){
    if (claveIngresada == clave){
        let dineroRetirar = prompt("¿Cuanto desea retirar?")
            if (balance >= dineroRetirar){
                alert("Su operacion se ha realizado con exito. Su balance es: " + (balance-dineroRetirar));
                let repetir = prompt("Desea seguir operando?")
                    if(repetir=="si" || repetir=="SI" || repetir=="Si"){
                        bucle=true;
                        balance= balance-dineroRetirar;
                    } else {
                        bucle=false;
                    }  
            } else {
                alert("Saldo insuficiente. Por favor, ingrese otro monto. Su balance actual es: $" + balance );
                
            }
        
    } else{
        alert("Clave incorrecta")
        bucle=false;
        

    }

}

