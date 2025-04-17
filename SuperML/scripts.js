const form = document.querySelector(".formulario-fale-conosco") /* NA TAG ONDE PEGUEI ESSA CLASS, PRECISA ACRESCENTAR O "ONCLICK" E POR A CLASS QUE CREI AQUI NO JS COM OS () EX: cliquedebotao()  */

const masc = document.querySelector(".mascara-form")

function cliquedebotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}

function cliqueifora() {
    form.style.left = "-305px"
    form.style.transform = "translateX(0)"
    masc.style.visibility = "hidden"
}

const ajuda = document.querySelector(".ajude-me")

function meajuda() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}