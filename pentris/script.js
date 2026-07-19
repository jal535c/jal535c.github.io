// Pentomino Shapes Definition
const PENTOMINOES = {
  I: {
    matrix: [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    color: '#00f0f0', // Neon Cyan
    name: 'I'
  },
  X: {
    matrix: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    color: '#ffc600', // Neon Gold/Yellow
    name: 'X'
  },
  U: {
    matrix: [
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#0044ff', // Neon Blue
    name: 'U'
  },
  V: {
    matrix: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1]
    ],
    color: '#39ff14', // Neon Green
    name: 'V'
  },
  W: {
    matrix: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 1]
    ],
    color: '#a020f0', // Neon Purple
    name: 'W'
  },
  Z: {
    matrix: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    color: '#ff0055', // Neon Red/Pink
    name: 'Z'
  },
  T: {
    matrix: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ],
    color: '#ffff33', // Neon Lemon
    name: 'T'
  },
  L: {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0]
    ],
    color: '#ff00ff', // Neon Magenta
    name: 'L'
  },
  P: {
    matrix: [
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ],
    color: '#ff5500', // Neon Orange
    name: 'P'
  },
  F: {
    matrix: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 0]
    ],
    color: '#adff2f', // Neon Lime
    name: 'F'
  },
  Y: {
    matrix: [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: '#8f5fe8', // Medium Violet
    name: 'Y'
  },
  N: {
    matrix: [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: '#20b2aa', // Neon SeaGreen
    name: 'N'
  }
};

// Web Audio API Synthesizer for Retro Arcade Sound Effects
class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playMove() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(130, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playRotate() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  playDrop() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playClear(lines) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Ascending major pentatonic scale chords for sweet reward sounds
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const duration = 0.15;

    for (let i = 0; i < Math.min(lines, 5); i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(scale[i], now + i * 0.05);

      gain.gain.setValueAtTime(0.1, now + i * 0.05);
      gain.gain.linearRampToValueAtTime(0.001, now + i * 0.05 + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + duration);
    }
  }

  playGameOver() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const baseFreqs = [220, 196, 164, 110];

    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);
      osc.frequency.linearRampToValueAtTime(freq - 30, now + idx * 0.15 + 0.25);

      gain.gain.setValueAtTime(0.1, now + idx * 0.15);
      gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.15 + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 0.28);
    });
  }
}

// Game Setup
const canvasBoard = document.getElementById('canvas-board');
const ctx = canvasBoard.getContext('2d');
const canvasNext = document.getElementById('canvas-next');
const canvasHold = document.getElementById('canvas-hold');

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30; // 300px width / 10 cols, 600px height / 20 rows

// Game State
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
let score = 0;
let level = 1;
let linesCleared = 0;

let activePiece = null;
let nextPiece = null;
let holdPiece = null;
let canHold = true;

let isGameOver = true;
let isPaused = false;
let isAnimatingClear = false;
let clearingRows = [];
let clearAnimTimer = 0;
const CLEAR_ANIM_DURATION = 15; // frames (approx 250ms at 60fps)

// Instantiate audio
const sound = new SoundController();

// Tetris Random 12-Bag Piece Generator
const PENTOMINO_NAMES = Object.keys(PENTOMINOES);
let pieceBag = [];

function getNextRandomPiece() {
  if (pieceBag.length === 0) {
    pieceBag = [...PENTOMINO_NAMES];
    // Shuffle using Fisher-Yates
    for (let i = pieceBag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieceBag[i], pieceBag[j]] = [pieceBag[j], pieceBag[i]];
    }
  }
  const name = pieceBag.pop();
  return {
    matrix: PENTOMINOES[name].matrix.map(row => [...row]),
    color: PENTOMINOES[name].color,
    name: name
  };
}

