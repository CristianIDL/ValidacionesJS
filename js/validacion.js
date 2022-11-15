// VALIDAR EL INPUT
/*
function isInputNumber(evt){
    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))){
        evt.preventDefault()
    }
}
*/

// VALIDACIÓN DE INFORMACIÓN

function validarNombre(){
    if(/^[a-zA-Z]/.test(nombre.value)){     
        if ((nombre.value).length < 4 || (nombre.value).length > 255){
            console.log("Nombre inválido");
            alert("El nombre solo puede incluír de 4 a 255 caracteres");
        }else{
            console.log("Nombre recibido");
            alert(`El nombre "${nombre.value}" es válido\nSu nombre ha sido recibido`);
        }
    } else {
        alert("El nombre solo puede incluir letras")
    }
}

function validarDespacho(){
        if((despacho.value).length < 4 || (despacho.value).length > 4){
            console.log("Despacho inválido, Razón: 'Los despachos no pueden tener un nombre menor a 4 carácteres'");
            alert("Los despachos deben tener un nombre de 4 carácteres");
        } else if ((despacho.value).charAt(0) == ("A") || (despacho.value).charAt(0) == ("B")){
            console.log(`Despacho inválido, Razón: 'Iniciado con ${(despacho.value).charAt(0)}'`);
            alert(`Los despachos no pueden empezar con ${(despacho.value).charAt(0)}. Ingresa un despacho que sea válido`);
        } else if (/\d/.test((despacho.value).charAt(1))|| /\d/.test((despacho.value).charAt(2)) || /\d/.test((despacho.value).charAt(3))){
            console.log(`Despacho inválido, Razón: 'Los ultimos 3 carácteres no pueden ser números`);
            alert(`Los ultimos 3 carácteres del despacho no pueden ser números. Ingresa un despacho que sea válido`);
        } else {
            console.log("Despacho recibido");
            alert("Despacho recibido");
        }
    }

function validarPuesto(){
    switch(puesto.value) { 
        case "JEFE_AREA": 
        case "DIRECTOR_COMERCIAL": 
        case "JEFE_PROYECTO": 
        case "ANALISTA":
        case "PROGRAMADOR": 
            console.log("Puesto recibido"), alert("Puesto recibido");
            break;
        default:
            console.log("Puesto Inválido"), alert(`"${puesto.value}" no es un puesto válido. Ingresa un puesto que sea válido`);
    } 
}

function validarEdad(){
    //primero verifica que sea un número
    if(/^\d+$/.test(edad.value)){
        if (parseInt(edad.value) < 18 ){
            console.log(`Edad inválida. Razón "'${edad.value}' es menor a la edad mínima requerida"`);
            alert("Debes tener al menos 18 años");
        } else if (parseInt(edad.value) > 67){
            console.log(`Edad inválida. Razón "${edad.value} excede la edad máxima requerida"`);
            alert(`${edad.value} excede la edad mínima requerida`);
        } else {
            console.log("Edad recibida");
            alert("Edad recibida");
        }
    } else {alert("Ingresa un valor numérico")}
}

function validarSueldo(){
    if (parseInt(sueldo.value) < 1000 || (sueldo.value).length < 3){
        console.log(`Edad inválida. Razón "${sueldo.value} es menor a la sueldo mínimo permitido"`);
        alert(`El sueldo ingresado es menor a la sueldo mínimo permitido`);
    } else if (parseInt(sueldo.value) > 6000){
        console.log(`Edad inválida. Razón "${sueldo.value} excede el sueldo máximo permitido"`);
        alert(`${sueldo.value} excede el sueldo máximo permitido`);
    } else {
        console.log("Sueldo válido")
        alert(`${sueldo.value} es válido. Sueldo recibido`);
        }
    }


function Retencion(){
    if(parseInt(sueldo.value) < 1000 || (sueldo.value).length < 3 || parseInt(sueldo.value) > 6000){
        //Hace lo mismo que en la anterior clase para ver que el campo de texto sirva
        console.log(`El sueldo ingresado no es válido para retención`);
        alert(`El sueldo ingresado no es válido para retención.\nDebe ser un valor entre 1000 y 6000`)
    }
    else if (parseInt(sueldo.value) >= 1000  ){       
        //Verifica si aparte de se mayor a 1000, es mayor a 2000
        if (parseInt(sueldo.value) >= 2000){
            //Verifica si aparte de se mayor a 2000, es mayor a 3000
            if (parseInt(sueldo.value) >= 3000){
                //Verifica si aparte de se mayor a 3000, es mayor a 4000
                if (parseInt(sueldo.value) >= 4000){
                   //Verifica si aparte de se mayor a 3000, es mayor a 5000
                    if (parseInt(sueldo.value) >= 5000){    
                        // Si es mayor a 5000 termina 
                        alert(`La retención por un sueldo de ${sueldo.value} es de: 0.14`);
                        //Aquí termina el flujo xd
                    
                    } else {alert(`La retención por un sueldo de ${sueldo.value} es de: 0.125`);} 

                } else {alert(`La retención por un sueldo de ${sueldo.value} es de: 0.11`);}

            } else {alert(`La retención por un sueldo de ${sueldo.value} es de: 0.95`); } 

        } else {alert(`La retención por un sueldo de ${sueldo.value} es de: 0.08`);}

    } else {
        console.log("No se, si salgo yo es que algo salió mal")
    }
}