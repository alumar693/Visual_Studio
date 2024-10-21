function factorial(n) {
    let result = 1;
    if (n != 0) {
        for(let i = 1; i <= n; i++) {
            result *= i
        }
    }
    return result;
}

function factorial2(n) {
    let result = 1;
    if (n != 0) {
        let i = 1;
        while(i <= n){
            result *= i
            i++;
        }
    }
    return result;
}
document.getElementById('submit').addEventListener('click', () => {
    let number = parseInt(document.getElementById('number').value);

    let result = factorial(number);

    document.getElementById('result').innerHTML = `Factorial de ${number} es: ${result}`;
});