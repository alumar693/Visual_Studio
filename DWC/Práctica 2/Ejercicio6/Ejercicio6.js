class PalindromeChecker {
    static isPalindrome(text) {
        const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText;
    }

    static verify() {
        const text = document.getElementById('texto').value;
        const result = document.getElementById('resultado');
        if (PalindromeChecker.isPalindrome(text)) {
            result.textContent = `"${text}" es un palíndromo.`;
        } else {
            result.textContent = `"${text}" no es un palíndromo.`;
        }
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    PalindromeChecker.verify();
});
