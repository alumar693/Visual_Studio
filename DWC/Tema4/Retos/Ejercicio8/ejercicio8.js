// Expresión regular para validar un correo electrónico
let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Función que valida el correo
function validarCorreo(correo) {
    return regexEmail.test(correo) ? `${correo} Válido` : `${correo} No válido`;
}

// Ejemplos de correos electrónicos
console.log(validarCorreo("juan.perez@example.com"));  // Válido
console.log(validarCorreo("juan@ex@ample.com"));      // No válido
console.log(validarCorreo("@dominio.com"));           // No válido
console.log(validarCorreo("jose_juan@dominio.es"));   // Válido
