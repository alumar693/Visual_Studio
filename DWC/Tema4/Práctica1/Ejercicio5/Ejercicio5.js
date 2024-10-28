class Counter {
    constructor() {
        this.counter = 0;
    }
    
    incrementCounter() {
        this.counter++;
    }

    showCounter() {
        return this.counter;
    }
}
const counter = new Counter();
document.getElementById("submit").addEventListener('click', () => {
    counter.incrementCounter();
    document.getElementById('counter').innerHTML = counter.showCounter();
});