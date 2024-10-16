class DniLetterCalculator {
    static calculator(dni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const resto = dni % 23;
        return letras[resto];
    }

    static getLetter(dni) {
        let dniArray = dni.split("");
        for (let letter of dniArray) {
            if (isNaN(letter)) {
                console.log("La letra de tu DNI es " + letter);
            }
        }
    }

}
console.log(DniLetterCalculator.calculator(20959528)); //Debería dar L
console.log(DniLetterCalculator.getLetter('20959528L'));