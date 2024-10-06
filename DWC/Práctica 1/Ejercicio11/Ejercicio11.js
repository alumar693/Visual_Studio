class RandomNumberGenerator {
    static generateUntilEven() {
        let count = 0;
        let number;
        
        while (number % 2 !== 0) {
            number = Math.floor(Math.random() * 5) + 1;
            console.log(number);
            count++;
        } 
        
        document.getElementById('resultado').textContent = `He conseguido un número par después de ${count} veces.`;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    RandomNumberGenerator.generateUntilEven();
});
