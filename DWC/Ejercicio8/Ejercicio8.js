class PyramidGenerator{
    static pyramid() {
        let number = parseInt(document.getElementById('numero').value);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        number = Number(number);
        if (isNaN(number) || number < 0) {
            console.log("Número no válido");
        }
        let pyramid = "";
                for (let i = 1; i <= number; i++) {
                    pyramid += '* '.repeat(i) + '\n';
                }
        resultado.textContent = pyramid;
    }
}
document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    PyramidGenerator.pyramid();
})