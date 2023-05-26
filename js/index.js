// FORMULARIO
let form = document.querySelector("#search-button"); //HTML button element
let input = document.querySelector("#search-input"); //HTML input element

// alert(input)
// alert (form)

form.addEventListener("submit", function(e) {
    if (input.length >= 3) {
        form.submit();
    } else {
        e.preventDefault();
        alert("Debes escribir por lo menos tres caracteres");
    }
})


// BOTON MODO OSCURO MODO CLARO //
let btnMode        = document.querySelector("#modo-oscuro");
let body           = document.querySelector("body");
let bodyTitulos    = document.querySelector(".titulo");
let bodyContainer  = document.querySelector(".box-container");
//porque mierda no me toma los otros?!?!?!? 
// solo me toma el cosito de canciones 


btnMode.addEventListener("click", function (e) {
    if (btnMode.innerText == "Modo Oscuro") {
        body.style.background = "#313131";
        bodyTitulos.style.backgroundColor = "#fff"
        bodyContainer.style.backgroundColor = "#fff"
        this.innerText = "Modo Claro";
    } else {
        body.style.background = "#fff";
        bodyTitulos.style.backgroundColor = "#313131"
        bodyContainer.style.backgroundColor = "#313131"
        this.innerText = "Modo Oscuro";
    }
})
