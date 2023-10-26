function validar() {

    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let error = false;


    document.getElementById("validar_usuario").innerHTML = "";
    document.getElementById("validar_clave").innerHTML = ""; 
    document.getElementById("validar_telefono").innerHTML = "";
    document.getElementById("validar_email"). innerHTML = "";

    if (usuario.value === "") {
            document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario";
            error = true;
            usuario.focus();
            error = true
        }
        if (clave.value.length < 8) {
            document.getElementById("validar_clave").innerHTML = "Debe completar el clave con 8 carateres como minimo";
            error = true;
            clave.focus();
            error = true
        }
        if (telefono.value) {
            document.getElementById("validar_telefono").innerHTML = "Debe completar el campo";
            error = true;
            telefono.focus();
            error = true
        }
        if (email.value) {
            document.getElementById("validar_email").innerHTML = "Debe completar el campo";
            error = true;
            email.focus();
            error = true
        }
    
    
        if (error === false) {
            alert("Dato enviado")
            document.getElementById("usuario").value = ""
            document.getElementById("validar_usuario").innerHTML = "";
            document.getElementById("clave").value = ""
            document.getElementById("validar_clave").innerHTML = "";
            document.getElementById("telefono").value = ""
            document.getElementById("validar_telefono").innerHTML = "";
            document.getElementById("email").value = ""
            document.getElementById("validar_email").innerHTML = "";
        }




        if (error)
            return false;
        else
            return true;
}



function sendForm(username, email, password, telefono) {
    console.log("Nombre: ", usuario);
    console.log("Password: ", clave);
    console.log("telefono: ", telefono);
    console.log("email: ", email);

    alert("Registro exitoso");      //mensaje de texto

    //restablece el formulario
    document.getElementById("registrationForm").requestFullscreen();
}
