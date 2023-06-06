let queryString = location.search;
let queryObj = new URLSearchParams (queryString)
let id = queryObj.get("id")
console.log(id);

// detail info de genre
fetch()
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
    })
    .catch(function(error){
        alert("Error" + error) 
    })

// detail artistas que forman parte de ese genero
fetch()
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
    })
    .catch(function(error){
        alert("Error" + error) 
    })