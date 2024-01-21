let tapar = document.getElementById("tapar");
let tabla = document.getElementById("tabla");
let fallos = document.getElementById("fallos");
let juego = new Juego();


function iniciar() {
  let salida = "<tr>";
  
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 == 0) {
      salida += '</tr><tr>';
    }

    salida += `
      <td>
        <form action="#" method="get" id="formu${i}">
          <input type="image" src="${juego.mostrar(i)}" width="100" height="100">
          <input type="hidden" name="posicion" value="${i}">
        </form>
      </td>
    `;
  }
  
  salida += '</tr>';
  tabla.innerHTML = salida;
  addEventos();

  fallos.innerHTML = `<h5>Fallos: ${juego.getFallos()}</h5>`;
}


iniciar();


function foto(e) {
  e.preventDefault();
  //console.log(e);
  let id = e.target.elements[0].value;

  let anterior = juego.getAnterior();

  if (anterior==-1 && juego.estaOculta(id)) {
    juego.destaparUna(id);
    juego.setAnterior(id);
  } else if (juego.estaOculta(id)) {
    let s1 = juego.getNombre(anterior);
    let s2 = juego.getNombre(id);
    
    if (s1==s2) {      
      juego.destaparUna(id);
      juego.setAnterior(-1);
    } else {
      juego.ocultarUna(anterior);
      juego.destaparUna(id);
      juego.setAnterior(id);
      juego.incFallos();
    }
  }

  iniciar();
}


function addEventos() {
  for (let i = 0; i < 16; i++) {
    let formu = document.getElementById("formu" + i);
    formu.addEventListener('submit', foto);
  }
}


function ocultar(e) {
  e.preventDefault();
  //console.log('tapar');
  juego.taparTodos();
  juego.setAnterior(-1);
  juego.resetFallos();
  iniciar();
}


tapar.addEventListener('submit', ocultar);