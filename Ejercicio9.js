//añadir tres elementos a la lista y ponerlos a continuacion de los
//ya existentes
function Ejercicio9() {
    var interfaces = document.createElement("li")
    var despliegue = document.createElement("li")
    var fct = document.createElement("li")
    var materia1 = document.createTextNode("Diseño de interfaces")
    var materia2 = document.createTextNode("Despiegue de aplicaciones web")
    var materia3 = document.createTextNode("Formación en centros de trabajo")
    interfaces.appendChild(materia1)
    despliegue.appendChild(materia2)
    fct.appendChild(materia3)
    document.getElementById("segundo").appendChild(interfaces)
    document.getElementById("segundo").appendChild(despliegue)
    document.getElementById("segundo").appendChild(fct)

}