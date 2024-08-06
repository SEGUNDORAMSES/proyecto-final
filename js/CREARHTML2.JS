
export function crear_tabla() {
    let tab = document.getElementById("Tabla").innerHTML = table()
}

export function mostrar() {

    let ban = document.getElementById("Banner1").innerHTML = banner1()
    let bann = document.getElementById("Banner2").innerHTML = banner2()



}





function banner1() {
    let html = `
    
     <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
          </div>
    
    `

    return html
}


function banner2() {
    let html = `
<div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
          </div>`

    return html
}


function table() {

    let html = `
 <thead class="thead-inverse">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>asas</td>
                  <td>asas</td>

                </tr>

              </tbody>
`
return html

}