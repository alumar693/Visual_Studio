class LotteryGame {
    static lotteryNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
    static attempts = 0;

    static checkNumber() {
        const number = Number(document.getElementById('numero').value);
        const result = document.getElementById('resultado');
        LotteryGame.attempts++;

        if (LotteryGame.lotteryNumbers.includes(number)) {
            const position = LotteryGame.lotteryNumbers.indexOf(number);
            result.textContent = `¡Acertaste! El número ${number} está en la posición ${position + 1}. Intentos: ${LotteryGame.attempts}`;
        } else {
            result.textContent = `El número ${number} no está en la lotería. Intentos: ${LotteryGame.attempts}`;
        }
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    LotteryGame.checkNumber();
});
