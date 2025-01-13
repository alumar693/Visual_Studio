const cuadroRaton = document.getElementById('raton');
const posiciones = document.getElementById('posiciones');
const cuadroTeclado = document.getElementById('teclado');
const teclaInfo = document.getElementById('tecla-info');
const interaccion = document.getElementById('interaccion');

document.addEventListener('mousemove', (event) => {
  posiciones.textContent = `Posición respecto al navegador: (${event.clientX}, ${event.clientY}) 
  - Posición respecto a la página: (${event.pageX}, ${event.pageY})`;
  interaccion.style.backgroundColor = 'white';
  cuadroRaton.style.backgroundColor = 'white';
  cuadroTeclado.style.backgroundColor = 'white';
});

document.addEventListener('keydown', (event) => {
  teclaInfo.textContent = `Carácter: ${event.key} - Código ASCII: ${event.keyCode}`;
  
  cuadroTeclado.style.backgroundColor = 'lightblue';
  cuadroRaton.style.backgroundColor = 'white';
  interaccion.style.backgroundColor = 'lightblue'
});

document.addEventListener('mousedown', () => {
  cuadroRaton.style.backgroundColor = 'yellow';
  interaccion.style.backgroundColor = 'yellow';
  cuadroTeclado.style.backgroundColor = 'white';
});
