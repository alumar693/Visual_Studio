class PriceChecker {
    static checkPrices() {
        const precioA = Number(document.getElementById('precioA').value);
        const precioB = Number(document.getElementById('precioB').value);
        const cantidadC = Number(document.getElementById('cantidadC').value);
        const resultado = document.getElementById('resultado');

        if (precioA === precioB) {
            const totalIngreso = (precioA + precioB) * cantidadC;
            resultado.textContent = `Ingreso total: ${totalIngreso}`;
        } else {
            resultado.textContent = "Los precios no son iguales. No se puede calcular el ingreso.";
        }
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    PriceChecker.checkPrices();
});
