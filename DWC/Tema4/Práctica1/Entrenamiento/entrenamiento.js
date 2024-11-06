class Vehiculo {
    constructor(marca, modelo, anyoFabricacion, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyoFabricacion = anyoFabricacion;
        this.precio = precio;
    }

    toString() {
        return `${this.marca} ${this.modelo}, año ${this.anyoFabricacion}, precio ${this.precio}`;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, anyoFabricacion, precio, numPuertas) {
        super(marca, modelo, anyoFabricacion, precio);
        this.numPuertas = numPuertas;
    }

    toString() {
        return `${super.toString()}, puertas: ${this.numPuertas}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, anyoFabricacion, precio, tipoManillar) {
        super(marca, modelo, anyoFabricacion, precio);
        this.tipoManillar = tipoManillar;
    }

    toString() {
        return `${super.toString()}, manillar: ${this.tipoManillar}`;
    }
}

class Concesionario {
    constructor() {
        this.vehiculos = [];
    }

    addVehicle(vehicle) {
        this.vehiculos.push(vehicle);
    }

    showVehicle(vehicle) {
        const vehicle2Show = this.vehiculos.find(v => v === vehicle);
        console.log(vehicle2Show.toString());
    }

    showAll() {
        for(let i = 0; i < this.vehiculos.length; i++) {
            this.showVehicle(this.vehiculos[i]);
        }
    }
}

const moto = new Moto("Honda", "CBR", "2024", "10€", "Redondo");
console.log(moto.toString());

const coche = new Coche("Toyota", "Corolla", "2023", "20000€", 4);
console.log(coche.toString());

const concesionario = new Concesionario();
concesionario.addVehicle(moto);
concesionario.addVehicle(coche);
concesionario.showVehicle(moto);
concesionario.showAll();
