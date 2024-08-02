//alert("working")
//navbar
import{mostrarhtml} from "/js/crearhtml.js"

document.addEventListener('DOMContentLoaded', ev => {
    mostrarhtml()
    mostrar_datos_configuracion()
})



function mostrar_datos_configuracion() {
//truco//!fetch
let url="/js/Configuraciones.json"
fetch(url)

    .then(response => response.json())

    .then(data => console.log(data));

    
}