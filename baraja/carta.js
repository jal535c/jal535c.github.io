class Carta {
  constructor(palo, valor) {
    this.palo = palo;
    this.valor = valor;
  }

  toString() {
    let salida = "[" + this.palo + "," + this.valor + "]";
    return salida;
  }

  damePalo() {
    return this.palo;
  }

  dameValor() {
    return this.valor;
  }

  dameNombreFichImg() {
    let salida = "Poker-sm-" + this.palo + this.valor + ".png";
    return salida;
  }
}