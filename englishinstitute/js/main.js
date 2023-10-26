function validar() {
    let usuario = document.getElementById("email");
    let clave = document.getElementById("clave");
    let error = false;
document.getElementById("validar_email").innerHTML = "";
document.getElementById("validar_clave").innerHTML = "";    
    if (email.value == "") {
        document.getElementById("validar_email").innerHTML = "Este campo es obligatorio";
        error = true;
        email.focus();
    }
    if (clave.value.length<8) {
        document.getElementById("validar_clave").innerHTML = "Debe completar la clave con 8 carateres como minimo";
        error = true;
        clave.focus();
    }
    if (usuario.value == ""){
        document.getElementById("validar_usuario").innerHTML = "Este campo es obligatorio";
        error=true;
        usuario.focus();
    }
 
    if (error == false) {
        alert("¡Ya estás registrado!")
        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "";
    }




    if (error)
        return false;
    else
        return true;
}




