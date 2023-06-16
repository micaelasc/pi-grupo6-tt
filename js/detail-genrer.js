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
        let dataGenero = data.data[i].name
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
        let detailGenero = document.querySelector(".detailGenero");
        for (let i = 0; i < data.data.length; i++) {
            detailGenero.innerHTML += `
            <article class="">
                <li class="liDetailGenre">
                    <a href= "detail-artist.html?id=${data.data[i].id}"><img class="artistaGeneroFoto" src="${data.data[i].picture}"></a>
                    <a href= "detail-artist.html?id=${data.data[i].id}"><h3 class="artistaGeneroNombre">${data.data[i].name}</h2> </a>                   
                </li>
            </article>
            `
        }
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
//---------------------------------- BOTON MODO OSCURO MODO CLARO en detail genre---------------------------------------------------//
let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");
let cajaDetalleGenero       = document.querySelector(".detailGenero");
let liDetailGenre       = document.querySelector(".liDetailGenre");
let artistaGeneroNombre       = document.querySelector(".artistaGeneroNombre");

btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";
        // cajaDetalleGenero.style.background          = "magenta"
        // liDetailGenre.style.color                   = "black"
        // artistaGeneroNombre.style.color             = "black"

        this.innerText                                  = "Modo Claro";
    } else {
        body.style.background                       = "#fff";
        // cajaDetalleGenero.style.background          = "#9c27b0"
        // liDetailGenre.style.color                   = "white"
        // artistaGeneroNombre.style.color             = "white"

        this.innerText                                  = "Modo Oscuro";
    }
})


