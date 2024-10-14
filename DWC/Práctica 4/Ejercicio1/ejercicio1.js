let eloy = function() {
    return "pesado"
}
let usuario = function(nombre, noCallback) {
    console.log(noCallback()+ " " + nombre)
}
usuario("Eloy", eloy)