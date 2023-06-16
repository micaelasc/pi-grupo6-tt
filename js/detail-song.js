//------------------------------------- DETAIL SONG ---------------------------------------------------//
let queryString = location.search;               // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams(queryString);        //define metodos utiles para trabajar con los parametros
let id = queryObj.get("id");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/track/" + id;
console.log(url)

fetch(url)
    .then(function (response) {
        return response.json()                            //decodifica la info y la convierte en array
    })
    .then(function (data) {                          //como el anterior es asincronico, hay que hacer este then con un callback, que recibe la info decodificada  
        console.log(data)
        let imagenAlbumDeCancion = document.querySelector(".imagenAlbumDeCancion")
        imagenAlbumDeCancion.src = data.album.cover
        let nombreCancion = document.querySelector(".nombreCancion")
        nombreCancion.innerText = data.title
        let nombreArtistaDeCancion = document.querySelector(".nombreArtistaDeCancion")
        nombreArtistaDeCancion.innerText = data.artist.name
        let nombreAlbumDeCancion = document.querySelector(".nombreAlbumDeCancion")
        nombreAlbumDeCancion.innerText = data.album.title
    })
    .catch(function (error) {
        alert("Error" + error)                          // busca errores en el fetch
    })
/*--------------------------------------GUARDAR EN FAVORITOS---------------------------------------------------------- */

let favoritos = [];             /* Crear un array vacio para luego ser completado con lo que trae localStorage */
let recuperoStorage = localStorage.getItem("favoritos");   /* Recuperar localStorage de la key "favoritos" */
if (recuperoStorage != null) {                        /* Preguntar si es distinto de nulo para ver si tiene info */
    favoritos = JSON.parse(recuperoStorage)
}
let btnFav = document.querySelector(".btnFav") /* Recurperar el elemento del DOM */
if (favoritos.includes(id)) {
    btnFav.innerText = "quitar de playlist"       /* preguntar si el array favoritos incluye este ID - si lo incluye cambiar el texto a quitar de favoritos*/
}
/* agregar el evento click a el boton de Fav - preguntar si el array de favoritos inlcuye el ID del personaje*/
btnFav.addEventListener("click", function () {
    if (favoritos.includes(id)) {
        /* TRUE */
        let index = favoritos.indexOf(id)                                  /*si esxiste es porque ya estaba agragado y hay que sacarlo*/
        favoritos.splice(index, 1);
        btnFav.innerText = "agregar a mi Playlist :)"
    } else {
        /*FALSE */
        favoritos.push(id);
        btnFav.innerText = "sacar de mi Playlist :("
    }

    let favoritosToString = JSON.stringify(favoritos);      /*Pasa FAVORITOS a JSON y lo sube a localStorage */
    localStorage.setItem("favoritos", favoritosToString)
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
///------------------------------------ BOTON MODO OSCURO MODO CLARO en detail song---------------------------------------------------//
let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");
let cajaCancion             = document.querySelector(".detalle-de-cancion")
let cancion                 = document.querySelector(".nombreCancion")
let artista                 = document.querySelector(".nombreArtistaDeCancion")
let albumcito               = document.querySelector(".nombreAlbumDeCancion")
let botoncito               = document.querySelector(".btnFav")

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";
        cajaCancion.style.background                = "magenta"
        cancion.style.color                         = "black"
        artista.style.color                         = "black"
        albumcito.style.color                       = "black"
        botoncito.style.color                       = "black"
        botoncito.style.background                  = "orchid"

        this.innerText                             = "Modo Claro";
    } else {
        body.style.background                  = "#fff";
        cajaCancion.style.background           = "#9c27b0"
        cancion.style.color                    = "white"
        artista.style.color                    = "white"
        albumcito.style.color                  = "white"
        botoncito.style.color                  = "white"
        botoncito.style.background             = "darkorchid"

        this.innerText                         = "Modo Oscuro";
    }
})