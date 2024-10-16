export function isPrimeNumber(number) {
    let  isPrime = false;
    let counterOfDividers = 0;
    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            counterOfDividers++;
        }
    }
    if(counterOfDividers === 2) {
        isPrime = true;
    }
    return isPrime;
}
console.log(isPrimeNumber(6))
console.log(isPrimeNumber(5))