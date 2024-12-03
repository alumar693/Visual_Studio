// Texto del formulario
let texto = "El producto-A tiene un costo de 50.25, mientras que el producto-B vale 37 y el producto-A20V tiene un precio de 500 euros.";

// Expresión regular para encontrar los productos y sus precios
let regex = /(\w+-?\w*)\s*(?:tiene un costo de|vale|tiene un precio de)\s*([\d.]+)/g;

// Objeto donde guardaremos los productos y sus precios
let productosPrecios = {};

// Extraemos los productos y precios usando la expresión regular
let match;
while ((match = regex.exec(texto)) !== null) {
    let producto = match[1];  // Nombre del producto
    let precio = parseFloat(match[2]);  // Precio del producto
    productosPrecios[producto] = precio;
}

// Resultado
console.log(productosPrecios);
