class Client {
    static #id = 0;
    constructor(name, email, telephone) {
        this.id = Client.#id++
        this.name = name
        this.email = email
        this.telephone = telephone
    }

    showInfo() {
        return `${this.name}, ${this.email}, ${this.telephone}`
    }

}

class Bill {
    static #id = 0;
    
    constructor(idClient, totalBill, isPayed) {
        this.idClient = idClient
        this.totalBill = totalBill
        this.isPayed = isPayed
        this.id = Bill.generateId();
    }

    showInfo() {
        return `${this.idClient}, ${this.totalBill}, ${this.showState()}`
    }

    payBill() {
        if(this.isPayed == false) {
            this.isPayed = true
        }else {
            console.log("La factura ya está pagada.")
        }
    }

    showState() {
        if(this.isPayed) {
            return "pagada"
        }else{
            return "pendiente"
        }
    }

    static generateId() {
        return Bill.#id++

    }
}

class DetailedBill extends Bill{
    constructor(idClient, totalBill, isPayed) {
        super(idClient, totalBill, isPayed)
        this.articles = []
    }

    addArticle(article) {
        this.articles.push(article)
    }

    printDetailedBill() {
        this.articles.forEach(article => console.log(article))
    }

}

class Article {
    
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const juan = new Client("Juan", "juan@mail.com", 634567187);
const teresa = new Client("Teresa", "teresa@mail.com", 655561231);
const luis = new Client("Luis", "luis@mail.com", 602354322);
const JuansBill = new Bill(juan.id, 300, false);
console.log(JuansBill.showInfo());
const detailedBill = new DetailedBill();
detailedBill.addArticle(new Article("articulo1", 10));
detailedBill.printDetailedBill();
