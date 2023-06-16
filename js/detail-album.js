//------------------------------------- DETAIL ALBUM ---------------------------------------------------//
let queryString = location.search;       // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams(queryString);    //define metodos utiles para trabajar con los parametros
let id = queryObj.get("id");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/album/" + id;
console.log(url)


//fetch del album
fetch(url)
    .then(function (response) {
        return response.json()                            //decodifica la info y la convierte en array
    })

    .then(function (data) {                          //como el anterior es asincronico, hay que hacer este then con un callback, que recibe la info decodificada  
        console.log(data)
        let tituloAlbum         = document.querySelector(".nombreAlbum");                         //   busco en la api el nombre del album
        let artistaAlbum        = document.querySelector(".nombreArtistaDelAlbum");            //  busco en la api el nombbre del artista del album
        let imagenAlbum         = document.querySelector(".imagenAlbum");                               // busco en la api la imagen del album
        let generoAlbum         = document.querySelector(".nombreGeneroAlbum")                   //busco en la api rl genero del album
        let cancionesAlbum      = document.querySelector(".listaAlbum")
        let fechaAlbum          = document.querySelector(".publicacionAlbum")                                    //busco en la api la fecha del album
        tituloAlbum.innerText   = data.title;
        artistaAlbum.innerText  = data.artist.name;              // innerText para que lo muestre en la página
        imagenAlbum.src         = data.cover;
        generoAlbum.innerText   = data.genres.data[0].name;
        fechaAlbum.innerText    = data.release_date;

        fetch("https://cors-anywhere.herokuapp.com/" + data.artist.tracklist)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                for (let i = 0; i < data.data.length; i++) {
                    cancionesAlbum.innerHTML +=
                        ` <li class = "listacancionesAlbum">
                    <a href="detail-song.html?id=${data.data[i].id}">${data.data[i].title}
                    </li>
                    `
                }
            })
            .catch(function (error) {
                alert("error" + error)
            })
    })
    .catch(function (error) {
        alert("Error" + error)                          // busca errores en el fetch
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

//---------------------------------- BOTON MODO OSCURO MODO CLARO en detail album---------------------------------------------------//

let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");
let cajaAlbum               = document.querySelector(".detalle-del-album");
let tituloAlbum             = document.querySelector(".nombreAlbum");
let artistaAlbum            = document.querySelector(".nombreArtistaDelAlbum");
let generoAlbum             = document.querySelector(".nombreGeneroAlbum");
let fechaAlbum              = document.querySelector(".publicacionAlbum");

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";
        cajaAlbum.style.background                  = "magenta"
        tituloAlbum.style.color                     = "black"
        artistaAlbum.style.color                    = "black"
        generoAlbum.style.color                     = "black"
        fechaAlbum.style.color                      = "black"
        
        this.innerText                                  = "Modo Claro";
    } else {
        body.style.background                       = "#fff";
        cajaAlbum.style.background                  = "#9c27b0"
        tituloAlbum.style.color                     = "white"
        artistaAlbum.style.color                    = "white"
        generoAlbum.style.color                     = "white"
        fechaAlbum.style.color                      = "white"

        this.innerText                                  = "Modo Oscuro";
    }
})