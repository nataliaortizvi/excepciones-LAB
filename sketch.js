let pantalla;
let numero;
let x;
let clic;

let arreglo = [];
let arregloDos = [];
let cuadrado;
let agregarMas;
let eliminarMas;
let yaHayCirculo;

function setup () {
    createCanvas (600,600);
    pantalla = 0;
    numero = 0;
    x = 265;
    clic = false;
    agregarMas = false;
    eliminarMas = false;
    yaHayCirculo = false;

    //arreglos
    for (let i = 0; i < numero; i++){
        arreglo[i] = new Cuadrado(random(0,555),random(0,250),20);
    }

    for(let j = 0; j < numero; j++){
        arregloDos[j] = new Circulo(random(0,555),random(360,555),20);
    }
}

function draw () {
    switch(pantalla){
        case 0:
            background(195,215,355);

            //boton continuar
            fill(250,195,355);
            stroke(355);
            rect(220, 320,130, 50);
            noStroke();
            fill(355);
            textSize(27);
            text("Continuar", 227, 355);

            //cuadro del numero
            stroke(355);
            fill(355);
            rect(235, 190,100, 100);

            //boton de sumar o restar
            fill(250,195,355);
            rect(150,215,50,50);
            rect(370,215,50,50);

            fill(355);
            rect(158, 237, 35,4);
            rect(378, 237, 34,4);
            rect(393, 223, 4, 35);

             //interaccion botones
             if(mouseX > 220 && mouseX < 350 && mouseY > 320 && mouseY < 370){
                fill(355);
                rect(220, 320,130, 50);
                fill(195,215,355);
                textSize(27);
                text("Continuar", 227, 355);
            }

            if(mouseX > 150 && mouseX < 200 && mouseY > 215 && mouseY < 265){
                fill(355);
                rect(150,215,50,50);
                fill(195,215,355);
                rect(158, 237, 35,4);
            }

            if(mouseX > 370 && mouseX < 420 && mouseY > 215 && mouseY < 265){
                fill(355);
                rect(370,215,50,50);
                fill(195,215,355);
                noStroke();
                rect(378, 237, 34,4);
                rect(393, 223, 4, 35);
            }

            //numero
            fill(0);
            textSize(80);
            text(numero, x, 270);

            //excepcion pantalla 1
                try {
                    QueNoSeaCero(numero); 
                } catch (error) {
                    fill(355);
                    stroke(355,0,0);
                    rect(28, 90, 550, 40);
                    noStroke();
                    fill(355,0,0);
                    textSize(27);
                    text(error.message, 40, 120);
                    
                }

        
            break;
        case 1:
            background(190,355,200);
            noStroke();
            fill(290,355,200);
            rect(0,300,600,300);

            //boton agregar
            fill(130,175,305);
            stroke(355);
            rect(480,80,100,50);
            noStroke();
            fill(355);
            textSize(22);
            text("Agregar", 490, 113);

            //boton eliminar
            fill(130,175,305);
            stroke(355);
            rect(480,180,100,50);
            noStroke();
            fill(355);
            textSize(22);
            text("Eliminar", 490, 213);

            //boton doblar tamaño
            fill(130,175,305);
            stroke(355);
            rect(480,280,100,50);
            noStroke();
            fill(355);
            textSize(22);
            text("Tamaño", 490, 313);

            //boton duplicar
            fill(130,175,305);
            stroke(355);
            rect(480,380,100,50);
            noStroke();
            fill(355);
            textSize(22);
            text("Duplicar", 490, 413);

            if(mouseX > 480 && mouseX < 580 && mouseY > 80 && mouseY < 130){
                //boton agregar
            fill(355);
            stroke(355);
            rect(480,80,100,50);
            noStroke();
            fill(130,175,305);
            textSize(22);
            text("Agregar", 490, 113);
            }
            if(mouseX > 480 && mouseX < 580 && mouseY > 180 && mouseY < 230){
                //boton eliminar
              fill(355);
              stroke(355);
              rect(480,180,100,50);
              noStroke();
              fill(130,175,305);
              textSize(22);
              text("Eliminar", 490, 213);  
            }
            if(mouseX > 480 && mouseX < 580 && mouseY > 280 && mouseY < 330){
                //boton doblar tamaño
            fill(355);
            stroke(355);
            rect(480,280,100,50);
            noStroke();
            fill(130,175,305);
            textSize(22);
            text("Tamaño", 490, 313);
            }
            if(mouseX > 480 && mouseX < 580 && mouseY > 380 && mouseY < 430){
                //boton duplicar
            fill(355);
            stroke(355);
            rect(480,380,100,50);
            noStroke();
            fill(130,175,305);
            textSize(22);
            text("Duplicar", 490, 413);
            }

            //pintar cuadrados
            for(let i=0; i < arreglo.length; i++){
                a = arreglo[i];
                a.pintar();
                a.mover(); 
            }
            //pintar circulos
            for(let j=0; j < arregloDos.length; j++){
                b = arregloDos[j];
                b.pintar();
                b.mover(); 
            }

            //excepcion agregar
              try {
                NoMas(arreglo.length); 
            } catch (nomas) {
                fill(180,140,230);
                noStroke();
                rect(28, 285, 230, 30);
                fill(355);
                textSize(20);
                text(nomas.message, 40, 307);
                agregarMas = false;
                //console.log(e);
                
            }

            //excepcion eliminar
            try {
                NoMenos(arreglo.length); 
            } catch (nomenos) {
                fill(180,140,230);
                noStroke();
                rect(28, 285, 245, 30);
                fill(355);
                textSize(20);
                text(nomenos.message, 40, 307);
                eliminarMas = false;
                //console.log(nomenos);
                
            }

             //excepcion maximo tamaño
             try {
                for(let i=0; i<arreglo.length; i++){
                    todes = arreglo[i];
                    NoMasTam(todes.tam); 
                }
            } catch (nomastam) {
                fill(180,140,230);
                noStroke();
                rect(280, 285, 170, 30);
                fill(355);
                textSize(20);
                text(nomastam.message, 290, 307);
                //aumentarMas = false;
                //console.log(nomenos);
                
            }

            break;
        }
        //console.log("num",numero);
        //console.log("arraaay", arreglo.length);
        //console.log(nomenos);
    
}

