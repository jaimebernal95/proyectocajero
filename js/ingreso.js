function formula(){
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
}

function formula2(){
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
    if (Cantidad1>990) {
        return "Tu cuenta no puede exceder un monto mayor de $990 "
    }else if (Cantidad1<10) {
        return "Tu cuenta no puede tener un monto menor de $10 "
    }


}

function formula3(){
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
    if (Cantidad1>990) {
        return "Tu cuenta no puede exceder un monto mayor de $990 "
    }else if (Cantidad1<10) {
        return "Tu cuenta no puede tener un monto menor de $10 "
    }


}


function formula5(){
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
    if (Cantidad1>990) {
        return "Tu cuenta no puede exceder un monto mayor de $990 "
    }else if (Cantidad1<10) {
        return "Tu cuenta no puede tener un monto menor de $10 "
    }
    
}
