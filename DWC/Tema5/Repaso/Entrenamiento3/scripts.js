// Clase base
class Animal {
    constructor(nombre, especie, foto, edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.foto = foto;  // Nuevo atributo foto
        this.edad = edad;  // Nuevo atributo edad
    }

    informacion() {
        return `Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años`;
    }
}

// Clase que hereda de Animal
class Perro extends Animal {
    constructor(nombre, especie, raza, foto, edad) {
        super(nombre, especie, foto, edad);
        this.raza = raza;
    }

    informacion() {
        return `${super.informacion()}, Raza: ${this.raza}`;
    }
}

// Clase que hereda de Animal
class Gato extends Animal {
    constructor(nombre, especie, color, foto, edad) {
        super(nombre, especie, foto, edad);
        this.color = color;
    }

    informacion() {
        return `${super.informacion()}, Color: ${this.color}`;
    }
}

// Array con varios animales (ahora con la propiedad foto y edad)
const animales = [
    new Perro("Max", "Canino", "Pastor Alemán", "https://i.postimg.cc/8zkSRCJW/max.png", 5),
    new Perro("Rex", "Canino", "Golden Retriever", "https://i.postimg.cc/NjNwpwmn/rex.png", 3),
    new Perro("Federico", "Canino", "Firulais", "https://i.postimg.cc/hP1nQmjc/federico.png", 7),
    new Gato("Scar", "Felino", "Blanco", "https://i.postimg.cc/zfVYQPkG/scar.png", 2),
    new Gato("Luna", "Felino", "Negro", "https://i.postimg.cc/gkWd0sGg/luna.png", 4)
];


// Función que se ejecuta cuando el usuario hace clic en el botón
function mostrarAnimales() {
    // Log para saber si la función se está ejecutando
    console.log("Función mostrarAnimales ejecutada");

    const seleccion = document.getElementById("animal").value; // Obtener la opción seleccionada

    // Filtrar animales según la selección (perro o gato)
    const animalesFiltrados = animales.filter(animal => {
        if(seleccion === "perro" && animal instanceof Perro) {
            return true;
        } 
        else if(seleccion === "gato" && animal instanceof Gato) {
            return true;
        }
        return false;
    });

    // Obtener el elemento donde se mostrará la información
    const divMostrarDatos = document.getElementById("mostrarDatos");
    divMostrarDatos.innerHTML = ""; // Limpiar el contenido previo

    // Mostrar la información de los animales filtrados
    animalesFiltrados.forEach(animal => {
        const div = document.createElement("div");
        div.classList.add("animal-row");

        // Crear el contenido del div para mostrar el animal
        const img = document.createElement("img");
        img.src = animal.foto;  // Asignamos la foto
        img.alt = animal.nombre;
        img.width = 100;  // Ajustar el tamaño de la imagen

        const p = document.createElement("p");
        p.textContent = animal.informacion();  // Mostrar la información del animal

        // Añadir la imagen y la información al div
        div.appendChild(img);
        div.appendChild(p);

        // Añadir el div al contenedor de datos
        divMostrarDatos.appendChild(div);
    });
}


/*
// Función que se ejecuta cuando el usuario envía el formulario
document.getElementById("formAdopcion").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto de enviar el formulario

    const seleccion = document.getElementById("animal").value; // Obtener la opción seleccionada

    // Filtrar animales según la selección (perro o gato)
    const animalesFiltrados = animales.filter(animal => {
        if(seleccion === "perro" && animal instanceof Perro) {
            return true;
        } 
        else if(seleccion === "gato" && animal instanceof Gato) {
            return true;
        }
        return false;
    });

    // Obtener el elemento donde se mostrará la información
    const divMostrarDatos = document.getElementById("mostrarDatos");
    divMostrarDatos.innerHTML = ""; // Limpiar el contenido previo

    // Mostrar la información de los animales filtrados
    animalesFiltrados.forEach(animal => {
        const div = document.createElement("div");
        div.classList.add("animal-row");
        div.textContent = animal.informacion();
        divMostrarDatos.appendChild(div);
    });
});

*/