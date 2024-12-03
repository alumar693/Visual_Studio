// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para eliminar una cookie
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

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
}

// Función para contar visitas usando cookies
function contarVisitas() {
    let visitas = getCookie("visitas");
    
    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }
    
    setCookie("visitas", visitas, 365); // Cookie caduca en 1 año
    document.getElementById("contador-visitas").textContent = `Número de visitas: ${visitas}`;
}

// Mostrar cuadro de confirmación para las cookies
function mostrarAvisoCookies() {
    const cookieConsent = getCookie("cookieConsent");
    
    if (!cookieConsent) {
        let resultado = confirm("¿Estás seguro de que quieres continuar? Esta página usa cookies para contar visitas.");
        
        if (resultado) {
            setCookie("cookieConsent", "true", 365); // El consentimiento es válido por 1 año
            contarVisitas(); // Contar visitas solo si acepta las cookies
        } else {
            deleteCookie("visitas"); // Borrar la cookie de visitas si no acepta
        }
    } else {
        contarVisitas(); // Si ya ha aceptado las cookies, contar visitas automáticamente
    }
}

// Ejecutar aviso de cookies al cargar la página
mostrarAvisoCookies();
