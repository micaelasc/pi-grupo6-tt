let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
console.log(queryString);
console.log(queryObj);
console.log(id);

//------------------------------------- GENEROS ---------------------------------------------------//
fetch("https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/genre")        // ruta de donde queremos obtener la info
    .then(function (response) {
        return response.json();   // callback para procesar el resultado, decodifica el json
    })
    .then(function (data) {            // lo convierte en un parametro
        console.log(data); //muestra las canciones sacados del API
        let dataGenero = document.querySelector(".dataGenero")
        dataGenero.innerText = data.data[i].name
    })
    .catch(function (error) {
        alert("Error" + error) // para atrapar los errores en cualquier parte del fetch
    })

//-----------------------------------BUSCA LOS ARTISTAS----------------------------------------------------------------------------------

fetch("https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/genre/" + id + "/artists")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let generoArtista = document.querySelector(".generoArtista");
        let artistasGenero = "";

        for (let i = 0; i < data.data.length; i++) {
            artistasGenero += `
                <li>
                    <a href= "detail-artist.html?id=${data.data[i].id}">
                        <h2 class="artistaGeneroNombre">${data.data[i].name}</h2> 
                        <img class="artistaGeneroFoto" src="${data.data[i].picture}">
                    </a>
                </li>
            
            ` 
        }
        generoArtista.innerHTML = artistasGenero; 

        })
    .catch(function (error) {
        alert("Error" + error)
    })

//----------------------------------------- FORMULARIO -------------------------------------------------------------//

let form = document.querySelector(".form"); //HTML form element
let input = document.querySelector("#search-input"); //HTML input element
let btnserch = document.querySelector("#search-button") // HTML boton de buscar
// alert(input)
// alert (form)

form.addEventListener("submit", function (e) {
    let busqueda = input.value
    if (busqueda.length < 3) {
        e.preventDefault();                                              //mensaje que no te deje escribir menos de 3 caracteres
        alert("Debes escribir por lo menos tres caracteres");
        return
    }
    if (busqueda.length === "") {
        e.preventDefault();
        alert("Ingrese texto!!");                                         //mensaje que no te deje dejar el campo vacío
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

let btnMode = document.querySelector("#modo-oscuro");
let body = document.querySelector("body");
let bodyTitulosCancion = document.querySelector(".tituloCancion");
let bodyTitulosAlbum = document.querySelector(".tituloAlbum");
let bodyTitulosArtista = document.querySelector(".tituloArtista");
let bodyContainerCanciones = document.querySelector(".box-container-canciones");
let bodyContainerAlbumes = document.querySelector(".box-container-albumes");
let bodyContainerArtistas = document.querySelector(".box-container-artistas");

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText == "Modo Oscuro") {
        body.style.background = "#313131";
        bodyTitulosCancion.style.backgroundColor = "#fff"
        bodyTitulosAlbum.style.backgroundColor = "#fff"
        bodyTitulosArtista.style.backgroundColor = "#fff"

        bodyTitulosCancion.style.color = "black"
        bodyTitulosAlbum.style.color = "black"
        bodyTitulosArtista.style.color = "black"

        bodyContainerCanciones.style.backgroundColor = "#fff"
        bodyContainerAlbumes.style.backgroundColor = "#fff"
        bodyContainerArtistas.style.backgroundColor = "#fff"
        this.innerText = "Modo Claro";
    } else {
        body.style.background = "#fff";
        bodyTitulosCancion.style.backgroundColor = "#313131"
        bodyTitulosAlbum.style.backgroundColor = "#313131"
        bodyTitulosArtista.style.backgroundColor = "#313131"

        bodyTitulosCancion.style.color = "white"
        bodyTitulosAlbum.style.color = "white"
        bodyTitulosArtista.style.color = "white"

        bodyContainerCanciones.style.backgroundColor = "#313131"
        bodyContainerAlbumes.style.backgroundColor = "#313131"
        bodyContainerArtistas.style.backgroundColor = "#313131"
        this.innerText = "Modo Oscuro";
    }
})