class Baraja {
  mazo = [];
  
  constructor() {        
    this.creaFila("C");
    this.creaFila("P");
    this.creaFila("T");
    this.creaFila("D");
  }

  creaFila(C) {
    this.mazo.push(new Carta(C, "A"));
    for (let i=2; i<11; i++) {
      this.mazo.push(new Carta(C, i.toString()));
    }
    this.mazo.push(new Carta(C, "J"));
    this.mazo.push(new Carta(C, "Q"));
    this.mazo.push(new Carta(C, "K"));
  }

  toString() {
    let salida = "";
    let cont = 0;
    
    for (let i=0; i<this.tamanio(); i++) { 
      salida += this.mazo[i].toString();
      cont += 1;
      if (cont==13 || cont==26 || cont==39){
        salida+="\n";
        //cont=0
      }  
    }

    return salida;
  }

  barajar() {
    let nuevo = [];
    let vacio = false;
    let carta;
    let pos;
    while (vacio==false) {
      if (this.tamanio()==1) {
        vacio=true;
      }
      pos = Math.floor(Math.random()*this.tamanio());
      carta = this.mazo.splice(pos, 1);
      nuevo.push(carta[0]);
    }
    this.mazo = nuevo
  }
  
  dameCarta() {
    return this.mazo.shift();
  }

  tamanio() {
    return this.mazo.length;
  }

  miraCarta(posicion) {
    return this.mazo[posicion];
  }
}
