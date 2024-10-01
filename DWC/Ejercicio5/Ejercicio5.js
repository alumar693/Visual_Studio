class ValidateNumber {
    
    static validateNumber(text) {
        const number = Number(text);
        if (!isNaN(number)) {
            alert("Bien hecho, es un número.");
        } else {
            alert("Dato introducido incorrecto, se pide un número.");
        }
    }
}
document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById("numero").value;
    ValidateNumber.validateNumber(inputValue);
});