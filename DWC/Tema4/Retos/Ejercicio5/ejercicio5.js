function mostrarHoraPorCiudad() {
    let ciudades = {
        "Madrid": new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" }),
        "Ottawa": new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" }),
        "Canberra": new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" }),
        "Londres": new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })
    };

    for (let ciudad in ciudades) {
        console.log(`${ciudad}: ${new Date(ciudades[ciudad]).toLocaleTimeString()}`);
    }
}

mostrarHoraPorCiudad();
