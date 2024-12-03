// a) Extrae un número de una cadena
let cadena = "Tengo 10 manzanas";
let numero = cadena.match(/\d+/);  // Buscar el primer número en la cadena
console.log(`Número extraído: ${numero[0]}`);

// b) Buscar una palabra específica en una cadena
let texto = "El DNA está formado por las bases ACGT, que se combinan para almacenar la información genética";
let palabra = /ACGT/.test(texto);  // Comprobar si contiene "ACGT"
console.log(`¿Contiene 'ACGT'?: ${palabra}`);

// c) Encuentra todas las coincidencias de una palabra
let cadena2 = "La casa es amarilla";
let coincidencias = (cadena2.match(/a/g) || []).length;  // Contar todas las "a"
console.log(`Número de 'a' en la cadena: ${coincidencias}`);

// d) Extrae la fecha de un texto (en formato dd-mm-yyyy)
let fechaTexto = "La fecha es 15-08-2024";
let fechaRegExp = /(\d{2})-(\d{2})-(\d{4})/;  // Expresión para extraer fecha en formato dd-mm-yyyy
let fechaExtraida = fechaTexto.match(fechaRegExp);
let dia = fechaExtraida[1];
let mes = fechaExtraida[2];
let año = fechaExtraida[3];
console.log(`Día: ${dia}, Mes: ${mes}, Año: ${año}`);

// e) Reemplazar todas las ocurrencias de una palabra
let textoReemplazar = "Glucosa y ácido láctico son dos metabolitos clave en el proceso de la glucólisis.";
let textoModificado = textoReemplazar.replace(/láctico/g, "pirúvico");
console.log(`Texto modificado: ${textoModificado}`);

// f) Busca una URL (http o https)
let textoUrl = "Visita nuestro sitio en https://www.ejemplo.com";
let urlRegExp = /(https?:\/\/[^\s]+)/g;  // Expresión regular para buscar URLs
let urlEncontrada = textoUrl.match(urlRegExp);
console.log(`URL encontrada: ${urlEncontrada[0]}`);
