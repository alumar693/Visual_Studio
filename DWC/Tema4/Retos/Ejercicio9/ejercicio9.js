// Expresión regular para validar un número de teléfono en el formato XXX-XXX-XXXX
let regexTelefono = /^\d{3}-\d{3}-\d{4}$/;

// Función que valida el número de teléfono
function validarTelefono(telefono) {
    return regexTelefono.test(telefono) ? `${telefono} Válido` : `${telefono} No válido`;
}

// Ejemplos de números de teléfono
console.log(validarTelefono("123-456-7890"));  // Válido
console.log(validarTelefono("12-3456-7890"));  // No válido
console.log(validarTelefono("123-456-78"));    // No válido
console.log(validarTelefono("123-456-789O"));  // No válido (letra O no es válida)
