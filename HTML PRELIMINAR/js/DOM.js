let cadfooter=`
    <div class="textoredes">
    <h3>Nuestra Redes Sociales</h2></div>
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
    <a class="cambiocolorletra" href="contacto.html">Registro</a>
</div>
</div>
`
document.querySelector("header").innerHTML=cadheader


const { createApp } = Vue

  createApp({
    data() {
      return {
            url:"https://randomuser.me/api/?results=6",
            error:false,
            datos:[]
      }
    },
    methods:{
        fetchData(url){
            fetch(url) 
                .then(response => response.json()) 
                .then(data => {
                    this.datos=data.results
                });
        }
    },
    created(){
        this.fetchData( this.url)
    }
  }).mount('#app')