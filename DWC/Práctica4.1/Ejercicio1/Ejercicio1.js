function factorial(n) {
    if (n == 0) { // Caso base.
        return 1;
    } else { // Caso recursivo.
        return n * factorial(n - 1);
    }
}

document.getElementById('submit').addEventListener('click', () => {
    let number = parseInt(document.getElementById('number').value);

    let result = factorial(number);

    document.getElementById('result').innerHTML = `Factorial de ${number} es: ${result}`;
});
