const parrafos = document.querySelectorAll('p');
function leerParrafo() {
    const email = document.getElementById("email").value;
    const texto = document.getElementById("textArea").value;
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    // Resetear los mensajes de error
    document.getElementById("email-error").style.display = 'none';
    document.getElementById("textArea-error").style.display = 'none';

    if (!emailRegex.test(email) || texto.trim() === "") {
        // Validar email
        if (!emailRegex.test(email)) {
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

    //Contar las palabras
    contarPalabras()
}

// Crear una cookie con fecha de caducidad en 1 año
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    document.cookie = `${nombre}=${valor}; expires=${fecha.toUTCString()}; path=/`;
}

// Leer una cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [clave, valor] = cookie.split("=");
        if (clave === nombre) return valor;
    }
    return null;
}

// Borrar una cookie
function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1977 00:00:00 GMT; path=/`;
}

// Mostrar cuadro de confirmación para las cookies
function mostrarAvisoCookies() {
    const cookieConsent = getCookie("cookieConsent");
    
    if (!cookieConsent) {
        let resultado = confirm("¿Estás seguro de que quieres continuar? Esta página usa cookies para contar visitas.");

        if (resultado) {
            setCookie("cookieConsent", "true", 365); // El consentimiento es válido por 1 año
            contarVisitas();
            contarPalabras();
        } else {
            deleteCookie("visitas"); // Borrar la cookie de visitas si no acepta
        }
    } else {
        contarVisitas();
        contarPalabras();
    }
}

// Contar visitas
function contarVisitas() {
    let visitas = getCookie("visitas");
    visitas = visitas ? parseInt(visitas) + 1 : 1; // Incrementar visitas o iniciar en 1
    setCookie("visitas", visitas, 365);
    document.getElementById("contador-visitas").textContent = `Número de visitas: ${visitas}`;
}

// Ejecutar la lógica al cargar la página
mostrarAvisoCookies();

//Buscar una palabra en el texto
function buscarPalabra() {
    const marks = document.querySelectorAll('mark')
    marks.forEach(mark => {
        mark.replaceWith(mark.textContent)
    })
    const palabra = document.getElementById("browser").value;
    parrafos.forEach(parrafo => {
        const regex = new RegExp(`(${palabra})`, 'gi');
        parrafo.innerHTML = parrafo.innerHTML.replace(regex, `<mark>${palabra}</mark>`);
    });
}

//Contar las palabras del documento
function contarPalabras() {
    let totalPalabras = 0;
    parrafos.forEach(parrafo => {
        totalPalabras += parrafo.textContent.split(/\s+/).filter(Boolean).length;
    });
    document.getElementById("contador-palabras").textContent = `Número de palabras: ${totalPalabras}`;
}

//esconder el texto para transicionar
function esconderTexto() {
    parrafos.forEach(parrafo => {
        parrafo.style.opacity = '0'
    })
}

//transicionar el texto para enseñar un parrafo por segundo
function mostrarTexto() {
    
    parrafos.forEach((parrafo, index) => {
        setTimeout(() => {
            parrafo.style.opacity = '1';
        }, index * 1000);
    });
}

function invertirParrafos() {
    parrafos.forEach(parrafo => {
        const textoParrafo = parrafo.textContent;
        const textoInvertido = textoParrafo.split(" ").reverse().join(" ");
        parrafo.textContent = textoInvertido;
    })
}


