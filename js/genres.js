//------------------------------------- GENEROS ---------------------------------------------------//
fetch("https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/genre")        // ruta de donde queremos obtener la info
    .then(function (response) {
        return response.json()   // callback para procesar el resultado, decodifica el json
    })
    .then(function (data) {            // lo convierte en un parametro
        console.log(data); //muestra las canciones sacados del API
        let cajaGeneros = document.querySelector(".cajaGeneros")
        for (let i = 0; i < data.data.length; i++) {
            cajaGeneros.innerHTML += `
            <article class="cajita-generos">
                <img src="${data.data[i].picture}">
                 <a href="./detail-genrer.html?id=${data.data[i].id}">
                     <h3> ${data.data[i].name} </h3> 
                </a>
            </article>
            `
        }
    })
    .catch(function (error) {
        alert("Error" + error) // para atrapar los errores en cualquier parte del fetch
    })










// buscador

let form = document.querySelector(".form"); //HTML form element
let input = document.querySelector("#search-input"); //HTML input element
let btnserch = document.querySelector("#search-button") // HTML boton de buscar
form.addEventListener("submit", function (e) {
    let busqueda = input.value
    if (busqueda.length < 3) {
        e.preventDefault();
        alert("Debes escribir por lo menos tres caracteres");
        return
    }
    if (busqueda.length === "") {
        e.preventDefault();
        alert("Ingrese texto!!");
        return
    }
})