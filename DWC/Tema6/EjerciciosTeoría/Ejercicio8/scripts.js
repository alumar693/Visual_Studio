const capa = document.getElementById('capa');

capa.addEventListener('mouseover', () => {
    capa.style.backgroundColor = 'green';
});

document.addEventListener('mouseout', () => {
    capa.style.backgroundColor = 'white';
});

capa.addEventListener('click', () => {
    capa.style.backgroundColor = 'red';
});

capa.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    capa.style.backgroundColor = 'blue';
});