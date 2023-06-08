//------------------------------------- DETAIL ALBUM ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams (queryString);
let id = queryObj.get("id");
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




    // buscador 

let form = document.querySelector(".form"); //HTML form element
let input = document.querySelector("#search-input"); //HTML input element

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