const capa = document.getElementById('capa');

capa.addEventListener('mouseenter', () => {
    capa.style.backgroundColor = 'green';
});

capa.addEventListener('mouseleave', () => {
    capa.style.backgroundColor = 'white';
});

document.addEventListener('mouseout', () => {
    capa.style.backgroundColor = 'white';
});

capa.addEventListener('mousedown', () => {
    capa.style.backgroundColor = 'red';
});

capa.addEventListener('mouseup', () => {
    capa.style.backgroundColor = 'green';
});

capa.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    capa.style.backgroundColor = 'blue';
});