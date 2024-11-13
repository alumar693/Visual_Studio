//clase juego en la que inicializare el numero random y declarare el numero de intentos.
class NumGuesser {
    constructor() {
        this.number2Guess = Math.floor(Math.random() * 100) + 1;
        this.maxAttemps = 5
    }
}
//clase jugador para que haya contador de intentos.
class Player {
    constructor() {
        this.numberOfAttempts = 0
    }
}
//inicializo el juego y el jugador.
let numGuesser = new NumGuesser();
let player = new Player();
//para ver por consola el numero a adivinar, que si no es imposible adivinarlo.
console.log(numGuesser.number2Guess)
//recojo el clic del boton de enviar.
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
   //añado 1 intento
    player.numberOfAttempts++
    //recojo el numero introducido por el jugador
    let guess = document.getElementById('guess').value
    //compruebo si ha acertado o no y en funcion a eso imprimimos distintas cosas por pantalla
    let result = document.getElementById('result')
    if(guess == numGuesser.number2Guess) {
        result.innerHTML = `Enhorabuena, has acertado el número ${numGuesser.number2Guess} en el intento ${player.numberOfAttempts}`;
        submitButton.disabled = true;
    } else if(player.numberOfAttempts < numGuesser.maxAttemps){
        result.innerHTML = `¡Has fallado!. Te quedan ${numGuesser.maxAttemps - player.numberOfAttempts} intentos`;
    } else {
        result.innerHTML = `¡Has perdido! El número que tenías que adivinar era el ${numGuesser.number2Guess}`
        submitButton.disabled = true;
    }
})