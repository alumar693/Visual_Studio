class NumberSeriesDivider {
    static divideSeries() {
        const input = document.getElementById('serie').value;
        const numbers = input.split(',').map(Number).sort((a, b) => a - b);
        const middleIndex = Math.floor(numbers.length / 2);

        const smallNumbers = numbers.slice(0, middleIndex);
        const largeNumbers = numbers.slice(middleIndex);

        const resultado = `Pequeños: ${smallNumbers.join(', ')}\nGrandes: ${largeNumbers.join(', ')}`;
        document.getElementById('resultado').textContent = resultado;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    NumberSeriesDivider.divideSeries();
});
