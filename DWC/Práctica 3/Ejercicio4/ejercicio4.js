class MatrixCalculator {
    // Genera una matriz cuadrada con números aleatorios
    static generateMatrix(size) {
        const matrix = [];
        for (let i = 0; i < size; i++) {
            matrix[i] = [];
            for (let j = 0; j < size; j++) {
                matrix[i][j] = Math.floor(Math.random() * 10); // Números aleatorios entre 0 y 9
            }
        }
        return matrix;
    }

    // Calcula la suma de dos matrices
    static sumMatrices(matrixA, matrixB) {
        const size = matrixA.length;
        const result = [];
        for (let i = 0; i < size; i++) {
            result[i] = [];
            for (let j = 0; j < size; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        return result;
    }

    // Ejecuta el cálculo de la suma de matrices
    static calculate() {
        const size = Number(document.getElementById('matrixSize').value);
        if (size < 2 || size > 10) {
            console.log("Por favor, introduce un número entre 2 y 10.");
            return;
        }

        const matrixA = MatrixCalculator.generateMatrix(size);
        const matrixB = MatrixCalculator.generateMatrix(size);
        const resultMatrix = MatrixCalculator.sumMatrices(matrixA, matrixB);

        // Mostrar las matrices originales y la suma
        const result = document.getElementById('resultado');
        result.innerHTML = "Matriz A:\n" + matrixA.map(row => row.join(' ')).join('\n') + "\n\n";
        result.innerHTML += "Matriz B:\n" + matrixB.map(row => row.join(' ')).join('\n') + "\n\n";
        result.innerHTML += "Suma de Matrices:\n" + resultMatrix.map(row => row.join(' ')).join('\n');
    }
}
document.getElementById("calculate").addEventListener('click', () => {
    MatrixCalculator.calculate();
});