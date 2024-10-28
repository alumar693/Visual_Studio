class Libro {
    constructor(title, author, publication_year) {
        this.title = title;
        this.author = author;
        this.publication_year = publication_year;
    }
    show_info() {
        console.log(`${this.title}, de ${this.author}, publicado en ${this.publication_year}`);
    }

    is_classic() {
        let actualDate = new Date();
        return actualDate.getFullYear() - this.publication_year >= 50;
    }
}
let book = new Libro();
book.title = `Frankenstein`;
book.author = `Mary Shelley`;
book.publication_year = 1818;
book.show_info();
console.log(book.is_classic());
console.log(book);
book.publication_year = 1;
for(let prop in book) {
    console.log(`${prop} =  ${book[prop]}`);
}