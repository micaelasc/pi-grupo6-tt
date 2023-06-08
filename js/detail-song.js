//------------------------------------- DETAIL SONG ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams (queryString)
let id = queryObj.get("id")
// console.log(id);
let url = "https://cors-anywhere.herokuapp.com/" + "https://developers.deezer.com/api/track" + id;
console.log(url)

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
    })
    .catch(function(error){
        alert("Error" + error) 
    })






// buscador 

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