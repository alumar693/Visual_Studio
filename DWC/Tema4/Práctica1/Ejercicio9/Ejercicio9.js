class Punto {
     punto (x, y){
        this.x = x;
        this.y = y;
        
    }

    mostrar() {
        return  `(${x}, ${y})`;
    }

}

class Recta extends Punto {
    constructor(p1, p2) {
       super(p1.x,p1.y);
       this.p2 = p2;
    }

    get longitud() {
       return Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2) 
    }

}

let recta = new Recta(new Punto(1,1), new Punto(2,2));
recta.longitud;