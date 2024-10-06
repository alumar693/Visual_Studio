class ChristmasChecker {
    static checkChristmas() {
        const fecha = new Date(document.getElementById('fecha').value);
        const resultado = document.getElementById('resultado');
        
        if (fecha.getMonth() === 11 && fecha.getDate() === 25) {
            resultado.textContent = "¡Es Navidad!";
        } else {
            resultado.textContent = "No es Navidad.";
        }
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    ChristmasChecker.checkChristmas();
});
