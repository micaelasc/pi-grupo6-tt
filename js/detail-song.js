//------------------------------------- DETAIL SONG ---------------------------------------------------//
let queryString = location.search;
let queryObj = new URLSearchParams (queryString)
let id = queryObj.get("id")
// console.log(id);
let url = 

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
    })
    .catch(function(error){
        alert("Error" + error) 
    })