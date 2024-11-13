let now = new Date();
console.log(now);

//Para añadir un 0 por si el dia es menor que 10 (por el formato dd o mm)
function addCero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

//Obtener el dia, mes y año
let day = addCero(now.getDate());
let month = addCero(now.getMonth()+1);
let year = now.getFullYear();
let dayWeek = now.get

// Obtener el día de la semana
let daysOfTheWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let DayOfTheWeek = daysOfTheWeek[now.getDay()];

//Obtener horas, minutos y segundos
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


//Imprimirlo todo por consola
console.log(`${day}/${month}/${year}`);
console.log(`${month}/${day}/${year}`);
console.log(`${DayOfTheWeek}: ${month}/${day}/${year}`);
console.log(`Hora: ${hours} Minutos: ${minutes} Segundos: ${seconds}`);

