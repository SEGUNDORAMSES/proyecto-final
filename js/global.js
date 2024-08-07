import { obtener_datos_configuracion } from "/js/SERVICIOS_CONFIGURACION.js";

export async function mostrarhtml() {
    const Datos = await obtener_datos_configuracion();


    if (Datos) {
        let footer = document.getElementById("Footer").innerHTML = crear_footer();
        let navbar = document.getElementById("navbar").innerHTML = crear_navbar();
    }


}





const crear_navbar = (data) => {

    let html = ` <a class="navbar-brand" href="#">
            <img src="img/1-Logo.png" alt="Logo NoticiasTecnológicas" class="navegacion-principal__marca">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="ListaNavbar">
            <ul class="navbar-nav mr-auto">`
              
            data.forEach(element => {
             html +=`<li class="${element.claseDeCss}"><a class="nav-link" href="#">"${element.enlace}"</a></li>`   
            });
           
             
           html+=`</ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
            </ul>
          </div>` 

    return html




}

//footer
const crear_footer = () => {

    let html = ` <h3>Derechos de Autor de NoticiasTecnológicas</h3>
          <p>Sigue a NoticiasTecnológicas</p>
          <ul class="list-inline enlaces-pie" id="ListaFooter">
            <!-- Aquí se insertarán los elementos del pie de página <li>términos condiciones</li> -->
            <a href="https://facebook.com" class="mx-2"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" class="mx-2"><i class="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" class="mx-2"><i class="fab fa-linkedin"></i></a>
          </ul>`

    return html
}