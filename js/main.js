//alert("working")
//navbar
import { mostrarhtml } from "/js/global.js"
//import { mostrar_datos_consola } from "/js/consultarJson.js"
//import { mostrar } from "/js/CREARHTML2.JS"
//import { crear_tabla } from "/js/CREARHTML2.JS";
import { obtener_datos_configuracion,obtener_datos_Apirick } from "/js/SERVICIOS_CONFIGURACION.js";
document.addEventListener('DOMContentLoaded', ev => {
    mostrarhtml()
    //mostrar_datos_consola()
    //mostrar()
    //crear_tabla()
    obtener_datos_configuracion()
    obtener_datos_Apirick()
})

