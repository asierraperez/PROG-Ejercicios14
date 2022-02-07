function EjercicioExtra() {
    var documento = document.getElementsByTagName("body")
    var imagen = document.createElement("img")
    //documento[0].style.display = "flex"
    //documento[0].style.flexDirection = "column"
    documento[0].style.maxWidth = "500px"
    documento[0].style.textAlign = "justify"

    imagen.src = "https://www.solvam.es/wp-content/uploads/2018/04/daw.png"

    document.getElementById("bienvenida").appendChild(imagen)

}