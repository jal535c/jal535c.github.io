var height = 8; //intentos
var width = 6; //digitos del numero
var maxNumber = 1000000;

var row = 0; //intento actual
var col = 0; //digito actual

var gameOver = false;
let correct =0;

function number() {
	let n = Math.floor( Math.random() * maxNumber );
	let word = n.toString();
	
  if (word.length < width) {
		let veces = width - word.length;
    for (let i=0; i<veces; i++) {		//word cambia, no lo puedo usar en el bucle
      word = '0'+word;
    }
	}
/*
	if (word.length==4) {
		word = '0' + word;
	}
	if (word.length==3) {
		word = '00' + word;
	}
	if (word.length==2) {
		word = '000' + word;
	}
	if (word.length==1) {
		word = '0000' + word;
	} 		
	*/
	return word;
}

var word = number();
console.log(word);

/*
Eventos: en el html, onclick
en funcion anonima
metodo addeventlistener, keypress solo detecta letras, usar keydown mejor
*/
window.onload = function () {
	initialize();
}

function initialize() {
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
	let num = but.getAttribute('data-key');
	console.log(num);

	if (num == 'enter') {
		processInput({code:'Enter'});
	} else if (num == 'del') {
		processInput({code:'Backspace'});
	} else {
		processInput({code:'Digit'+num});	
	}
}

function processInput(e) {
	if (gameOver) return;

	//alert(e.code);

	if (e.code >= "Digit0" && e.code <= "Digit9") {
		if (col < width) {	//si no ha llegado al final
			let currTile = document.getElementById(row.toString() + '-' + col.toString());
			if (currTile.innerText == "") {
				currTile.innerText = e.code[5];	//poner la letra en el tile
				col += 1;				//avanza una columna
			}
		}
	} else if (e.code == "Backspace") {
		if (col>0 && col <= width) {
			col -= 1;
		}
		let currTile = document.getElementById(row.toString() + '-' + col.toString());
		currTile.innerText = "";		//borra
	} else if (e.code == "Enter") {
		if (col==width) {
			update();
			row += 1;
			col = 0;
		} else {
			//alert('No hay suficientes numeros');
			//swal("No hay suficientes numeros.");
			new Noty({
				type: 'alert',
				layout:'topCenter',
				theme:'nest',
				text: 'No hay suficientes números',
				timeout: 1200
			}).show();
		}
		
	}

	//si llega a ultima fila, muestra solucion
	if (!gameOver && row==height) {	
		gameOver = true;
		//document.getElementById("answer").innerText = word;
		setTimeout(()=>{
			//swal(word, "Game Over");
			new Noty({
				type: 'alert',
				layout:'topCenter',
				theme:'nest',
				text: 'Solución: '+word,
				timeout: 4000
			}).show();
		}, 1500);
		
	}
}

function estaPresente(letter) {

}

function update() {
	correct = 0;
	for (let c=0; c<width; c++) {
		let currTile = document.getElementById(row.toString() + '-' + c.toString());
		let letter = currTile.innerText;

		setTimeout(() => {
			if (word[c] == letter) {	//posicion correcta?
				currTile.classList.add("correct");	
				correct += 1;
				//contadorNumeros[letter]-=1;
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
		haGanado();		//debo esperar que acabe la animacion
	}, 1500);
}

function haGanado() {
	if (correct === width) {		//si acierto todas las letras de una fila
		gameOver = true;
		//swal("Great.");
		new Noty({
			type: 'alert',
			layout:'topCenter',
			theme:'nest',
			text: 'Has acertado !!!',
			timeout: 4000
		}).show();
	}
}