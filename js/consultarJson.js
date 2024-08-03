export function mostrar_datos_consola() {
    mostrar_datos_configuracion();
    mostrar_datos_personas();
}


function mostrar_datos_configuracion() {
    //truco//!fetch
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)

        .then(response => response.json())

        .then(data => console.log(data));


}
function mostrar_datos_personas() {
    //truco//!fetch
    let url = "/js/Configuraciones.json"
    fetch(url)

        .then(response => response.json())

        .then(data => console.log(data));


}