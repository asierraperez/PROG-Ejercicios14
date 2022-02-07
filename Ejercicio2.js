//Modificar ancho de 2 parrafos
function Ejercicio2() {
    var parrafos = document.getElementsByClassName('standard')
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.maxWidth = "200px"

    }

}