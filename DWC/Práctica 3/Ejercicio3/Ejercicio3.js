class InventoryManager {
    static inventory = new Map(); // Usar un Map para almacenar productos y precios

    // Agregar un nuevo producto al inventario
    static addProduct(name, price) {
        if (InventoryManager.inventory.has(name)) {
            console.log(`El producto ${name} ya existe.`);
        } else {
            InventoryManager.inventory.set(name, price);
            console.log(`Producto ${name} agregado con precio ${price}`);
        }
    }

    // Eliminar un producto del inventario
    static deleteProduct(name) {
        if (InventoryManager.inventory.has(name)) {
            InventoryManager.inventory.delete(name);
            console.log(`Producto ${name} eliminado.`);
        } else {
            console.log(`El producto ${name} no existe.`);
        }
    }

    // Actualizar el precio de un producto existente
    static updatePrice(name, newPrice) {
        if (InventoryManager.inventory.has(name)) {
            InventoryManager.inventory.set(name, newPrice);
            console.log(`Precio de ${name} actualizado a ${newPrice}`);
        } else {
            console.log(`El producto ${name} no existe.`);
        }
    }

    // Mostrar el inventario completo
    static showInventory() {
        const result = document.getElementById('resultado');
        result.innerHTML = "Inventario de Productos:\n";
        InventoryManager.inventory.forEach((price, name) => {
            result.innerHTML += `${name}: ${price}€\n`;
        });
    }
}

document.getElementById("showInventory").addEventListener('click', () => {
    InventoryManager.showInventory();
});

document.getElementById("addProductA").addEventListener('click', () => {
    InventoryManager.addProduct('Producto A', 25);
});

document.getElementById("addProductB").addEventListener('click', () => {
    InventoryManager.addProduct('Producto B', 30);
});

document.getElementById("updatePriceA").addEventListener('click', () => {
    InventoryManager.updatePrice('Producto A', 40);
});

document.getElementById("deleteProductB").addEventListener('click', () => {
    InventoryManager.deleteProduct('Producto B');
});
