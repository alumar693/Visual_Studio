function summatory(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + summatory(n - 1);
    }
}
console.log(summatory(5));