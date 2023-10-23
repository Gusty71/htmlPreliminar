/*document.getElementById("registartionform").addEventListener("submit", function(event){
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
})*/

let cadfooter=`
<div class="textoredes"><h3>Nuestra Redes Sociales</h2></div>

                <div class="redes">
                    <div><a href="https://www.instagram.com">
                        <img class="red" src="./imgs/instagram.png" alt=""></a>
                    </div>
                    <div><a href="https://www.facebook.com">
                        <img class="red" src="./imgs/facebook.png" alt=""></a>
                    </div>
                    <div><a href="https://www.whatsapp.com">
                        <img class="red" src="./imgs/whatsapp.png" alt=""></a>
                    </div>
                </div>
                <div class="domicilioycontacto">
                    <p class="infofooter">
                        Domicilio y contacto:
                        telefono: 11 2890-4550
                        Av. Saenz 420-
                        C.P. 1900 BV -Cap. Fed.-
                        Buenos Aires(Argentina)
                    </p>  
                </div>
`
document.querySelector("footer").innerHTML=cadfooter

let cadheader=`
<div class="contenedor-flex-navbar">
<div class="nav-item" id="logo">ENGLISH INSTITUTE</div>
<div class="flexmainhover nav-item">
    <a class="cambiocolorletra" href="index.html">Home</a>
</div>
<div class="flexmainhover nav-item">
    <a class="cambiocolorletra" href="sobrenosotros.html">Sobre nosotros</a>
</div>
<div class="flexmainhover nav-item">
    <a class="cambiocolorletra" href="cursos.html">Cursos</a>
</div>
<div class="flexmainhover nav-item">
    <a class="cambiocolorletra" href="contacto.html">Contacto</a>
</div>
</div>
`
document.querySelector("header").innerHTML=cadheader