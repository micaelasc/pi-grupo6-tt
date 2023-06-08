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
        return response.json()
    })

    .then(function(data) {
        console.log(data)
        let tituloalbum = document.querySelector(".nombreAlbum");                         //   busco en la api el nombre del album
        let artistaalbum = document.querySelector(".nombreArtistaDelAlbum");            //  busco en la api el nombbre del artista del album
        let imagenalbum = document.querySelector(".imagenAlbum");                               // busco en la api la imagen del album
        let generoalbum = document.querySelector(".nombreGeneroAlbum")                    //busco en la api rl genero del album
        // let fechaalbum = document.querySelector(".")                                    //busco en la api la fecha del album
        tituloalbum.innerText = data.title;
        artistaalbum.innerText = data.artist.name;              // innerText para que lo muestre en la página
        imagenalbum.src = data.cover;
        generoalbum.innerText = data.genres.data.name;
        // fechaalbum.innerText = data.release_date;
    
        // for (let i=0; i<5; i++){
           // let imagenAlbum = document.querySelector(".imagenAlbum");
            // imagenAlbum.src = data. 
        // }
    })
    .catch(function(error){
        alert("Error" + error) 
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