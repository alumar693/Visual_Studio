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
let submitButton = document.getElementById("submit")

submitButton.addEventListener('click', () => {
    counter.incrementCounter();
    document.getElementById('counter').innerHTML = counter.showCounter();
});

submitButton.addEventListener("mouseenter", () => {
    document.body.style.backgroundImage = "url('/DWC/Tema4/Práctica1/Ejercicio5/media/maxresdefault (2).jpg')";
});

submitButton.addEventListener("mouseleave", () => {
    document.body.style.backgroundImage = "url('/DWC/Tema4/Práctica1/Ejercicio5/media/maxresdefault (1).jpg')";
});