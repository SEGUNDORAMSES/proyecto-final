export const obtener_datos_configuracion = async () => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let url = "/js/Configuraciones.json"
    try {

        const response = await fetch(url, config);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data);
            return data
        }
        else {
            console.log("error al consultar el api" + response.status);
        }

    }

    catch (error) {
        console.log("error en la red" + error)
    }

};

export const obtener_datos_Apirick = async () => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let url = "https://rickandmortyapi.com/api/character"
    try {

        const response = await fetch(url, config);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data.results);
            return data.results
        }
        else {
            console.log("error al consultar el api" + response.status);
        }

    }

    catch (error) {
        console.log("error en la red" + error)
    }

};

export const obtener_datos_usuarios = async () => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let url = "https://jsonplaceholder.typicode.com/posts"
    try {

        const response = await fetch(url, config);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data);
            return data
        }
        else {
            console.log("error al consultar el api" + response.status);
        }

    }

    catch (error) {
        console.log("error en la red" + error)
    }

};
export const insertar_datos_usuarios = async (Usuario) => {
    // let Usuario = {
    //     "userId": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // }
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Usuario)
    };
    let url = "https://jsonplaceholder.typicode.com/posts"
    try {

        const response = await fetch(url, config);
        if (response.status == "201") {
            const data = await response.json();
            alert("Insertado correctamente" + JSON.stringify(data))
            console.table(data);
            return data
        }
        else {
            console.log("error al consultar el api" + response.status);
        }

    }

    catch (error) {
        console.log("error en la red" + error)
    }

};






