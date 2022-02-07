//Crear un elemento de tipo <p>, añadirle un texto y luego ponerlo a continuacion de 
// el id 'segundaDivision'
function Ejercicio8() {
    var nuevo_parrafo = document.createElement("p")
    var texto = document.createTextNode("Los horarios son provisionales, están dispuestos a cambios.")
    nuevo_parrafo.appendChild(texto)
    document.getElementById("segundaDivision").appendChild(nuevo_parrafo)
}