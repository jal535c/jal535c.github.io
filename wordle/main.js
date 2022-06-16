var height = 4; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
let correct =0;

// var word = "SQUID";
var wordList = [
	"naval", "hogar", "cauce", "arena", "galgo",
	"grado", "mayor", "colon", "helio", "papel",
	"ayuda", "linea", "carne", "bella", "panel",
	"error", "kebab", "motor", "enema", "mundo", 
	"costa", "grupo", "listo", "vodka", "radio", "reloj", "tilde", "sonda",
	"truco", "grima", "epoca", "freno", "viral", "vital", "traza", "balon",
	"buceo", "abeto", "abeja", "acera", "juego", "avena", "baile", "capea",
	"celda", "cesta", "calor", "deuda", "dieta", "encia", "crema", "acero",
	"nariz", "movil", "ducha", "plato", "suelo", "texto", "color", "altar",
	"dulce", "tarta", "libro", "chino", "ligue", "patio", "trapo", "robot",
	"retal", "relax", "regla", "paseo", "audio", "yelmo", "recta", "cebra",
	"cabra", "negro", "modal", "caldo", "birra", "abril", "enero", "junio",
	"laser", "signo", "nariz", "turno", "coche", "fecha", "opera", "hueso",
	"pecho", "pleno", "igual", "faena", "fibra", "balsa", "negro", "ambar",
	"letra", "trono", "tonto", "tirar", "cifra", "india", "salsa", "caras",
	"tapon", "japon", "lugar", "lunar", "funda", "grano", "grado", "grava",
	"traza", "tibio", "broma", "tenis", "cromo", "combo", "monto", "curva",
	"oveja", "oblea", "acero", "furor", "rumor", "sobra", "solar", "genio",
	"helio", "julio", "astro", "alamo", "abaco", "melon", "moler"
];

//var guessList = [];

//guessList = guessList.concat(wordList);

var word = wordList[Math.floor( Math.random() * wordList.length )].toUpperCase();
console.log(word);
//word = 'programar'.toUpperCase();
//width = word.length;
console.log(width);


function desordenaPalabra(palabra) {
	let resultado = "";
  let posicionesYaElegidas = [];
  let posicionCandidata;
  let encontrado = false;
		
	for (let i=0; i<palabra.length; i++) {
    do {
      posicionCandidata = Math.floor(Math.random()*palabra.length);
      encontrado = false;
      for (let j=0; j<i && !encontrado; j++) {
        if (posicionCandidata == posicionesYaElegidas[j]) {
          encontrado=true;
        }
      }
    } while (encontrado);
		
		if (!encontrado) {
      resultado = resultado + palabra.charAt(posicionCandidata);	//tambien puedo usar array
      posicionesYaElegidas[i] = posicionCandidata;
    }      
  }
    
  return resultado;
}


/*
Eventos: en el html, onclick
en funcion anonima
metodo addeventlistener, keypress solo detecta letras, usar keydown mejor
*/
window.onload = function () {
	let url = 'https://palabras-aleatorias-public-api.herokuapp.com/random';
	fetch(url)
    .then(res => res.json())
    .then(data => {
			let palabra = data.body.Word; 
			//pintar(palabra);
			//initialize(palabra.length);
		})
    .catch(error => console.log(error));

	initialize();
	
	pintar(word);
}

function pintar(palabra) {
	let resul = desordenaPalabra(palabra);
	document.getElementById('title').innerHTML = resul;
}

function initialize(ancho) {
	//width = ancho;
	for (let r = 0; r < height; r++) {
		for (let c = 0; c < width; c++) {
			let tile = document.createElement("div");
			tile.id = r.toString() + "-" + c.toString();
			tile.classList.add("tile");
			tile.innerText = "";
			document.getElementById("board").appendChild(tile);
		}
	}

	document.addEventListener("keydown", (e) => {
		processInput(e);
	});
}


function leerTeclado(but) {
	let letra = but.getAttribute('data-key');
	console.log(letra);

	if (letra == 'enter') {
		processInput({code:'Enter'});
	} else if (letra == 'del') {
		processInput({code:'Backspace'});
	} else {
		processInput({code:'Key'+letra});	
	}
}


function processInput(e) {
	if (gameOver) return;

	// alert(e.code);

	if (e.code >= "KeyA" && e.code <= "KeyZ") {
		if (col < width) {	//si no ha llegado al final
			let currTile = document.getElementById(row.toString() + '-' + col.toString());
			if (currTile.innerText == "") {
				currTile.innerText = e.code[3];	//pone la letra en el tile
				currTile.classList.add("animate__animated");
				currTile.classList.add("animate__bounceIn");
				currTile.classList.add("siborde");
				currTile.classList.remove("noborde");
				col += 1;				//avanza una columna
			}
		}
	} else if (e.code == "Backspace") {
		if (col>0 && col <= width) {
			col -= 1;
		}
		let currTile = document.getElementById(row.toString() + '-' + col.toString());
		currTile.innerText = "";		//borra
		currTile.classList.remove("animate__bounceIn");
		currTile.classList.remove("animate__animated");
		currTile.classList.remove("siborde");
		currTile.classList.add("noborde");
	} else if (e.code == "Enter") {
		if (col==width) {		//si esta en la ultima columna
						
			checkLetters();
			row += 1;
			col = 0;
		} else {
			new Noty({
				type: 'alert',
				layout: 'topCenter',
				theme: 'nest',
				text: 'No hay suficientes letras',
				timeout: 1200
			}).show();
		}		
	}

	//si llega a ultima fila, muestra solucion
	if (!gameOver && row==height) {	
		gameOver = true;
		
		setTimeout(()=>{
			//document.getElementById("answer").innerText = word;
			new Noty({
				type: 'alert',
				layout: 'topCenter',
				theme: 'nest',
				text: word,
				timeout: 2000
			}).show();
		}, 1500);
	}
}


function checkLetters() {
	correct = 0;
	for (let c=0; c<width; c++) {
		let currTile = document.getElementById(row.toString() + '-' + c.toString());
		currTile.classList.remove("siborde");
		let letter = currTile.innerText;

		setTimeout(() => {
			if (word[c] == letter) {	//posicion correcta?
				currTile.classList.add("correct");	
				correct += 1;
			} else if (word.includes(letter)) {	//letra presente en la palabra?
				currTile.classList.add("present");
			} else {
				currTile.classList.add("absent");
			}
		}, (c+1)*500/2);		//pone el color a la mitad de la animacion
		
		currTile.classList.add('animated');		//empieza la animacion, a la mitad se pone el color
		currTile.style.animationDelay = `${(c * 500) / 2}ms`;	//en el css le digo cuanto tarda en saltar la animacion para cada tile, va en cascada

		//haGanado();
	}

	setTimeout(() => {
		haGanado();		//debo esperar que acabe la animacion, si son mas letras, tarda mas, 3000
	}, 1500);
}


function haGanado() {		//se debe ejecutar al acabar la animacion
	if (correct === width) {		//si acierto todas las letras de una fila
		gameOver = true;
		new Noty({
			type: 'alert',
			layout: 'topCenter',
			theme: 'nest',
			text: 'Has acertado !!!',
			timeout: 2000
		}).show();
	}
}