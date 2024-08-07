export const obtener_datos_configuracion = async () => {
    let url = "/js/Configuraciones.json"
    try {

        const response = await fetch(url);
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
    let url = "https://rickandmortyapi.com/api/character"
    try {

        const response = await fetch(url);
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