// Validate if piece movement/state is possible
function isValidMove(matrix, cellX, cellY) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] !== 0) {
        const boardX = cellX + c;
        const boardY = cellY + r;

        // Out of horizontal bounds
        if (boardX < 0 || boardX >= COLS) {
          return false;
        }

        // Out of bottom bounds
        if (boardY >= ROWS) {
          return false;
        }

        // Board collision (ignore spaces above board)
        if (boardY >= 0) {
          if (board[boardY][boardX] !== 0) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

// Spawning active piece
function spawnPiece() {
  activePiece = nextPiece;
  activePiece.x = Math.floor((COLS - activePiece.matrix[0].length) / 2);
  activePiece.y = 0;

  nextPiece = getNextRandomPiece();
  drawPieceCentered(canvasNext, nextPiece);
  canHold = true;

  if (!isValidMove(activePiece.matrix, activePiece.x, activePiece.y)) {
    gameOver();
  }
}

// Matrix Operations
function rotateClockwise(matrix) {
  const n = matrix.length;
  let rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rotated[c][n - 1 - r] = matrix[r][c];
    }
  }
  return rotated;
}

function rotateCounterClockwise(matrix) {
  const n = matrix.length;
  let rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rotated[n - 1 - c][r] = matrix[r][c];
    }
  }
  return rotated;
}

function flip(matrix) {
  return matrix.map(row => [...row].reverse());
}

// Action Handlers
function rotatePiece(clockwise) {
  const oldMatrix = activePiece.matrix;
  const newMatrix = clockwise ? rotateClockwise(oldMatrix) : rotateCounterClockwise(oldMatrix);

  // Wall kicks horizontal and floor kicks upward
  const kicks = [0, 1, -1, 2, -2];
  const yKicks = [0, -1, -2];

  for (let yk of yKicks) {
    for (let xk of kicks) {
      if (isValidMove(newMatrix, activePiece.x + xk, activePiece.y + yk)) {
        activePiece.matrix = newMatrix;
        activePiece.x += xk;
        activePiece.y += yk;
        sound.playRotate();
        return;
      }
    }
  }
}

function flipPiece() {
  const oldMatrix = activePiece.matrix;
  const newMatrix = flip(oldMatrix);

  const kicks = [0, 1, -1, 2, -2];
  const yKicks = [0, -1, -2];

  for (let yk of yKicks) {
    for (let xk of kicks) {
      if (isValidMove(newMatrix, activePiece.x + xk, activePiece.y + yk)) {
        activePiece.matrix = newMatrix;
        activePiece.x += xk;
        activePiece.y += yk;
        sound.playRotate();
        return;
      }
    }
  }
}

function handleHold() {
  if (!canHold || isGameOver || isPaused || isAnimatingClear) return;

  const pieceToHold = {
    matrix: PENTOMINOES[activePiece.name].matrix.map(row => [...row]),
    color: PENTOMINOES[activePiece.name].color,
    name: activePiece.name
  };

  if (holdPiece === null) {
    holdPiece = pieceToHold;
    activePiece = nextPiece;
    activePiece.x = Math.floor((COLS - activePiece.matrix[0].length) / 2);
    activePiece.y = 0;
    nextPiece = getNextRandomPiece();
    drawPieceCentered(canvasNext, nextPiece);
  } else {
    const temp = holdPiece;
    holdPiece = pieceToHold;
    activePiece = temp;
    activePiece.x = Math.floor((COLS - activePiece.matrix[0].length) / 2);
    activePiece.y = 0;
  }

  drawPieceCentered(canvasHold, holdPiece);
  canHold = false;
  sound.playRotate(); // play swap click
}

// Primary drop lock mechanic (Colocar / Bajar)
function dropAndLock() {
  if (isGameOver || isPaused || isAnimatingClear) return;

  // Find exact landing position (Ghost Y)
  let ghostY = activePiece.y;
  while (isValidMove(activePiece.matrix, activePiece.x, ghostY + 1)) {
    ghostY++;
  }

  activePiece.y = ghostY;
  sound.playDrop();

  // Merge active piece into board grid
  const rows = activePiece.matrix.length;
  const cols = activePiece.matrix[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (activePiece.matrix[r][c] !== 0) {
        const boardX = activePiece.x + c;
        const boardY = activePiece.y + r;
        if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
          board[boardY][boardX] = activePiece.color;
        }
      }
    }
  }

  // Trigger grid rumble
  const wrapper = document.querySelector('.canvas-wrapper');
  wrapper.classList.add('shake');
  setTimeout(() => wrapper.classList.remove('shake'), 250);

  // Check lines
  let fullRows = [];
  for (let r = 0; r < ROWS; r++) {
    if (board[r].every(cell => cell !== 0)) {
      fullRows.push(r);
    }
  }

  if (fullRows.length > 0) {
    isAnimatingClear = true;
    clearingRows = fullRows;
    clearAnimTimer = 0;
    sound.playClear(fullRows.length);
  } else {
    spawnPiece();
  }
}

