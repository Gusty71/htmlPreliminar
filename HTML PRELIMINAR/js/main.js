
document.getElementById("registartionform").addEventListener("submit", function(event){
function validateForm(event) {
    event.preventDefault();     //evita que el formulario se envie automactic.
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    //validacion basica del formulario
    if (username.trim() === ""){
        alert("Por favor, ingresa tu nombre: ");
        return;
    } 
    if (password !== confirmPassword){
        alert("Las contarseñas no coinciden");
        return;
    }
    if (telefono.trim() === "") {
        alert("Por favor, ingresa tu nro telefonico: ")
    }
    if (email.trim() === "") {
        alert("Por favor, ingresa tu correo electronico: ");
        return;
    }
        
     // Enviar el formulario si pasa la validacion
     sendForm(username, password, telefono, email)
}
function sendForm(username, email, password, telefono) {
    console.log("Nombre: ", username);
    console.log("Password: ", password);
    console.log("telefono: ", telefono);
    console.log("email: ", email);

    alert("Registro exitoso");      //mensaje de texto

    //restablece el formulario
    document.getElementById("registrationForm").requestFullscreen();
}
