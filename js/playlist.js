//----------------------------------------------------PLAYLIST----------------------------------------------------------------------------
/* Recupero el storage */
let recuperoStorage = localStorage.getItem("favoritos");

/* transformar el json (string) en obj o un array */
let favoritos = JSON.parse(recuperoStorage)

/* Recuperar el elemento del DOM */
let section = document.querySelector('#lista');

/* Crear cancionesFavoritos string vacio para luego ser completado con el fetch */
let cancionesFavoritos = '';

/* Preguntar: Favoritos es null O su longitus es igual a 0

TRUE: dar un mensaje en la section diciendo que no hay datos en favoritos
FALSE: Hacer un FOR que recorra favoritos y haga un fetch por cada elemento del array de favoritos*/
/* No hay favoritos */

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos seleccionados</p>'
} else {

    for (let i = 0; i < favoritos.length; i++) {
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                cancionesFavoritos += `<article class="cajita-playlist">
                                        <img src=${data.album.cover} alt='' />
                                        <p class="titulitoPlaylist"> ${data.title}</p>
                                        <p class="nombreArtistaPlaylist"> ${data.artist.name} </p>
                                        
                                        <a href='detail-song.html?id=${data.id}'>Ver más</a>
                                    </article>`;

                section.innerHTML = cancionesFavoritos;

            })
            .catch(function (error) {
                alert("Error" + error)
            });

    }
}

//----------------------------------------------------BUSCADOR----------------------------------------------------------------------------

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


