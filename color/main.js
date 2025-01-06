let grid = [];
        let attemptsLeft;
        let currentPattern;
        let gameOver = false;

        const gameContainer = document.getElementById('game-container');
        const attemptsDisplay = document.getElementById('attempts-left');
        const puzzleIdDisplay = document.getElementById('current-puzzle-id');
        const resetButton = document.getElementById('reset-btn');

        function selectRandomPattern() {
            currentPattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
            grid = currentPattern.pattern.map(row => [...row]);
            attemptsLeft = currentPattern.attempts;
            puzzleIdDisplay.textContent = currentPattern.id;
        }

        function getColorStyle(param) {
            if (param == "blue") {
                return '#0fd';
            } else if (param == "pink") {
                return "#f6f";
            } else if (param == "yellow") {
                return "#fe3";
            } else if (param == "white") {
                return "#fff";
            } 
        }

        function renderGrid() {
            gameContainer.innerHTML = '';
            for (let row = 0; row < grid.length; row++) {
                for (let col = 0; col < grid[row].length; col++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.style.backgroundColor = getColorStyle(grid[row][col]);
                    cell.dataset.row = row;
                    cell.dataset.col = col;
                    if (!gameOver && row === grid.length - 1) {
                        cell.addEventListener('click', handleCellClick);
                    }
                    gameContainer.appendChild(cell);
                }
            }
        }

        function handleCellClick(e) {
            if (gameOver || attemptsLeft <= 0) return;

            const col = parseInt(e.target.dataset.col);
            const row = parseInt(e.target.dataset.row);
            const colorToClear = grid[row][col];
            let cellsToClear = [];

            function findConnectedCells(r, c) {
                if (
                    r < 0 ||
                    r >= grid.length ||
                    c < 0 ||
                    c >= grid[r].length ||
                    grid[r][c] !== colorToClear ||
                    cellsToClear.some(([row, col]) => row === r && col === c)
                ) {
                    return;
                }
                cellsToClear.push([r, c]);

                // Check all four directions
                findConnectedCells(r - 1, c); // Up
                findConnectedCells(r + 1, c); // Down
                findConnectedCells(r, c - 1); // Left
                findConnectedCells(r, c + 1); // Right
            }

            findConnectedCells(row, col);

            if (cellsToClear.length > 0) {
                for (const [r, c] of cellsToClear) {
                    grid[r][c] = null;
                }

                for (let c = 0; c < grid[0].length; c++) {
                    let emptySpaces = 0;
                    for (let r = grid.length - 1; r >= 0; r--) {
                        if (grid[r][c] === null) {
                            emptySpaces++;
                        } else if (emptySpaces > 0) {
                            grid[r + emptySpaces][c] = grid[r][c];
                            grid[r][c] = null;
                        }
                    }
                }

                attemptsLeft--;
                attemptsDisplay.textContent = attemptsLeft;

                renderGrid();

                if (checkWinCondition()) {
                    gameOver = true;
                    //setTimeout(() => alert(`Congratulations! You completed Puzzle #${currentPattern.id}!`), 100);
                    new Noty({
			type: 'alert',
			layout: 'topCenter',
			theme: 'nest',
			text: 'Has acertado !!!',
			timeout: 4000
		}).show();
                } else if (attemptsLeft === 0) {
                    gameOver = true;
                    //setTimeout(() => alert(`Game Over! You failed Puzzle #${currentPattern.id}.`), 100);
                    new Noty({
			type: 'alert',
			layout: 'topCenter',
			theme: 'nest',
			text: 'Game Over !!!',
			timeout: 4000
		}).show();
                }
            }
        }

        function checkWinCondition() {
            return grid.flat().every(cell => cell === null);
        }

        function resetGame() {
            gameOver = false;
            grid = currentPattern.pattern.map(row => [...row]);
            attemptsLeft = currentPattern.attempts;
            attemptsDisplay.textContent = attemptsLeft;
            renderGrid();
        }

        resetButton.addEventListener('click', resetGame);

        
        selectRandomPattern();
        resetGame();