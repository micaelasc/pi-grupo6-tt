//------------------------------------- GENEROS ---------------------------------------------------//
fetch("https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/genre")        // ruta de donde queremos obtener la info
    .then(function (response) {
        return response.json()   // callback para procesar el resultado, decodifica el json
    })
    .then(function (data) {            // lo convierte en un parametro
        console.log(data);             //muestra los generos sacados del API
        let cajaGeneros = document.querySelector(".cajaGeneros")
        for (let i = 0; i < data.data.length; i++) {
            cajaGeneros.innerHTML += `
            <article class="cajita-generos">
                <img class="fotitoGeneros" src="${data.data[i].picture}">
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
// ------------------------------BUSCADOR--------------------------------------------------------------------------

let form        = document.querySelector(".form"); //HTML form element
let input       = document.querySelector("#search-input"); //HTML input element
let btnserch    = document.querySelector("#search-button") // HTML boton de buscar

form.addEventListener("submit", function (e) {
    let busqueda = input.value
    if (busqueda.length < 3) {
        e.preventDefault();
        alert("Debes escribir por lo menos tres caracteres");                        //mensaje que no te deje escribir menos de 3 caracteres
        return
    }
    if (busqueda.length === "") {
        e.preventDefault();
        alert("Ingrese texto!!");                                            //mensaje que no te deje dejar el campo vacío
        return
    }
})
form.addEventListener("input", function (e) {
    let busqueda = input.value
    if (busqueda.length >= 3) {                                               //cuando escribir más de 3 caracteres cambia el color de busqueda
        btnserch.style.background = "#009966"
    }

})
//----------------------------------------- BOTON MODO OSCURO MODO CLARO ---------------------------------------------------//

let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");
let bodyTitulosCancion      = document.querySelector(".tituloCancion");
let bodyTitulosAlbum        = document.querySelector(".tituloAlbum");
let bodyTitulosArtista      = document.querySelector(".tituloArtista");
let bodyContainerCanciones  = document.querySelector(".box-container-canciones");
let bodyContainerAlbumes    = document.querySelector(".box-container-albumes");
let bodyContainerArtistas   = document.querySelector(".box-container-artistas");

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";
        bodyTitulosCancion.style.backgroundColor    = "#fff"
        bodyTitulosAlbum.style.backgroundColor      = "#fff"
        bodyTitulosArtista.style.backgroundColor    = "#fff"

        bodyTitulosCancion.style.color              = "black"
        bodyTitulosAlbum.style.color                = "black"
        bodyTitulosArtista.style.color              = "black"

        bodyContainerCanciones.style.backgroundColor    = "#fff"
        bodyContainerAlbumes.style.backgroundColor      = "#fff"
        bodyContainerArtistas.style.backgroundColor     = "#fff"
        this.innerText                                  = "Modo Claro";
    } else {
        body.style.background                       = "#fff";
        bodyTitulosCancion.style.backgroundColor    = "#313131"
        bodyTitulosAlbum.style.backgroundColor      = "#313131"
        bodyTitulosArtista.style.backgroundColor    = "#313131"

        bodyTitulosCancion.style.color  = "white"
        bodyTitulosAlbum.style.color    = "white"
        bodyTitulosArtista.style.color  = "white"

        bodyContainerCanciones.style.backgroundColor    = "#313131"
        bodyContainerAlbumes.style.backgroundColor      = "#313131"
        bodyContainerArtistas.style.backgroundColor     = "#313131"
        this.innerText                                  = "Modo Oscuro";
    }
})


