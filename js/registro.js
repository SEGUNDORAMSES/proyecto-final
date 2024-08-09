//alert ("work")

import {insertar_datos_usuarios} from "/js/SERVICIOS_CONFIGURACION.js";

console.log(insertar_datos_usuarios())



let respuesta = []
let Resultado = []
let CamposFormulario =[
    {
        name:"name",
        type:"text",
        mensaje: "Ingres su nombre x"
    },
    {
        name:"age",
        type:"number",
        mensaje: "Ingres su edad"

    },
    {
        name:"name",
        type:"email",
         mensaje: "Ingres su correo"
    },
    

]

// Mostrar Componente  al cargar la página DOMContentLoaded
export const MostrarFormulario = async () => {
    //respuesta = await a(); // Recibe Datos del API
      
    CrearFormulario(CamposFormulario)
  };
  
document.addEventListener('DOMContentLoaded', ev => {
    MostrarFormulario()
})
 // Manejar el evento submi para el Formulario
document.getElementById("formulario").addEventListener('submit', ev => {
  ev.preventDefault();
  alert("click")  
let form=document.getElementById("formulario")

const datos_formulario=new FormData(form)
console.log(datos_formulario)
insertar_datos_usuarios(datos_formulario)

})

  const CrearFormulario = (datos) => {
    let html = ""; 

    // Iterar sobre los datos para generar los campos del formulario
    datos.forEach(element => {
        html += `
            <div class="form-group">
                <label for="${element.name}">${element.mensaje}</label>
                <input type="${element.type}" name="${element.name}" id="${element.name}" class="form-control" placeholder="${element.mensaje}" aria-describedby="helpId-${element.name}">
                <small id="helpId-${element.name}" class="text-muted">Help text</small>
            </div>
        `;
    });

    // Agregar el botón de enviar
    html += `
        <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
    `;


    // Insertar el HTML generado en el contenedor
    document.getElementById('formulario').innerHTML = html;

    return html;
};