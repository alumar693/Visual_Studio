function factorial(n) {
    let result = 1;
    if (n != 0) {
        for(let i = 1; i <= n; i++) {
            result *= i
        }
    }
    return result;
}
document.getElementById('submit').addEventListener('click', () => {
    console.log(factorial(parseInt(document.getElementById('number').value)));
});