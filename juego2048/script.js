//document.addEventListener('DOMContentLoaded', () =>  {
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');
  const keyboard = document.getElementById('teclado');
  const bestDisplay = document.getElementById('best');

  let squares = [];
  const width = 4;
  let score = 0;

  let best = window.localStorage.getItem('best');
  //console.log(best);
  if (best===null) {
    window.localStorage.setItem('best', 0);
    best = 0;
  }
  bestDisplay.innerHTML = best;

  //create the playing board
  function createBoard() {
    for (let i=0; i<width*width; i++) {
      let square = document.createElement('div');
      square.innerHTML = 0;
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    generate();
    generate();
  }
  //first action at load document
  createBoard();


  //generate a new number (in random position, write 2)
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;

      squares[randomNumber].classList.add("animate__animated");
      squares[randomNumber].classList.add("animate__bounceIn");
      
      checkForGameOver();
    } else {
      generate();
    }
  }


  function moveRight() {
    for (let i=0; i<16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalFour = squares[i+3].innerHTML;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

        let filteredRow = row.filter(num => num);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = zeros.concat(filteredRow);

        squares[i].innerHTML = newRow[0];
        squares[i +1].innerHTML = newRow[1];
        squares[i +2].innerHTML = newRow[2];
        squares[i +3].innerHTML = newRow[3];
      }
    }
  }

  function moveLeft() {
    for (let i=0; i<16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalFour = squares[i+3].innerHTML;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

        let filteredRow = row.filter(num => num);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = filteredRow.concat(zeros);

        squares[i].innerHTML = newRow[0];
        squares[i +1].innerHTML = newRow[1];
        squares[i +2].innerHTML = newRow[2];
        squares[i +3].innerHTML = newRow[3];
      }
    }
  }


  function moveUp() {
    for (let i=0; i<4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i+width].innerHTML;
      let totalThree = squares[i+(width*2)].innerHTML;
      let totalFour = squares[i+(width*3)].innerHTML;
      let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

      let filteredColumn = column.filter(num => num);
      let missing = 4 - filteredColumn.length;
      let zeros = Array(missing).fill(0);
      let newColumn = filteredColumn.concat(zeros);

      squares[i].innerHTML = newColumn[0];
      squares[i +width].innerHTML = newColumn[1];
      squares[i+(width*2)].innerHTML = newColumn[2];
      squares[i+(width*3)].innerHTML = newColumn[3];
    }
  }

  function moveDown() {
    for (let i=0; i<4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i+width].innerHTML;
      let totalThree = squares[i+(width*2)].innerHTML;
      let totalFour = squares[i+(width*3)].innerHTML;
      let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

      let filteredColumn = column.filter(num => num);
      let missing = 4 - filteredColumn.length;
      let zeros = Array(missing).fill(0);
      let newColumn = zeros.concat(filteredColumn);

      squares[i].innerHTML = newColumn[0];
      squares[i +width].innerHTML = newColumn[1];
      squares[i+(width*2)].innerHTML = newColumn[2];
      squares[i+(width*3)].innerHTML = newColumn[3];     
    }
  }

  function updateBest() {
    if (score >= best) {
      best = score;
      window.localStorage.setItem('best', best);
      bestDisplay.innerHTML = best;
    }
  }

  //before last compare with last
  function combineRow() {
    for (let i=0; i<(16-1); i++) {
      if (squares[i].innerHTML === squares[i+1].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i+1].innerHTML = 0;
                
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();
      }
    }
    checkForWin();
  }

  function combineRowRight() {
    for (let i=15; i>0; i--) {
      if (squares[i].innerHTML === squares[i-1].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-1].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i-1].innerHTML = 0;
                
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();
      }
    }
    checkForWin();
  }

  //actual compare with 4 ahead
  function combineColumn() {
    for (let i=0; i<(16-width); i++) {
      if (squares[i].innerHTML === squares[i+width].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i+width].innerHTML = 0;
        
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();
      }
    }
    checkForWin();
  }

  function combineColumnDown() {
    for (let i=15; i>3; i--) {
      if (squares[i].innerHTML === squares[i-width].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-width].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i-width].innerHTML = 0;
        
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();
      }
    }
    checkForWin();
  }


  function eliminar_ani() {
    for (let i=0; i<16; i++) {
      squares[i].classList.remove("animate__bounceIn");
      squares[i].classList.remove("animate__animated");
    }
  }


  //assign functions to keyCodes
  function control(e) {
    eliminar_ani();
    if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 39) {
      keyRight();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }
  document.addEventListener('keyup', control);

  function keyRight() {
    moveRight();
    combineRowRight();   //include checkForWin
    moveRight();
    generate();     //include checkForGameOver
  }

  function keyLeft() {
    moveLeft();
    combineRow();
    moveLeft();
    generate();
  }

  function keyUp() {
    moveUp();
    combineColumn();
    moveUp();
    generate();
  }

  function keyDown() {
    moveDown();
    combineColumnDown();
    moveDown();
    generate();
  }


  //check for the number 2048 in the squares to win
  function checkForWin() {
    for (let i=0; i<squares.length; i++) {
      if (squares[i].innerHTML == 2048) {
        resultDisplay.innerHTML = 'You WIN';
        document.removeEventListener('keyup', control);
        keyboard.style.display = 'none';
        setTimeout(() => clear(), 3000);
      }
    }
  }

  //check if there are no zeros on the board to lose
  function checkForGameOver() {
    let zeros = 0;
    for (let i=0; i<squares.length; i++) {
      if (squares[i].innerHTML == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      resultDisplay.innerHTML = 'GAME OVER';
      document.removeEventListener('keyup', control);
      keyboard.style.display = 'none';
      setTimeout(() => clear(), 3000);
    }
  }

  //clear timer
  function clear() {
    clearInterval(myTimer);
  }


  //add colours
  function addColours() {
    for (let i=0; i<squares.length; i++) {
      if (squares[i].innerHTML == 0) {
        squares[i].style.backgroundColor = '#afa192';
        
      }      
      else if (squares[i].innerHTML == 2) {
        squares[i].style.backgroundColor = '#eee4da';
        
      }
      else if (squares[i].innerHTML  == 4) squares[i].style.backgroundColor = '#ede0c8'; 
      else if (squares[i].innerHTML  == 8) squares[i].style.backgroundColor = '#f2b179';
      else if (squares[i].innerHTML  == 16) squares[i].style.backgroundColor = '#ffcea4'; 
      else if (squares[i].innerHTML  == 32) squares[i].style.backgroundColor = '#e8c064';
      else if (squares[i].innerHTML == 64) squares[i].style.backgroundColor = '#ffab6e';
      else if (squares[i].innerHTML == 128) squares[i].style.backgroundColor = '#fd9982'; 
      else if (squares[i].innerHTML == 256) squares[i].style.backgroundColor = '#ead79c';
      else if (squares[i].innerHTML == 512) squares[i].style.backgroundColor = '#76daff';
      else if (squares[i].innerHTML == 1024) squares[i].style.backgroundColor = '#beeaa5'; 
      else if (squares[i].innerHTML == 2048) squares[i].style.backgroundColor = '#d7d4f0';
    }
  }
  addColours();

  var myTimer = setInterval(addColours, 50);

//});

function leerTeclado(but) {
  eliminar_ani();
  let tecla = but.getAttribute('id');
  console.log(tecla);

  if (tecla == 'U') {
    keyUp();
  } else if (tecla == 'L') {
    keyLeft();
  } else if (tecla == 'D') {
    keyDown();
  } else if (tecla == 'R') {
    keyRight();
  }
}