//inicializa el formulario
function inicializar() {
    // Deseleccionar todos los entrantes (checkbox)
    const entrantes = document.querySelectorAll('input[name="entrante"]');
    entrantes.forEach(checkbox => {
      checkbox.checked = false;
    });
  
    // Seleccionar "Pavo trufado" como segundo plato (radio)
    const pavo = document.querySelector('input[name="segundo"][value="Pavo"]');
    if (pavo) {
      pavo.checked = true;
    }
  }

function factura() {
    const precioEntrante = 10;
    const precioSegundo = 15;
    const precioPostre = 5;
    let total = 0;
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
      
        // Obtén los entrantes seleccionados
        const entrantes = Array.from(document.querySelectorAll('input[name="entrante"]:checked'))
          .map(checkbox => checkbox.value);
      
        // Obtén el segundo plato seleccionado
        const segundo = document.querySelector('input[name="segundo"]:checked').value;
      
        // Obtén el postre seleccionado
        const postre = document.getElementById('postres').value; 

        if(postre != 'no postre') {
            total = entrantes.length * precioEntrante + precioSegundo + precioPostre;
        } else {
            total = entrantes.length * precioEntrante + precioSegundo;
        }
        // Crear el contenido del ticket
        let ticketHTML = `<h2>Ticket Menú Navideño</h2>`;

        // Entrantes seleccionados y precios
        entrantes.forEach(entrante => {
            ticketHTML += `<p>${entrante}: ${precioEntrante} €</p>`;
        });

        // Segundo plato y precio
        ticketHTML += `<p>Segundo plato: ${segundo}: ${precioSegundo} €</p>`;
      
        // Postre seleccionado y precio
        if (postre != 'no postre') {
            ticketHTML += `<p>Postre: ${postre}: ${precioPostre} €</p>`;
        } else {
            ticketHTML += `<p>Postre: Sin postre</p>`;
        }

        // Total
        ticketHTML += `<p><strong>Total: ${total} €</strong></p>`;

        // Muestra el ticket en el HTML (asegurándote de que el contenedor exista)
        document.getElementById('ticket').innerHTML = ticketHTML;
        inicializar();
    });
}   
  