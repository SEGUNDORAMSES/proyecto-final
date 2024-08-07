import { obtener_datos_configuracion } from "/js/SERVICIOS_CONFIGURACION.js";

export const mostrarhtml= async()=> {
  const Datos = await obtener_datos_configuracion();


  if (Datos) {
    let footer = document.getElementById("Footer").innerHTML = crear_footer(Datos.footer);
    let navbar = document.getElementById("navbar").innerHTML = crear_navbar(Datos.navbar);
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
    html += `<li class="${element.claseDeCss}"><a class="nav-link" href="${element.enlace}">${element.nombre}</a></li>`
  });


  html += `</ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
            </ul>
          </div>`

  return html




}

//footer
const crear_footer = (data) => {

  let html = ` <h3>Derechos de Autor de NoticiasTecnológicas</h3>
          <p>Sigue a NoticiasTecnológicas</p>
          <ul class="list-inline enlaces-pie" id="ListaFooter">`
  data.forEach(element => {
    html += `<a href="${element.enlace}" class="mx-2"><i class="${element.claseDeCss}">${element.nombre}</i></a>`
  });


  html += `</ul>`

  return html
}