function mousePressed () {
    switch(pantalla){
        case 0:
            //cambio de pantalla
            if(mouseX > 220 && mouseX < 350 && mouseY > 320 && mouseY < 370){
                clic = true;
                if(numero != 0){
                    pantalla++;
            }
        }

            //cambio de numero (restar)
            if(mouseX > 150 && mouseX < 200 && mouseY > 215 && mouseY < 265){
                if(numero >= 1){
                    numero --;
                    arreglo.pop();
            }
        }
            //cambio de numero (sumar)
            if(mouseX > 370 && mouseX < 420 && mouseY > 215 && mouseY < 265){
                if(numero <= 9){
                    numero ++;
                    clic = false;
                    arreglo.push(new Cuadrado(random(0,555),random(0,250),20));
            }
        }
            //posicion del 10
            if(numero == 10){
                x = 240;
            }else{
                x = 265;
            }
            break;
        case 1:
            //duplicar el tamaño
            if(mouseX > 480 && mouseX < 580 && mouseY > 280 && mouseY < 330){
                arreglo.forEach(elemento => {
                    elemento.cambioTam();
                });
                arregloDos.forEach(elementoDos => {
                    elementoDos.cambioTam();
                });
            }

            //eliminar
            if(mouseX > 480 && mouseX < 580 && mouseY > 180 && mouseY < 230){
                if(eliminarMas == true){
                arreglo.pop();
                if(yaHayCirculo == true){
                    arregloDos.pop();
                }
                }
            }

            //añadir
            if(mouseX > 480 && mouseX < 580 && mouseY > 80 && mouseY < 130){
                if(agregarMas == true){
                arreglo.push(new Cuadrado(random(0,555),random(0,250),20));
                if(yaHayCirculo == true){
                    arregloDos.push(new Circulo(random(0,555),random(360,555),20));
                }
            }
        }

            //duplicar arreglo
            if(mouseX > 480 && mouseX < 580 && mouseY > 380 && mouseY < 430){
                if(yaHayCirculo == false){
                arregloDos = arreglo.map(elemento => {
                    return elemento = new Circulo(random(0,555),random(360,555),20);
                })
            }
                 yaHayCirculo = true;
                //console.log(arregloDos);
            }
            break;
        }
        //console.log("a",agregar);
        //console.log("b",agregarMas);
}

function QueNoSeaCero(a){
    if((a == 0)&&(clic == true)){
        throw new MyExceptions ("ERROR: Escoja un numero diferente a cero");
    }
}

function QueNoSeaDiez(x){
    if(a == 10){
        throw new MyExceptions ("MAX");
    }
}

function NoMas(b){
    if(b >= 10){
        throw new MyExceptions ("No puede agregar más");
    }else{
        agregarMas = true;
    }
}

function NoMenos(c){
    if(c <= 0){
        throw new MyExceptions ("No puede elimininar más");
    }else{
        eliminarMas = true;
    }
}

function NoMasTam(d){
    if(d > 70){
        throw new MyExceptions ("Tamaño máximo");
    }
}



