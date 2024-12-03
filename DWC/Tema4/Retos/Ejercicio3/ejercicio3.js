// Función para calcular el día de la semana
function calcularDiaNacimiento(fechaNacimiento) {
    const diasDeLaSemana = [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];
    const fecha = new Date(fechaNacimiento);
    return diasDeLaSemana[fecha.getDay()];
}

// Evento para obtener la fecha y mostrar el resultado
document.getElementById('submit').addEventListener('click', () => {
    const fechaNacimiento = document.getElementById('birthdate').value;
    if (fechaNacimiento) {
        const diaNacimiento = calcularDiaNacimiento(fechaNacimiento);
        document.getElementById('result').textContent = `Naciste un ${diaNacimiento}.`;
    } else {
        document.getElementById('result').textContent = "Por favor, ingresa una fecha válida.";
    }
});
