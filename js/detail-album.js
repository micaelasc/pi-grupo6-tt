//------------------------------------- DETAIL ALBUM ---------------------------------------------------//
let queryString = location.search;       // nos retorna la informacion en cadena de texto
let queryObj = new URLSearchParams (queryString);    //define metodos utiles para trabajar con los parametros
let id = queryObj.get("id");           // obtiene el valor de la clave dentro del querystring
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.deezer.com/album/" + id;
console.log(url)




//fetch del album
fetch(url)
    .then(function(response) {
        return response.json()                            //decodifica la info y la convierte en array
    })

    .then(function(data) {                          //como el anterior es asincronico, hay que hacer este then con un callback, que recibe la info decodificada  
        console.log(data)
        let tituloalbum = document.querySelector(".nombreAlbum");                         //   busco en la api el nombre del album
        let artistaalbum = document.querySelector(".nombreArtistaDelAlbum");            //  busco en la api el nombbre del artista del album
        let imagenalbum = document.querySelector(".imagenAlbum");                               // busco en la api la imagen del album
        let generoalbum = document.querySelector(".nombreGeneroAlbum")                   //busco en la api rl genero del album
        let cancionesAlbum = document.querySelector(".listaAlbum")
        let fechaalbum = document.querySelector(".publicacionAlbum")                                    //busco en la api la fecha del album
        tituloalbum.innerText = data.title;
        artistaalbum.innerText = data.artist.name;              // innerText para que lo muestre en la página
        imagenalbum.src = data.cover;
        generoalbum.innerText = data.genres.data[0].name;
        fechaalbum.innerText = data.release_date;
    
        fetch("https://cors-anywhere.herokuapp.com/" + data.artist.tracklist)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                for (let index = 0; index < data.data.length; index++) {
                    cancionesAlbum.innerHTML +=  
                    ` <li class = "listacancionesAlbum">
                    ${data.data[index].title}
                    </li>
                    ` 
                }
            }

            )
            .catch(function(error){
                alert("error" + error)
            })
 
    })
    .catch(function(error){
        alert("Error" + error)                          // busca errores en el fetch
    })







// ------------------------------BUSCADOR--------------------------------------------------------------------------

let form = document.querySelector(".form"); //HTML form element
let input = document.querySelector("#search-input"); //HTML input element
let btnserch = document.querySelector("#search-button") // HTML boton de buscar

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

