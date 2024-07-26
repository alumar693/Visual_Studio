import { WordleCell } from './WordleCell.js';
import { CellState, KeyState } from './Enums.js'; 

export class WordleBoard {
    constructor(wordleGame, dictionary, maxRows = 6, maxLetters = 5) {
        this.MAX_ROWS = maxRows;
        this.MAX_LETTERS = maxLetters;
        this.rows = [];
        this.selectedCell = null;
        this.clickSelectedCell = null;
        this.wordleGame = wordleGame;
        this.dictionary = dictionary;
        this.selectedRowIndex = 0;
        this.selectedColumnIndex = 0;
        this.newBoard();
        this.addEventListeners();
    }

    newBoard() {
        this.rows = [];
        for (let i = 0; i < this.MAX_ROWS; i++) {
            const row = [];
            const rowElement = document.querySelector(`.board-row.row-${i + 1}`);
            for (let j = 0; j < this.MAX_LETTERS; j++) {
                const cellElement = rowElement.querySelector(`.cell-${j + 1}`);
                row.push(new WordleCell('', CellState.EMPTY, cellElement));
            }
            this.rows.push(row);
            this.clickSelectCell(0,0);
        }
    }

    updateRow(rowNumber, letters, result) {
        const row = this.rows[rowNumber];
        const keyboard = this.wordleGame.getKeyboard();
        const keys = keyboard.getKeys();

        letters.forEach((letter, index) => {
            this.updateCellAndKeyboard(row[index], letter, result.letters[index].cellState, keys);
        });
    }

    updateCellAndKeyboard(cell, letter, cellState, keys) {
        cell.updateCell(letter, cellState);
        this.updateKeyboardKey(letter, cellState, keys);
    }

    updateKeyboardKey(letter, cellState, keys) {
        const keyObject = keys.get(letter);
        if (!keyObject) return;

        switch (cellState) {
            case CellState.PERFECT:
                keyObject.updateState(cellState, keyObject);
                break;
            case CellState.RIGHT:
                if (keyObject.getKeyState() !== KeyState.PERFECT) {
                    keyObject.updateState(cellState, keyObject);
                }
                break;
            case CellState.WRONG:
                if (keyObject.getKeyState() !== KeyState.PERFECT && keyObject.getKeyState() !== KeyState.RIGHT) {
                    keyObject.updateState(cellState, keyObject);
                }
                break;
        }
    }

    addEventListeners() {
        this.rows.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                cell.element.addEventListener('click', () => {
                    let currentAttempt = this.wordleGame.getCurrentAttempt();
                    if (currentAttempt == rowIndex) {
                        this.clickSelectedCell = this.getCell(rowIndex, columnIndex);
                        this.clickSelectCell(rowIndex, columnIndex);
                    }
                });
            });
        });
    }

    clickSelectCell(rowNumber, columnNumber) {
        if (this.selectedCell) {
            this.selectedCell.element.classList.remove('selected-cell');
            if (this.selectedCell.element.textContent.trim() === '') {
                this.selectedCell.element.classList.add('empty-cell');
            }
        }
        this.selectedCell = this.getCell(rowNumber, columnNumber);
        this.selectedColumnIndex = columnNumber;
        this.selectedCell.updateCell(this.selectedCell.letter, CellState.SELECTED);
        this.selectedCell.element.classList.add('selected-cell');
        this.selectedCell.element.classList.remove('empty-cell');
    }

    removeLetter() {
            if(this.selectedColumnIndex == 0){
                this.selectedCell.updateCell('', CellState.EMPTY);
            }else if(this.clickSelectedCell === this.selectedCell) {
                this.selectedCell.updateCell('', CellState.EMPTY);
                this.clickSelectedCell = null;
            }else{
                this.getCell(this.selectedRowIndex, this.selectedColumnIndex-1).updateCell('', CellState.EMPTY);
                this.moveSelectionBackward();
            }
    }

    submitWord() {

        const row = this.rows[this.selectedRowIndex];
        const letters = row.map(cell => cell.letter);
        const suspectedWord = letters.join('');


        if (suspectedWord.length !== this.MAX_LETTERS || letters.some(letter => letter === '')) {
            alert('La palabra ingresada no está completa.');
            return;
        }
        const resultGuess = this.wordleGame.checkWord(suspectedWord);
        this.updateRow(this.selectedRowIndex, letters, resultGuess);
        this.advanceToNextRow();

        if(resultGuess.getPerfectLetters() === this.MAX_LETTERS) {
            setTimeout(() => {
                alert('Felicidades!!! Has acertado la palabra.');
                location.reload();
            }, 100);
        }else{
            if(this.wordleGame.getCurrentAttempt() === this.wordleGame.getMaxAttempts()) {
                setTimeout(() => {
                    alert('Game Over! La palabra era ' + this.dictionary.getSecretWord() + '.');
                    location.reload();
                }, 100);
            } 
        }       
    }

    advanceToNextRow() {
        if (this.selectedRowIndex < this.rows.length - 1) {
            this.selectedRowIndex++;
            this.selectedColumnIndex = 0;
            this.clickSelectCell(this.selectedRowIndex, this.selectedColumnIndex);
        }
    }

    moveSelectionForward() {
        if (this.selectedCell === this.getCell(this.selectedRowIndex, this.MAX_LETTERS - 1)) {
            this.clickSelectedCell = this.selectedCell;
        }
        if (this.selectedColumnIndex < this.MAX_LETTERS - 1) {
            this.selectedColumnIndex++;
            this.clickSelectCell(this.selectedRowIndex, this.selectedColumnIndex);
        }
    }

    moveSelectionBackward() {
        if (this.selectedColumnIndex > 0) {
            this.selectedColumnIndex--;
            this.clickSelectCell(this.selectedRowIndex, this.selectedColumnIndex);
            this.clickSelectedCell = null;
        }
    }

    getCell(rowNumber, columnNumber) {
        return this.rows[rowNumber][columnNumber];
    }

    getSelectedCell() {
        return this.selectedCell;
    }

    getSelectedRow() {
        return this.rows[this.selectedRowIndex];
    }

    getSelectedColumnIndex() {
        return this.selectedColumnIndex;
    }

    getMaxLetters(){
        return this.MAX_LETTERS;
    }
}