// Action Dispatcher for inputs
function handleAction(action) {
  if (isGameOver || isPaused || isAnimatingClear) return;

  switch (action) {
    case 'left':
      if (isValidMove(activePiece.matrix, activePiece.x - 1, activePiece.y)) {
        activePiece.x--;
        sound.playMove();
      }
      break;
    case 'right':
      if (isValidMove(activePiece.matrix, activePiece.x + 1, activePiece.y)) {
        activePiece.x++;
        sound.playMove();
      }
      break;
    case 'rot-cw':
      rotatePiece(true);
      break;
    case 'rot-ccw':
      rotatePiece(false);
      break;
    case 'flip':
      flipPiece();
      break;
    case 'place':
      dropAndLock();
      break;
    case 'hold':
      handleHold();
      break;
  }
}

// Drawing Utilities
function lightenColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 0 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 0 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 0 ? 0 : B : 255)).toString(16).slice(1);
}

function darkenColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) - amt,
    G = (num >> 8 & 0x00FF) - amt,
    B = (num & 0x0000FF) - amt;
  return "#" + (0x1000000 + (R < 255 ? R < 0 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 0 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 0 ? 0 : B : 255)).toString(16).slice(1);
}

function drawBlock(context, x, y, color, isGhost = false) {
  const px = x * BLOCK_SIZE;
  const py = y * BLOCK_SIZE;

  if (isGhost) {
    // Holographic outline ghost styling
    context.strokeStyle = color;
    context.lineWidth = 1.5;
    context.beginPath();
    context.roundRect ? context.roundRect(px + 2.5, py + 2.5, BLOCK_SIZE - 5, BLOCK_SIZE - 5, 5) : context.rect(px + 2.5, py + 2.5, BLOCK_SIZE - 5, BLOCK_SIZE - 5);
    context.stroke();

    context.fillStyle = color;
    context.globalAlpha = 0.12;
    context.fill();
    context.globalAlpha = 1.0;
  } else {
    // Beautiful glossy gradients
    const grad = context.createLinearGradient(px, py, px + BLOCK_SIZE, py + BLOCK_SIZE);
    grad.addColorStop(0, lightenColor(color, 35));
    grad.addColorStop(1, darkenColor(color, 25));

    context.fillStyle = grad;
    context.beginPath();
    context.roundRect ? context.roundRect(px + 1, py + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2, 6) : context.rect(px + 1, py + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
    context.fill();

    // Gloss inner highlights
    context.fillStyle = 'rgba(255, 255, 255, 0.18)';
    context.fillRect(px + 3, py + 3, BLOCK_SIZE - 6, 3);
  }
}

function drawBoard() {
  ctx.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

  // Draw background grid helper lines
  ctx.strokeStyle = 'rgba(102, 252, 241, 0.04)';
  ctx.lineWidth = 1;
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath();
    ctx.moveTo(c * BLOCK_SIZE, 0);
    ctx.lineTo(c * BLOCK_SIZE, canvasBoard.height);
    ctx.stroke();
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * BLOCK_SIZE);
    ctx.lineTo(canvasBoard.width, r * BLOCK_SIZE);
    ctx.stroke();
  }

  // Draw locked board blocks
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] !== 0) {
        if (isAnimatingClear && clearingRows.includes(r)) {
          // Line-clearing flash animation
          const pct = clearAnimTimer / CLEAR_ANIM_DURATION;
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - pct})`;
          ctx.fillRect(c * BLOCK_SIZE + 0.5, r * BLOCK_SIZE + 0.5, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
          ctx.strokeStyle = `rgba(0, 240, 240, ${1 - pct})`;
          ctx.strokeRect(c * BLOCK_SIZE + 0.5, r * BLOCK_SIZE + 0.5, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
        } else {
          drawBlock(ctx, c, r, board[r][c]);
        }
      }
    }
  }

  // Draw active piece and landing ghost guide
  if (!isAnimatingClear && activePiece) {
    let ghostY = activePiece.y;
    while (isValidMove(activePiece.matrix, activePiece.x, ghostY + 1)) {
      ghostY++;
    }

    const rows = activePiece.matrix.length;
    const cols = activePiece.matrix[0].length;

    // Draw landing guide ghost piece
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (activePiece.matrix[r][c] !== 0) {
          const boardY = ghostY + r;
          if (boardY >= 0) {
            drawBlock(ctx, activePiece.x + c, boardY, activePiece.color, true);
          }
        }
      }
    }

    // Draw active piece
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (activePiece.matrix[r][c] !== 0) {
          const boardY = activePiece.y + r;
          if (boardY >= 0) {
            drawBlock(ctx, activePiece.x + c, boardY, activePiece.color, false);
          }
        }
      }
    }
  }
}

// Center and draw preview canvases (Next / Hold)
function drawPieceCentered(canvas, piece) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (!piece) return;

  const matrix = piece.matrix;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Find exact shape bounding limits for centering alignment
  let minR = rows, maxR = -1, minC = cols, maxC = -1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c]) {
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
  }

  const pieceWidth = maxC - minC + 1;
  const pieceHeight = maxR - minR + 1;

  // Perfect fit sizing for 100x100 preview boxes
  const cellSize = 16;
  const startX = (canvas.width - pieceWidth * cellSize) / 2 - minC * cellSize;
  const startY = (canvas.height - pieceHeight * cellSize) / 2 - minR * cellSize;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c]) {
        const px = startX + c * cellSize;
        const py = startY + r * cellSize;

        const grad = context.createLinearGradient(px, py, px + cellSize, py + cellSize);
        grad.addColorStop(0, lightenColor(piece.color, 35));
        grad.addColorStop(1, darkenColor(piece.color, 25));

        context.fillStyle = grad;
        context.beginPath();
        context.roundRect ? context.roundRect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1, 4) : context.rect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1);
        context.fill();

        context.fillStyle = 'rgba(255, 255, 255, 0.18)';
        context.fillRect(px + 2, py + 2, cellSize - 4, 2);
      }
    }
  }
}

// Game Core Loops
function gameLoop() {
  if (isGameOver) return;

  if (isPaused) {
    requestAnimationFrame(gameLoop);
    return;
  }

  if (isAnimatingClear) {
    clearAnimTimer++;
    if (clearAnimTimer >= CLEAR_ANIM_DURATION) {
      // Sort rows in descending order to avoid shift errors on deletion
      clearingRows.sort((a, b) => b - a).forEach(r => {
        board.splice(r, 1);
      });
      // Replenish top rows
      while (board.length < ROWS) {
        board.unshift(Array(COLS).fill(0));
      }

      // Add scores (Pentomino allows clearing up to 5 lines simultaneously)
      const points = [0, 100, 300, 600, 1000, 1500];
      const addedScore = (points[clearingRows.length] || 1500) * level;
      score += addedScore;
      linesCleared += clearingRows.length;
      level = Math.floor(linesCleared / 10) + 1;

      // Update HUD
      document.getElementById('stat-score').textContent = String(score).padStart(6, '0');
      document.getElementById('stat-level').textContent = level;
      document.getElementById('stat-lines').textContent = linesCleared;

      isAnimatingClear = false;
      clearingRows = [];
      spawnPiece();
    }
  }

  drawBoard();
  requestAnimationFrame(gameLoop);
}

// Start Game Initializer
function startGame() {
  sound.init();
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  score = 0;
  level = 1;
  linesCleared = 0;
  holdPiece = null;
  canHold = true;

  document.getElementById('stat-score').textContent = "000000";
  document.getElementById('stat-level').textContent = "1";
  document.getElementById('stat-lines').textContent = "0";

  const ctxHold = canvasHold.getContext('2d');
  ctxHold.clearRect(0, 0, canvasHold.width, canvasHold.height);

  nextPiece = getNextRandomPiece();
  spawnPiece();

  isGameOver = false;
  isPaused = false;

  document.getElementById('screen-start').classList.add('hidden');
  document.getElementById('screen-gameover').classList.add('hidden');
  document.getElementById('board-message').classList.add('hidden');

  gameLoop();
}

function gameOver() {
  isGameOver = true;
  sound.playGameOver();

  let highscore = localStorage.getItem('pentris_highscore') || 0;
  if (score > highscore) {
    highscore = score;
    localStorage.setItem('pentris_highscore', score);
  }

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-lines').textContent = linesCleared;
  document.getElementById('final-level').textContent = level;
  document.getElementById('val-highscore').textContent = highscore;

  document.getElementById('screen-gameover').classList.remove('hidden');
}

function togglePause() {
  if (isGameOver) return;
  isPaused = !isPaused;
  const msg = document.getElementById('board-message');
  if (isPaused) {
    msg.classList.remove('hidden');
    msg.textContent = "PAUSA";
  } else {
    msg.classList.add('hidden');
  }
  sound.playRotate();
}

// Input bindings & event listeners
// Keyboard bindings
document.addEventListener('keydown', (e) => {
  if (isGameOver) return;

  switch (e.code) {
    case 'ArrowLeft':
    case 'KeyA':
      handleAction('left');
      break;
    case 'ArrowRight':
    case 'KeyD':
      handleAction('right');
      break;
    case 'ArrowUp':
    case 'KeyW':
    case 'KeyZ':
      handleAction('rot-cw');
      break;
    case 'KeyQ':
    case 'KeyX':
      handleAction('rot-ccw');
      break;
    case 'Space':
    case 'KeyF':
      handleAction('flip');
      break;
    case 'ArrowDown':
    case 'Enter':
    case 'KeyS':
      handleAction('place');
      break;
    case 'KeyC':
    case 'ShiftLeft':
    case 'ShiftRight':
      handleAction('hold');
      break;
    case 'Escape':
    case 'KeyP':
      togglePause();
      break;
  }
});

// Pointer/Touch buttons bindings
const touchButtons = [
  { id: '.btn-rot-ccw', action: 'rot-ccw' },
  { id: '.btn-rot-cw', action: 'rot-cw' },
  { id: '.btn-flip', action: 'flip' },
  { id: '.btn-left', action: 'left' },
  { id: '.btn-right', action: 'right' },
  { id: '.btn-place', action: 'place' },
  { id: '#btn-hold-trigger', action: 'hold' }
];

touchButtons.forEach(btn => {
  const el = document.querySelector(btn.id);
  if (el) {
    // Prevent double tap zooming and default scrolling on touch elements
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      handleAction(btn.action);
    });
  }
});

// Sound Toggle
const btnSound = document.getElementById('btn-sound');
btnSound.addEventListener('click', () => {
  sound.muted = !sound.muted;
  document.getElementById('sound-icon-on').classList.toggle('hidden', sound.muted);
  document.getElementById('sound-icon-off').classList.toggle('hidden', !sound.muted);
});

// Info Modal bindings
const btnInfo = document.getElementById('btn-info');
const modalInfo = document.getElementById('modal-info');
const btnCloseInfo = document.getElementById('btn-close-info');

btnInfo.addEventListener('click', () => {
  modalInfo.classList.remove('hidden');
});

btnCloseInfo.addEventListener('click', () => {
  modalInfo.classList.add('hidden');
});

// Board canvas pause binding
canvasBoard.addEventListener('click', () => {
  togglePause();
});

// Modal button bindings
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);

// Draw static layouts initially
(function initDraw() {
  ctx.fillStyle = '#0a0b10';
  ctx.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
  // draw grid background helper lines
  ctx.strokeStyle = 'rgba(102, 252, 241, 0.04)';
  ctx.lineWidth = 1;
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath();
    ctx.moveTo(c * BLOCK_SIZE, 0);
    ctx.lineTo(c * BLOCK_SIZE, canvasBoard.height);
    ctx.stroke();
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * BLOCK_SIZE);
    ctx.lineTo(canvasBoard.width, r * BLOCK_SIZE);
    ctx.stroke();
  }
})();
