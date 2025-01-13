const rojo = document.querySelector('div');
const verde = document.querySelector('button');

rojo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

verde.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'green';
    event.stopPropagation();
});
