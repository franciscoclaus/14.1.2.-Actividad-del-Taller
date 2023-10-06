const btnOpciones = document.getElementById("btnOpciones");

btnOpciones.addEventListener("click", function () {

    const clase = document.getElementById("menuOpciones")

    if (clase.classList.contains("d-none")) {
        clase.classList.remove("d-none")

    } else {
        clase.classList.add("d-none")
    }

});