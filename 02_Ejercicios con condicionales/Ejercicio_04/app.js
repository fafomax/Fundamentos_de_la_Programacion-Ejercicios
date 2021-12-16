// 4. Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.

const primerNumerito = prompt("Escribi un numero");
const segundoNumerito = prompt("Escribi otro numero: ");
const resultadoSuma = parseFloat(primerNumerito)+parseFloat(segundoNumerito);

console.log("La suma es: " + resultadoSuma);

if(resultadoSuma%2==0){
    alert("El número introducido es par.")
} else {
    alert ("El número introducido es impar.")
}