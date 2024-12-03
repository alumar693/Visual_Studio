function diasHastaExamen(fechaExamen) {
    let hoy = new Date();
    let examen = new Date(fechaExamen);
    let diferencia = examen - hoy;
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return `Hay ${dias} días.`;
}

console.log(diasHastaExamen("2024-12-13"));
console.log(diasHastaExamen("2024-12-25"));
