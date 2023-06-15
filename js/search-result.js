let queryString = location.search;               // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams(queryString);        //define metodos utiles para trabajar con los parametros
let busqueda = queryObj.get("busqueda");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/search?q=" + busqueda;
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let resultadoBusqueda= document.querySelector(".resultadoBusqueda")
    resultadoBusqueda.innerText = `Los resultados para ${busqueda} son: `
    let listaDeBusqueda = document.querySelector(".listaDeBusqueda")
    for (let i = 0; i < data.data.length; i++) {
        resultadoBusqueda.innerHTML += ` <article class="cancionBusqueda"
            <img src="${data.data[i].album.cover}"alt='' />
            <a href="detail-song.html?id=${data.data[i].id}"><h4>${data.data[i].title}</h4></a>
            <a href="detail-artist.html?id=${data.data[i].artist.name}"><h5>${data.data[i].artist.name}</h5></a>
            <a href="detail-album.html?id=${data.data[i].album.id}"><h5>${data.data[i].album.title}</h5></a>
            </article>
        `
        }
})
.catch(function(error){
    alert("Error" + error)  
})

















//--------------------------------------------BUSCADOR-----------------------------------------------------------------------------------
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
form.addEventListener("input", function(e){
    let busqueda = input.value
    if(busqueda.length >= 3){                                               //cuando escribir más de 3 caracteres cambia el color de busqueda
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