// ------------------------------BUSCADOR--------------------------------------------------------------------------
let queryString = location.search;               // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams(queryString);        //define metodos utiles para trabajar con los parametros
let busqueda = queryObj.get("busqueda");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/search?q=" + busqueda;
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let resultadoBusqueda = document.querySelector(".resultadoBusqueda")
        resultadoBusqueda.innerText = `Los resultados para ${busqueda} son: `
        // let listaDeBusqueda = document.querySelector(".listaDeBusqueda")  //que hace esto, no lo llamamos en ningun lado
        for (let i = 0; i < data.data.length; i++) {
            resultadoBusqueda.innerHTML += ` 
            <article class="cancionBusqueda"
                <img src="${data.data[i].album.cover}"alt='' />
                <a href="detail-song.html?id=${data.data[i].id}">
                    <h4>${data.data[i].title}</h4>
                </a>
                <a href="detail-artist.html?id=${data.data[i].artist.name}">
                    <h5>${data.data[i].artist.name}</h5>
                </a>
                <a href="detail-album.html?id=${data.data[i].album.id}">
                    <h5>${data.data[i].album.title}</h5>
                </a>
            </article>
        `
        }
    })
    .catch(function (error) {
        alert("Error" + error)
    })

//----------------------------------------------------BUSCADOR----------------------------------------------------------------------------
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
//------------------------------------ BOTON MODO OSCURO MODO CLARO en results---------------------------------------------------//
let btnMode                 = document.querySelector("#modo-oscuro");
let body                    = document.querySelector("body");

btnMode.addEventListener("click", function (e) {

    if (btnMode.innerText                           == "Modo Oscuro") {
        body.style.background                       = "#313131";

        this.innerText                                  = "Modo Claro";
    } else {
        body.style.background                       = "#fff";

        this.innerText                                  = "Modo Oscuro";
    }
})