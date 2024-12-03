function obtenerFechaActual(fecha) {
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const dia = fecha.getDate();
    const sem = diasDeLaSemana[fecha.getDay()];
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return {
        dia: dia,
        sem: sem,
        mes: mes,
        año: año
    };
}

let fechaHoy = new Date();
console.log(obtenerFechaActual(fechaHoy));
