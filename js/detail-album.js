//------------------------------------- DETAIL ALBUM ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams (queryString);
let id = queryObj.get("id");
// console.log(id);
let url = "https://api.allorigins.win/raw?url=" + "https://api.deezer.com/chart/0/albums" + id;


fetch(url)
    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data);  //me tira error aca
        
        // for (let i=0; i<5; i++){
           // let imagenAlbum = document.querySelector(".imagenAlbum");
            // imagenAlbum.src = data. 
        // }
    })
    .catch(function(error){
        alert("Error" + error) 
    })