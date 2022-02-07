function Ejercicio7() {
    var filas = document.getElementsByTagName("tr")
    for (let i = 0; i < filas.length; i++) {
        filas[i].style.textAlign = "center"
        filas[i].style.fontStyle = "italic"
    }
}