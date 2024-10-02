const prompt = require("prompt-sync")();
class AgeTester {  
    static ageFilter() {
        let loop = true;
        while(loop) {
            let age = prompt("Introduce una edad ");
            
            if (age.toLowerCase() === "salir") {
                console.log("Saliendo del programa");
                loop = false;
                break;
            }
            age = Number(age);
            if (isNaN(age)) {
                console.log("Por favor, ingresa un número válido.");
            } else if (age < 12) {
                console.log("Niño.");
            } else if (age >= 12 && age <= 17) {
                console.log("Adolescente.");
            } else if (age >= 18 && age <= 64) {
                console.log("Adulto.");
            } else if (age >= 65) {
                console.log("Adulto mayor.");
            }
        }    
    }
}

AgeTester.ageFilter()
