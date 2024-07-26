export class Dictionary {
    constructor() {
            this.secretWords = [
                'abeto', 'abito', 'aguja', 'ancho', 'apelo', 'aviso', 'bache', 'banco', 'basta', 'bebes', 
                'bello', 'blusa', 'borde', 'burro', 'cable', 'cacho', 'calor', 'canto', 'carne', 'celda', 
                'ciuda', 'coche', 'comas', 'copas', 'cuero', 'dente', 'dudas', 'firme', 'flama', 'fuera', 
                'gente', 'grato', 'horro', 'hotel', 'joven', 'lente', 'lugar', 'madre', 'mucho', 'nacer', 
                'nieve', 'nunca', 'oruga', 'pacto', 'pasta', 'pedro', 'pinto', 'plato', 'poder', 'quien', 
                'rabia', 'reina', 'salud', 'silla', 'soler', 'tabla', 'termo', 'trozo', 'vacan', 'verde', 
                'vocal', 'votos', 'yegua', 'yerno', 'zorro', 'zumba', 'pasto', 'llave', 'fruta', 'mujer', 
                'cielo', 'papel', 'lucha', 'grito', 'marzo', 'cerca', 'campo', 'fuego', 'feliz', 'nubes', 
                'falta', 'amigo', 'arbol', 'barra', 'broma', 'clima', 'comer', 'danza', 'donde', 'durar', 
                'exito', 'flaco', 'fluir', 'gordo', 'hueso', 'huevo', 'largo', 'lleno', 'marca', 'meter', 
                'miedo', 'mitad', 'movil', 'noche', 'nuevo', 'pared', 'peces', 'pluma', 'poeta', 'pulso', 
                'ritmo', 'ruido', 'salto', 'suave', 'temor', 'tinta', 'torre', 'traje', 'vacas', 'vista', 
                'voces', 'vuelo', 'yerba', 'acero', 'aleta', 'antes', 'arena', 'bazar', 'botar', 'ceder', 
                'chica', 'creer', 'darle', 'dieta', 'doble', 'duelo', 'extra', 'fallo', 'gusto', 'haber', 
                'hacha', 'karma', 'lamer', 'lunar', 'mirar', 'nevar', 'parar', 'peste', 'pinta', 'puedo', 
                'quiso', 'rosal', 'saber', 'secar', 'sirio', 'tenso', 'tomar', 'valle', 'zurdo', 'pelea', 
                'abeja', 'corea', 'calma', 'calca', 'abran', 'abrir', 'actos', 'adobe', 'ahora', 'aires', 
                'ajeno', 'alado', 'aldea', 'alero', 'alfar', 'almas', 'altar', 'alzar', 'amada', 'amiga', 
                'animo', 'antro', 'apego', 'arpas', 'artes', 'asado', 'asilo', 'astro', 'autor', 'avena', 
                'avion', 'azote', 'babel', 'baile', 'bajar', 'banjo', 'barro', 'bater', 'becar', 'belga', 
                'berro', 'besos', 'bidon', 'bingo', 'birra', 'bisar', 'bizco', 'bomba', 'bombo', 'bravo', 
                'breve', 'brisa', 'burla', 'cabal', 'oirse', 'cacao', 'calar', 'calza', 'capaz', 'cardo', 
                'carga', 'casar', 'casco', 'catar', 'cavar', 'cegar', 'censo', 'cenar', 'cerco', 'cerdo', 
                'cerro', 'cesar', 'chala', 'chile', 'china', 'chino', 'chivo', 'choza', 'chulo', 'ciclo', 
                'ciego', 'cifra', 'circo', 'cisne', 'citar', 'clave', 'cloro', 'cobre', 'cobro', 'codex', 
                'codon', 'cofre', 'colas', 'colmo', 'comun', 'congo', 'coral', 'corda', 'crear', 'credo', 
                'cuajo', 'cubre', 'cueva', 'cuota', 'curva', 'dalia', 'dardo', 'datar', 'deber', 'debut', 
                'decir', 'dejar', 'delta', 'denso', 'depor', 'diosa', 'dique', 'doler', 'dorar', 'drama', 
                'droga', 'ducho', 'dudar', 'dupla', 'mango', 'niñez', 'ejido', 'enana', 'espan', 'etapa', 
                'fajas', 'falda', 'falso', 'fango', 'femar', 'feria', 'fijar', 'focos', 'fondo', 'freno', 
                'frios', 'fusil', 'gaban', 'gaita', 'ganar', 'garza', 'grifo', 'glosa', 'penal', 'patea', 
                'caldo', 'calvo', 'calva', 'claro', 'ovalo', 'tecla', 'salsa', 'deseo', 'oeste', 'techo', 
                'local', 'robar', 'tener', 'acido', 'acude', 'adula', 'afila', 'amaba', 'amago', 'andas', 
                'anida', 'arado', 'asear', 'asume', 'atina', 'atora', 'audaz', 'avala', 'azule', 'balas', 
                'balda', 'balon', 'banal', 'banda', 'barba', 'basar', 'basto', 'batan', 'batir', 'beber', 
                'bicho', 'bilis', 'brote', 'bruto', 'buceo', 'bucle', 'bulto', 'busca', 'cabra', 'calle', 
                'canal', 'caoba', 'carpa', 'carta', 'casas', 'casto', 'cauda', 'cimas', 'cinto', 'civil', 
                'clava', 'cocer', 'coser', 'crema', 'croar', 'crudo', 'cupos', 'dicha', 'dicho', 'duela', 
                'dulce', 'edita', 'elite', 'emite', 'enano', 'enter', 'epico', 'error', 'etica', 'evoca', 
                'farsa', 'fatal', 'felpa', 'fibra', 'final', 'furia', 'ganso', 'garra', 'gesto', 'girar', 
                'grana', 'groso', 'guapo', 'guita', 'habit', 'hondo', 'hurto', 'ideal', 'igual', 'items', 
                'izado', 'jabon', 'jarra', 'junte', 'junto', 'lanza', 'laser', 'lavar', 'lidar', 'llano', 
                'mayor', 'media', 'menos', 'meson', 'mimos', 'minor', 'mojar', 'moral', 'mover', 'mugir', 
                'necio', 'nidos', 'noble', 'notas', 'novia', 'obrar', 'oidos', 'optar', 'otear', 'ovulo', 
                'palas', 'parte', 'patos', 'pedir', 'pesas', 'pollo', 'porra', 'radio', 'rango', 'remos',
                'dylan', 'tarde', 'sepia'
            ];
            
            this.secretWord = this.getRandomSecretWord();
            
    }

    getRandomSecretWord() {
        const randomIndex = Math.floor(Math.random() * this.secretWords.length);
        return this.secretWords[randomIndex].toUpperCase();
    }

    getSecretWord(){
        return this.secretWord;
    }

    getSecretWords() {
        return this.secretWords;
    }
}