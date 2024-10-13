class RandomFrequency {
    static calculate() {
        const frequency = new Array(10).fill(0); // Array para almacenar la frecuencia de cada número

        // Generar 10,000 números aleatorios entre 1 y 10
        for (let i = 0; i < 10000; i++) {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            frequency[randomNumber - 1]++; // Incrementar la frecuencia del número correspondiente
        }

        // Mostrar los resultados en la página web
        const result = document.getElementById("resultado");
        result.innerHTML = "Frecuencia de cada número:\n";
        for (let i = 0; i < frequency.length; i++) {
            result.innerHTML += `Número ${i + 1}: ${frequency[i]}\n`;
        }
    }
}

document.getElementById("button").addEventListener('click', function(event) {
    event.preventDefault();
    RandomFrequency.calculate();
});

/*
Elegí un array como estructura de datos porque es una opción bastante simple y clara ya que queremos almacenar un rango definido de valores númericos 
por lo que un array es una opción eficiente ya que nos permite almacenarlos y navegar entre ellos mediante el índice.
*/