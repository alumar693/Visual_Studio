function factorial(n) {
    if(n == 0) { //Caso base.
        return 1;
    } else { //Caso recursivo.
        return n * factorial(n - 1);
    }
}

document.getElementById('submit').addEventListener('click', () => {
    console.log(factorial(parseInt(document.getElementById('number').value)));
});