class DniLetterCalculator {
    static calculator(dni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const resto = dni % 23;
        return letras[resto];
    }
}
console.log(DniLetterCalculator.calculator(20959528)); //Debería dar L