class NumberChecker {
    static checker() {
        const number1 = Number(document.getElementById("numero1").value);
        const number2 = Number(document.getElementById("numero2").value);
        const number3 = Number(document.getElementById("numero3").value);

        if(number1 < 10 || number2 < 10 || number3 < 10) {
            alert("Alguno de los números son menores a diez.")
        }
    }
}
document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    NumberChecker.checker();
})