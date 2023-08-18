//document.addEventListener('DOMContentLoaded', () =>  {
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');
  const keyboard = document.getElementById('teclado');
  const bestDisplay = document.getElementById('best');

  let squares = [];
  let squaresOld = [];
  const width = 4;
  let score = 0;

  //logic for the high score
  let best = window.localStorage.getItem('best');
  //console.log(best);
  if (best===null) {
    window.localStorage.setItem('best', 0);
    best = 0;
  }
  bestDisplay.innerHTML = best;

  function createOld() {
    for (let i=0; i<width*width; i++) {
      let square = document.createElement('div');
      square.innerHTML = 0;
      //gridDisplay.appendChild(square);
      //squares.push(square);
      squaresOld.push(square);
    }
  }

  function saveSquaresOld() {
    for (let i=0; i<16; i++) {
      squaresOld[i].innerHTML = squares[i].innerHTML;
    }
  }

  function savegame() {
    
  }

  //create the playing board
  function createBoard() {
    for (let i=0; i<width*width; i++) {
      let square = document.createElement('div');
      square.innerHTML = 0;
      gridDisplay.appendChild(square);
      squares.push(square);
      //squaresOld.push(square);    //link reference to same
    }
    generate();
    generate();
    //saveSquaresOld();
  }
  //first action at load document
  createBoard();
  createOld();
  savegame();


  //generate a new number (write 2 or 4 in random position)
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    
    let initialNumber = 4;
    if (Math.random() < 0.75) {
      initialNumber = 2;
    }
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = initialNumber;

      squares[randomNumber].classList.add("animate__animated");
      squares[randomNumber].classList.add("animate__bounceIn");
      
      checkForGameOver();
    } else {
      generate();
    }
  }


  //four times, one for each row, simulating shifting 
  function moveRight() {
    let haMovido = false;
    for (let i=0; i<16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalFour = squares[i+3].innerHTML;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

        let filteredRow = row.filter(num => num);   //remove 0's
        let missing = 4 - filteredRow.length;     //count 0's removed
        let zeros = Array(missing).fill(0);       //fill new array with 0's
        let newRow = zeros.concat(filteredRow);   //concat both arrays

        if (row[0]!==newRow[0] || row[1]!==newRow[1] || row[2]!==newRow[2] || row[3]!==newRow[3]) {
          haMovido = true;
        }

        squares[i].innerHTML = newRow[0];
        squares[i +1].innerHTML = newRow[1];
        squares[i +2].innerHTML = newRow[2];
        squares[i +3].innerHTML = newRow[3];
      }
    }
    return haMovido;
  }

  function moveLeft() {
    let haMovido = false;
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

        if (row[0]!==newRow[0] || row[1]!==newRow[1] || row[2]!==newRow[2] || row[3]!==newRow[3]) {
          haMovido = true;
        }

        squares[i].innerHTML = newRow[0];
        squares[i +1].innerHTML = newRow[1];
        squares[i +2].innerHTML = newRow[2];
        squares[i +3].innerHTML = newRow[3];
      }
    }
    return haMovido;
  }


  function moveUp() {
    let haMovido=false;
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

      if (column[0]!==newColumn[0] || column[1]!==newColumn[1] || column[2]!==newColumn[2] || column[3]!==newColumn[3]) {
        haMovido = true;
      }

      squares[i].innerHTML = newColumn[0];
      squares[i +width].innerHTML = newColumn[1];
      squares[i+(width*2)].innerHTML = newColumn[2];
      squares[i+(width*3)].innerHTML = newColumn[3];
    }
    return haMovido;
  }

  function moveDown() {
    let haMovido=false;
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

      if (column[0]!==newColumn[0] || column[1]!==newColumn[1] || column[2]!==newColumn[2] || column[3]!==newColumn[3]) {
        haMovido = true;
      }

      squares[i].innerHTML = newColumn[0];
      squares[i +width].innerHTML = newColumn[1];
      squares[i+(width*2)].innerHTML = newColumn[2];
      squares[i+(width*3)].innerHTML = newColumn[3];     
    }
    return haMovido;
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
    let haCombinado=false;
    for (let i=0; i<(16-1); i++) {
      if (i!=3 && i!=7 && i!=11) {
        if (squares[i].innerHTML === squares[i+1].innerHTML) {
          let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML);
                  
          squares[i].innerHTML = combinedTotal;
          squares[i+1].innerHTML = 0;
                  
          score += combinedTotal;
          scoreDisplay.innerHTML = score;
          updateBest();

          if (combinedTotal>0) {
            haCombinado=true;
          }
        }
      }
      
    }
    checkForWin();
    return haCombinado;
  }

  function combineRowRight() {
    let haCombinado = false;
    for (let i=15; i>0; i--) {
      if (i!=12 && i!=8 && i!=4) {
        if (squares[i].innerHTML === squares[i-1].innerHTML) {
          let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-1].innerHTML);
                  
          squares[i].innerHTML = combinedTotal;
          squares[i-1].innerHTML = 0;
                  
          score += combinedTotal;
          scoreDisplay.innerHTML = score;
          updateBest();

          if (combinedTotal>0) {
            haCombinado=true;
          }
        }
      }      
    }
    checkForWin();
    return haCombinado;
  }

  //actual compare with 4 ahead
  function combineColumn() {
    let haCombinado=false;
    for (let i=0; i<(16-width); i++) {
      if (squares[i].innerHTML === squares[i+width].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i+width].innerHTML = 0;
        
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();

        if (combinedTotal>0) {
          haCombinado=true;
        }
      }
    }
    checkForWin();
    return haCombinado;
  }

  function combineColumnDown() {
    let haCombinado=false;
    for (let i=15; i>3; i--) {
      if (squares[i].innerHTML === squares[i-width].innerHTML) {
        let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-width].innerHTML);
                
        squares[i].innerHTML = combinedTotal;
        squares[i-width].innerHTML = 0;
        
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
        updateBest();

        if (combinedTotal>0) {
          haCombinado=true;
        }
      }
    }
    checkForWin();
    return haCombinado;
  }


  function eliminar_ani() {
    for (let i=0; i<16; i++) {
      squares[i].classList.remove("animate__bounceIn");
      squares[i].classList.remove("animate__animated");
    }
  }

  //assign functions to keyCodes
  function control(e) {
    saveSquaresOld();
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
    addColours();
  }
  document.addEventListener('keyup', control);

  function keyRight() {
    let haMovido=false;
    let haCombinado=false;
    haMovido=moveRight();
    haCombinado= combineRowRight();   //include checkForWin
    moveRight();    // 2 2 4 4 depens if there is combination
    if (haMovido || haCombinado)
      generate();     //include checkForGameOver
  }

  function keyLeft() {
    let haMovido=false;
    let haCombinado=false;
    haMovido= moveLeft();
    haCombinado= combineRow();
    moveLeft();
    if (haMovido || haCombinado)
      generate();
  }

  function keyUp() {
    let haMovido=false;
    let haCombinado=false;
    haMovido= moveUp();
    haCombinado= combineColumn();
    moveUp();
    if (haMovido || haCombinado)
      generate();
  }

  function keyDown() {
    let haMovido=false;
    let haCombinado=false;
    haMovido= moveDown();
    haCombinado= combineColumnDown();
    moveDown();
    if (haMovido || haCombinado)
      generate();
  }


  //check for the number 2048 in the squares to win
  function checkForWin() {
    for (let i=0; i<squares.length; i++) {
      if (squares[i].innerHTML == 2048) {
        resultDisplay.innerHTML = 'You WIN';
        document.removeEventListener('keyup', control);
        keyboard.style.display = 'none';
        //setTimeout(() => clear(), 3000);
      }
    }
  }

  //check if there are no zeros on the board and if can i move the full board
  function checkForGameOver() {
    let zeros = 0;
    let canMoveFullBoard = false;

    for (let i=0; i<squares.length; i++) {
      if (squares[i].innerHTML == 0) {
        zeros++;
      }
    }

    for (let i=0; i<15; i++) {
      if (i!=3 && i!=7 && i!=11) {
        if (squares[i].innerHTML === squares[i+1].innerHTML) {
          canMoveFullBoard = true;
        }
      }
      
    }
    for (let i=0; i<12; i++) {
      if (squares[i].innerHTML === squares[i+width].innerHTML) {
        canMoveFullBoard = true;
      }
    }

    if (zeros === 0 && !canMoveFullBoard) {
      resultDisplay.innerHTML = 'GAME OVER';
      document.removeEventListener('keyup', control);
      keyboard.style.display = 'none';
      //setTimeout(() => clear(), 3000);
    }
  }

  //clear timer
  //function clear() {
  //  clearInterval(myTimer);
  //}


  //add colours and sizes
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
      else if (squares[i].innerHTML == 1024) {
        squares[i].style.backgroundColor = '#beeaa5'; 
        //squares[i].style.fontSize = '26px';
        //squares[i].style.lineHeight = 2.0;
      }
      else if (squares[i].innerHTML == 2048) {
        squares[i].style.backgroundColor = '#d7d4f0';
        //squares[i].style.fontSize = '26px';
      }
    }
  }
  addColours();

  //var myTimer = setInterval(addColours, 50);

//});

function leerTeclado(but) {
  saveSquaresOld();
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
  addColours();
}

function loadSquaresOld() {
  for (let i=0; i<16; i++) {
    squares[i].innerHTML = squaresOld[i].innerHTML;
  }

  score -= 50;
  scoreDisplay.innerHTML = score;
}

function newGame() {
  for (let i=0; i<16; i++) {
    squares[i].innerHTML = 0;
  }
  score = 0;
  scoreDisplay.innerHTML = 0;
  generate();
  generate();
}