function leerParrafo() {
    const email = document.getElementById("email").value;
    const texto = document.getElementById("textArea").value;
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    // Resetear los mensajes de error
    document.getElementById("email-error").style.display = 'none';
    document.getElementById("textArea-error").style.display = 'none';

    if(!emailRegex.test(email) || texto.trim() === "") {
       
            // Validar email
        if (!emailRegex.test(email) ) {
            document.getElementById("email-error").style.display = 'inline';
        }

        // Validar texto del textarea (campo obligatorio)
        if (texto.trim() === "") {
            document.getElementById("textArea-error").style.display = 'inline';
        }
    } else {
        // Si todo es válido, agregar el párrafo
        anyadeParrafo(texto);
    }
}

function anyadeParrafo(texto) {
    // Crear los párrafos en las dos columnas
    const p1 = document.createElement("p");
    p1.textContent = texto;
    p1.style.fontWeight = 'bold';
    p1.style.color = 'red';

    const p2 = document.createElement("p");
    p2.textContent = texto;
    p2.style.fontWeight = 'bold';
    p2.style.color = 'green';

    // Añadir los párrafos a las columnas correspondientes
    const columna1 = document.querySelectorAll('.column')[0];
    const columna2 = document.querySelectorAll('.column')[1];

    columna1.appendChild(p1);
    columna2.appendChild(p2);

    // Limpiar el formulario
    document.getElementById("formulario").reset();
}

function descargarDocumento() {
    const allP = document.querySelectorAll('.column p');
    let content = "";
    allP.forEach(p => {
        content += p.textContent + "\n";
    });

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "documento.txt";
    link.click();
}
