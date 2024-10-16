import { isPrimeNumber } from "../Ejercicio3/ejercicio3.js";
class LearnWithMaths {
    static showPrimeNumbers() {
        let primeNumbers = '';
        for (let i = 1; i <= 1000; i++) {
            if (isPrimeNumber(i)) {
                primeNumbers += `<p>${i}</p>`;
            }
        }
        document.getElementById('output').innerHTML = primeNumbers;
    }
}
LearnWithMaths.showPrimeNumbers();