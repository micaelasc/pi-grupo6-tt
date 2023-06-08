//------------------------------------- DETAIL ARTIST ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
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
        let nombreArtista = document.querySelector(".nombreArtista")
        nombreArtista.innerHTML = data.name

        // fetch para maximo 5 albumes del artista PEDIR AYUDA
        fetch("https://cors-anywhere.herokuapp.com/" + data.tracklist)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                let albumesArtista = document.querySelector(".listaArtistaAlbumes")
                for (let i = 0; i <= data.length; i++) {
                    albumesArtista.innerHTML += `
                    <li class= "listitaArtistaAlbumes">
                    ${datadata[i].album.title}
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
