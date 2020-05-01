class Circulo extends Figura{
    constructor(px,py,tam){
        super(px,py,tam);
    }

    pintar(){
        fill(252,155,190);
        stroke(355);
        ellipse(this.px,this.py,this.tam,this.tam);
    }
}