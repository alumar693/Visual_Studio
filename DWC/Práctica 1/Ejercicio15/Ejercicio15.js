class MultiplicationTable {
    static showTable() {
        let resultado = '';
        for (let i = 1; i <= 10; i++) {
            resultado += `5 x ${i} = ${5 * i}\n`;
        }
        document.getElementById('resultado').textContent = resultado;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    MultiplicationTable.showTable();
});
