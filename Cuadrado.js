class Cuadrado extends Figura{
    constructor(px,py,tam){
        super(px,py,tam);
    }

    pintar(){
        fill(230,125,190)
        stroke(355);
        rect(this.px,this.py,this.tam,this.tam);
    }
}