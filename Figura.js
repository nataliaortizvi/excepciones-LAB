class Figura{
    constructor(px, py, tam){
        this.px = px;
        this.py = py;
        this.tam = tam;
        this.vel = 3;
    }

    pintar(){}

    mover(){
        this.px += this.vel;
        if(this.px <= 0 || this.px >= 560){
            this.vel *= -1;
        }
    }

    cambioTam(){
        if(this.tam < 80)
        this.tam *= 2;
    }
}