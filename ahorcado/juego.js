const palabras = [
  "COCHE", "CASA", "COMIDA", "CARRETERA",
  "ORDENADOR", "HEROE", "SUEÑO", "OBJETO",
  "BARCO", "VENTANA", "TIENDA", "INVIERNO",
  "MEMORIA", "TECLADO", "LIBRETA", "MUEBLE",
  "JUEGO", "ELECTRICIDAD", "TELEFONO"
];


class Juego {  
  elegida = "";
  palabra = [];   //para hacer comparaciones
  oculta = [];    //lo que veo
  fallos;
  lista = [];     //guarda las letras que se van introduciendo

  constructor() {
    this.fallos = 0;
    this.eligePalabra();
    this.generaPalabraOculta();
  }

  eligePalabra() {    //elige palabra y crea array de char
    this.elegida = palabras[parseInt(Math.random()*palabras.length)];
    for (let i=0; i<this.elegida.length; i++) {
      this.palabra.push(this.elegida.charAt(i));
    }
  }

  generaPalabraOculta() {        
    for (let i=0; i<this.palabra.length; i++) {
      this.oculta.push('_');
    }
  }

  toString() {    //devuelve en un string la palabra oculta
    let salida = "";
    for (let i=0; i<this.oculta.length; i++) {
      salida += this.oculta[i] + " ";
    }
    return salida;
  }

  getElegida() {
    return this.elegida;
  }

  getPalabra() {
    return this.palabra;
  }

  setOculta() {
    this.oculta = this.palabra;
  }

  getFallos() {
    return this.fallos;
  }

  addFallos() {
    this.fallos++;
  }

  letraYaIntroducida(letra) {
    let repetida = false;
    for (let i=0; i<this.lista.length; i++) {
      if (this.lista[i]==letra) {
        repetida = true;
      }
    }
    if (repetida==false) {
      this.lista.push(letra);
    }
    return repetida;
  }

  compruebaLetra(letra) {   //despata letras, tiene en cuenta las repetidas
    let acierto = false;
    for (let i=0; i<this.palabra.length; i++) {
      if (this.palabra[i]==letra) {
        this.oculta[i] = letra;
        acierto = true;
      }
    }
    return acierto;
  }

  compruebaGanaJuego() {
    let haGanado = true;
    for (let i=0; i<this.oculta.length; i++) {
      if (this.oculta[i]=='_') {
        haGanado = false;
      }
    }
    return haGanado;
  }
}