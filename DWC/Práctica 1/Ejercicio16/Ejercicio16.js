class GradeCalculator {
    static notas = [];

    static addGrade() {
        const nota = Number(document.getElementById('nota').value);
        if (nota >= 0 && nota <= 100) {
            this.notas.push(nota);
        } else {
            alert("Por favor, ingresa una nota válida entre 0 y 100.");
        }
        document.getElementById('nota').value = '';
    }

    static calculate() {
        if (this.notas.length === 0) {
            alert("No hay notas ingresadas.");
            return;
        }
        const total = this.notas.length;
        const maxNota = Math.max(...this.notas);
        const minNota = Math.min(...this.notas);
        const promedio = this.notas.reduce((a, b) => a + b, 0) / total;

        let estado = promedio >= 70 ? "Aprobado" : "Reprobado";
        const resultado = `Notas ingresadas: ${total}\nNota más alta: ${maxNota}\nNota más baja: ${minNota}\nPromedio: ${promedio.toFixed(2)} (${estado})`;
        document.getElementById('resultado').textContent = resultado;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    GradeCalculator.addGrade();
});

document.getElementById("finalizar").addEventListener('click', function() {
    GradeCalculator.calculate();
});
