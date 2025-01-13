document.addEventListener('keydown', (event) => {
  // if (event.altKey && event.key === 'F12') 
  if (event.ctrlKey && event.key === '9') {
      document.body.style.backgroundImage = "url('maxresdefault (1).jpg')";
  
      const mensaje = document.getElementById('mensaje');
      if (mensaje) mensaje.textContent = 'Te dije que no le dieras!';
    }
  });
  