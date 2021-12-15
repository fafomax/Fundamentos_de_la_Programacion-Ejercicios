// 07. Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
let frase = prompt ("Ingrese una frase: ");

var replaced = frase.split(' ').join('*');
alert ("La frase final es: " + replaced)