function ingresar(form){
    if (form.u.value == "Jaime"){
        if (form.c.value == "9876"){
            location = "../html/transferenciasjaime.html"
        } else {
            alert("Contraseña incorrecta")
        }
} else if (form.u.value == "Enrique"){
        if (form.c.value == "0000"){
            location = "../html/transferenciasenrique.html"
        } else {
            alert("Contraseña incorrecta")
}
} else if (form.u.value == "Manuel"){
        if (form.c.value == "1111"){
            location = "../html/transferenciasmanuel.html"
        } else {
            alert("Contraseña incorrecta")
        }
 } else {
        alert("Usuario incorrecto");
    }
}