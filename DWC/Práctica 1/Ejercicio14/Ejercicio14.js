class MaxNumberFinder {
    static findMax() {
        const numero1 = Number(document.getElementById('numero1').value);
        const numero2 = Number(document.getElementById('numero2').value);
        const numero3 = Number(document.getElementById('numero3').value);
        const maxNumber = Math.max(numero1, numero2, numero3);

        document.getElementById('resultado').textContent = `El mayor número es: ${maxNumber}`;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    MaxNumberFinder.findMax();
});
