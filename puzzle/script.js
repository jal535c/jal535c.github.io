const puzzleContainer = document.getElementById('puzzle-container');
const size = 4;
let tiles = [];


function initPuzzle() {
  const numbers = [...Array(size * size).keys()];
  shuffle(numbers);
  puzzleContainer.innerHTML = '';
  tiles = [];

  numbers.forEach((number, index) => {
    const tile = document.createElement('div');
    tile.className = 'puzzle-tile';
    tile.textContent = number === 0 ? '' : number;
    if (number === 0) {
      tile.classList.add('empty');
    }
    tile.addEventListener('click', () => moveTile(index));
    tiles.push(tile);
    puzzleContainer.appendChild(tile);
  });
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function moveTile(index) {
  const emptyIndex = tiles.findIndex(tile => tile.classList.contains('empty'));
  const validMoves = getValidMoves(emptyIndex);

  if (validMoves.includes(index)) {
    [tiles[emptyIndex].textContent, tiles[index].textContent] = [tiles[index].textContent, tiles[emptyIndex].textContent];

    tiles[emptyIndex].classList.toggle('empty');
    tiles[index].classList.toggle('empty');
  }
}


function getValidMoves(emptyIndex) {
  const validMoves = [];
  const row = Math.floor(emptyIndex / size);
  const col = emptyIndex % size;

  if (row > 0) validMoves.push(emptyIndex - size);  // Up
  if (row < size - 1) validMoves.push(emptyIndex + size);  // Down
  if (col > 0) validMoves.push(emptyIndex - 1);  // Left
  if (col < size - 1) validMoves.push(emptyIndex + 1);  // Right

  return validMoves;
}


document.addEventListener('keydown', (e) => {
  const emptyIndex = tiles.findIndex(tile => tile.classList.contains('empty'));
  let targetIndex;

  switch (e.key) {
    case 'ArrowUp':
      targetIndex = emptyIndex + size;
      break;
    case 'ArrowDown':
      targetIndex = emptyIndex - size;
      break;
    case 'ArrowLeft':
      targetIndex = emptyIndex + 1;
      break;
    case 'ArrowRight':
      targetIndex = emptyIndex - 1;
      break;
    default:
      return;
  }

  if (targetIndex >= 0 && targetIndex < size*size) {
    moveTile(targetIndex);
  }
});


initPuzzle();
