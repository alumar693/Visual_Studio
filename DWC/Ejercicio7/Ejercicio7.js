class BuenosDias {

    static saludos() {
        
        const now = new Date;
        let hour = now.getHours();

        if (hour >= 6 && hour < 12) {
            console.log("Buenos días");
        } else if (hour >= 12 && hour < 20) {
            console.log("Buenas tardes");
        } else if (hour >= 20 || hour < 2) {
            console.log("Buenas noches");
        } else if (hour >= 2 && hour < 6) {
            console.log("¿Qué haces despierto a estas horas?");
        } else {
            console.log("Error.");
        }
    }
}
BuenosDias.saludos();