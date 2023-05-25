var btnoscuro   = document.querySelector("#modo-oscuro") 
var body        = document.querySelector("body")


// btnoscuro.onclick = function(e){
//     btnoscuro.classList.btnoscuro('active');
//     body.classList.btnoscuro('active');
// }
btnoscuro.addEventListener("click", function(e){
    let checked = e.target.checked
    document.body.classList.btnoscuro('dark')
        
}) 

