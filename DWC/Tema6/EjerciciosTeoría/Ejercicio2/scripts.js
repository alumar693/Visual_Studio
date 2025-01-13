const cartel = document.getElementById('cartel');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  cartel.style.left = x + 10 + 'px';
  cartel.style.top = y + 10 + 'px';
});
