let book = {
    title : "Inception",
    director : "Christopher Nolan",
    year : "2010",
    genre : "Ciencia Ficción",
    mostrar_informacion : function() {
        return `(${this.title}, ${this.director}, ${this.year}, ${this.genre})`
    } 
}
console.log(book.mostrar_informacion());