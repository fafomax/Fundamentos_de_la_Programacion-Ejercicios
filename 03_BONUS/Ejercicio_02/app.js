// 02. Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

let dia = prompt ("Ingrese su día de nacimiento: ");
let mes = prompt ("Ingrese su mes de nacimiento: ");

if (dia>=21 && dia<=31 && mes=="marzo" || dia>0 && dia<=19 && mes=="abril"){
    alert ("Su signo zodiacal es Aries.")
} else if
    (dia>=20 && dia<=30 && mes=="abril" || dia>0 && dia<=20 && mes=="mayo"){
    alert ("Su signo zodiacal es Tauro.")
} else if
    (dia>=21 && dia<=31 && mes=="mayo" || dia>0 && dia<=20 && mes=="junio"){
    alert ("Su signo zodiacal es Géminis.")
} else if
    (dia>=21 && dia<=30 && mes=="junio" || dia>0 && dia<=22 && mes=="julio"){
    alert ("Su signo zodiacal es Cáncer.")
} else if
    (dia>=23 && dia<=31 && mes=="julio" || dia>0 && dia<=22 && mes=="agosto"){
    alert ("Su signo zodiacal es Leo.")
} else if
    (dia>=23 && dia<=31 && mes=="agosto" || dia>0 && dia<=22 && mes=="septiembre"){
    alert ("Su signo zodiacal es Virgo.")
} else if
    (dia>=23 && dia<=30 && mes=="septiembre" || dia>0 && dia<=22 && mes=="octubre"){
    alert ("Su signo zodiacal es Libra.")
} else if
    (dia>=23 && dia<=31 && mes=="octubre" || dia>0 && dia<=21 && mes=="noviembre"){
    alert ("Su signo zodiacal es Escorpio.")
} else if
    (dia>=22 && dia<=30 && mes=="noviembre" || dia>0 && dia<=21 && mes=="diciembre"){
    alert ("Su signo zodiacal es Sagitario.")
} else if
    (dia>=22 && dia<=31 && mes=="diciembre" || dia>0 && dia<=19 && mes=="enero"){
    alert ("Su signo zodiacal es Capricornio.")
} else if
    (dia>=20 && dia<=31 && mes=="enero" || dia>0 && dia<=18 && mes=="febrero"){
    alert ("Su signo zodiacal es Acuario.")
} else if
    (dia>=19 && dia<=29 && mes=="febrero" || dia>0 && dia<=20 && mes=="marzo"){
    alert ("Su signo zodiacal es Piscis.")
}


/*
Aries: 21 de marzo al 19 de abril.
Tauro: 20 de abril al 20 de mayo.
Géminis: 21 de mayo al 20 de junio.
Cáncer: 21 de junio al 22 de julio.
Leo: 23 de julio al 22 de agosto.
Virgo: 23 de agosto al 22 de septiembre.
Libra: 23 de septiembre al 22 de octubre.
Escorpio: 23 de octubre al 21 de noviembre.
Sagitario: 22 de noviembre al 21 de diciembre.
Capricornio: 22 de diciembre al 19 de enero.
Acuario: 20 de enero al 18 de febrero.
Piscis: 19 de febrero al 20 de marzo.
*/