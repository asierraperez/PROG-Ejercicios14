//Alinear al centro elementos de tipo clase
function Ejercicio5() {
    var asignaturas = document.getElementsByClassName("asignaturas")
    for (let i = 0; i < asignaturas.length; i++) {
        asignaturas[i].style.textAlign = "center"
    }
}