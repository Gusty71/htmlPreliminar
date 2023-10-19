document.getElementById("registartionform").addEventListener("submit", function(event){
    event.preventDefault();     //evita que el formulario se envie automactic.
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    //validacion basica del formulario
    if (password !== confirmPassword){
        alert("Las contarseñas no coinciden");
        return;
    }
    alert("Registro exitoso");      //mensaje de texto
    //restablece el formulario
    document.getElementById("registrationForm").requestFullscreen();
})

