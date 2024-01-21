class Juego {
  nombres = [];   //nombres de las imagenes desordenadas, cada una dos veces
  visibles = [];  //imagenes a mostrar, 0 si es oculta
  hayBoton;     //boton tapar, a 1 se pinta
  anterior;     //guarda el ultimo boton/imagen pulsada, -1 ninguno
  fallos;

  constructor() {
    this.rellenar();
    this.barajar();
    this.copiarTodos();
    this.hayBoton = 1;
    this.anterior = -1;
    this.fallos = 0;
  }

  getBoton() {
    return this.hayBoton;
  }

  setBoton(n) {
    this.hayBoton = n;
  }

  getAnterior() {
    return this.anterior;
  }

  setAnterior(num) {
    this.anterior = num;
  }

  rellenar() {
    for (let i=0; i<16; i++) {
      if (i<8) {
        this.nombres[i] = "imagenes/imagen" + (i+1) + ".jpg";
      } else {
        this.nombres[i] = "imagenes/imagen" + (i-7) + ".jpg";
      }
    }
  }

  barajar() {
    let nuevo = [];    
    let ele;
    let pos;
    while (this.nombres.length > 0) {
      pos = Math.floor(Math.random()*this.nombres.length);
      ele = this.nombres.splice(pos, 1);
      nuevo.push(ele[0]);
    }
    this.nombres = nuevo;
  }

  copiarTodos() {
    for (let i=0; i<16; i++) {
      this.visibles[i] = this.nombres[i];
    }
    
  }

  taparTodos() {
    for (let i=0; i<16; i++) {
      this.visibles[i]="imagenes/imagen0.jpg";
    }
  }

  destaparUna(pos) {
    this.visibles[pos] = this.nombres[pos]
  }

  ocultarUna(pos) {
    this.visibles[pos] = "imagenes/imagen0.jpg";
  }

  estaOculta(pos) {
    if (this.visibles[pos] == "imagenes/imagen0.jpg") {
      return true;
    } else {
      return false;
    }
  }

  mostrar(pos) {
    return this.visibles[pos];
  }

  getNombre(pos) {
    return this.nombres[pos];
  }

  incFallos() {
    this.fallos++;
  }

  resetFallos() {
    this.fallos = 0;
  }

  getFallos() {
    return this.fallos;
  }
}