// Creamos un nuevo objeto llamado 'circulo'
let circulo = new Object();

// Añadimos una propiedad 'radio' al objeto 'circulo' y le asignamos el valor 7
circulo.radio = 7;

// Calculamos el área del círculo usando la fórmula π * r^2
// Math.PI es una constante que representa el valor de π
// Math.pow(circulo.radio, 2) eleva el valor de 'radio' al cuadrado
// El resultado se redondea a dos decimales usando .toFixed(2) y luego se convierte a tipo de dato float con parseFloat()
circulo.area = parseFloat((Math.PI * Math.pow(circulo.radio, 2)).toFixed(2));

// Imprimimos el área calculada en la consola
console.log(circulo.area);
