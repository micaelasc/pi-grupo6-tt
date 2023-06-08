//------------------------------------- DETAIL SONG ---------------------------------------------------//
let queryString = location.search;               // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams (queryString);        //define metodos utiles para trabajar con los parametros
let id = queryObj.get("id");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/track/" + id;
console.log(url)

fetch(url)
    .then(function(response) {
        return response.json()                            //decodifica la info y la convierte en array
    })

    .then(function(data) {                          //como el anterior es asincronico, hay que hacer este then con un callback, que recibe la info decodificada  
        console.log(data)
        let imagenAlbumDeCancion = document.querySelector(".imagenAlbumDeCancion")
        let nombreCancion = document.querySelector(".nombreCancion")
        let nombreArtistaDeCancion = document.querySelector(".nombreArtistaDeCancion")
        let nombreAlbumDeCancion = document.querySelector(".nombreAlbumDeCancion")

        imagenAlbumDeCancion.src = data.album.cover
        nombreCancion.innerText = data.title
        nombreArtistaDeCancion.innerText = data.artist.name
        nombreAlbumDeCancion,innerText = data.album.title
        


 
    })
    .catch(function(error){
        alert("Error" + error)                          // busca errores en el fetch
    })






//----------------------------------------BUSCADOR-------------------------------------------------------------------------------------------------

let form = document.querySelector(".form"); //HTML form element
let input = document.querySelector("#search-input"); //HTML input element
let btnserch = document.querySelector("#search-button") // HTML boton de buscar

form.addEventListener("submit", function (e) {
    let busqueda = input.value
    if (busqueda.length < 3) {
        e.preventDefault();
        alert("Debes escribir por lo menos tres caracteres");
        return
    }
    if (busqueda.length === "") {
        e.preventDefault();
        alert("Ingrese texto!!");
        return
    }
})