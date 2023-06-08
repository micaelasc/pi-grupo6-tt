//------------------------------------- DETAIL ARTIST ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams (queryString)
let id = queryObj.get("id")
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://developers.deezer.com/api/artist " + id;
console.log(url)


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        // let imagenArtista = document.querySelector(".imagenArtista");
        // imagenArtista.src = data
    })
    .catch(function(error){
        alert("Error" + error) 
    })

    
// detail artista + sus albumes
fetch()
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
    })
    .catch(function(error){
        alert("Error" + error) 
    })