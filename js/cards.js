
import { obtener_datos_Apirick } from "/js/SERVICIOS_CONFIGURACION.js";

document.addEventListener('DOMContentLoaded', ev => {
  mostrarcard()
})
export const mostrarcard= async()=> {
    const Datos = await obtener_datos_Apirick();


    if (Datos) {
        let noticias = document.getElementById("Noticias").innerHTML = crear_tarjetas_noticias(Datos);
       
    }


}






const crear_tarjetas_noticias=(data)=> {
    let html = ""
    
    
    
    
    data.forEach(element => {
      html += ` <section class=" banner  col-lg-4 ">
      <div class="card h-100">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor.</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>
    </section>`
    });
    
 

    return html


}