class LemonSongGenerator {
    static generateSong() {
        const number = parseInt(document.getElementById('limones').value);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "";

        let song = "";
        for (let i = 1; i <= number; i++) {
            if (i === number) {
                song += `¡¡¡Y ${i} LIMONES Y MEDIO LIMÓN!!!\n`;
            } else {
                song += `${i} limon${i > 1 ? 'es' : ''}, y medio limón.\n`;
            }
        }
        resultado.textContent = song;
    }
}

document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    LemonSongGenerator.generateSong();
});
