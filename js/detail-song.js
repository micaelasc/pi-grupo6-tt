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
                btnFav.innerText = "agregar a favoritos"
            } else {
                /*FALSE */
                favoritos.push(id);
                btnFav.innerText = "sacar de favoritos"
            }

            let favoritosToString = JSON.stringify(favoritos);      /*Pasa FAVORITOS a JSON y lo sube a localStorage */
            localStorage.setItem("favoritos", favoritosToString)

        })


    })
    .catch(function (error) {
        alert("Error" + error)                          // busca errores en el fetch
    })








//----------------------------------------BUSCADOR-------------------------------------------------------------------------------------------------


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


