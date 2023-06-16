//------------------------------------- DETAIL ARTIST ---------------------------------------------------//
let queryString = location.search;            // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams(queryString)  //define metodos utiles para trabajar con los parametros
let id = queryObj.get("id")       // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/artist/" + id;
console.log(url)


//fetch del artista
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        // foto artista
        let imagenArtista = document.querySelector(".imagenArtista");
        imagenArtista.src = data.picture

        // nombre artista
        let nombreArtista       = document.querySelector(".nombreArtista")
        nombreArtista.innerHTML = data.name

        // fetch para maximo 5 albumes del artista PEDIR AYUDA
        fetch("https://cors-anywhere.herokuapp.com/" + data.tracklist)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                let albumesArtista = document.querySelector(".listaArtistaAlbumes")
                for (let i = 0; i < 5; i++) {
                    albumesArtista.innerHTML += `
                    <li class= "listitaArtistaAlbumes">
                    <a href= "detail-song.html?id=${data.data[i].id}">${data.data[i].title}</a>
                    </li>
                    `
                }
            })
            .catch(function (error) {
                alert("Error" + error)
            })
    })
    .catch(function (error) {
        alert("Error" + error)
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

//------------------------------- BOTON MODO OSCURO MODO CLARO en detail artist---------------------------------------------------//
let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");
let cajaArtista             = document.querySelector(".detalle-del-artista")
let imagenArtista           = document.querySelector(".imagenArtista");
let nombreArtista           = document.querySelector(".nombreArtista");
let listaArtistaAlbumes     = document.querySelector(".listaArtistaAlbumes");

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";
        cajaArtista.style.background                = "magenta"
        imagenArtista.style.color                   = "black"
        nombreArtista.style.color                   = "black"
        listaArtistaAlbumes.style.color             = "black" // aca si se cambio el color de los li wtf

        this.innerText                                  = "Modo Claro";
    } else {
        body.style.background                       = "#fff";
        cajaArtista.style.background                = "#9c27b0"
        imagenArtista.style.color                   = "white"
        nombreArtista.style.color                   = "white"
        listaArtistaAlbumes.style.color             = "white"

        this.innerText                                  = "Modo Oscuro";
    }
})


