/*
El operador instanceof en JavaScript se usa para verificar 
si un objeto es una instancia de una clase o de un tipo específico. 
Devuelve true si el objeto pertenece al tipo especificado 
o hereda de él, y false en caso contrario.
*/
class Animal {}
class Perro extends Animal {}

const miMascota = new Perro();

console.log(miMascota instanceof Perro);    // true, porque miMascota es un Perro
console.log(miMascota instanceof Animal);   // true, porque Perro hereda de Animal
console.log(miMascota instanceof Object);   // true, porque todos los objetos en JS derivan de Object
console.log(miMascota instanceof Array);    // false, porque miMascota no es un Array
