import { CellState } from './Enums.js';

export class WordleCell {
    constructor(letter = '', cellState = CellState.EMPTY, element) {
        this.letter = letter;
        this.cellState = cellState;
        this.element = element;
    }

    setLetter(letter) {
        if (this.cellState === CellState.EMPTY || this.cellState === CellState.SELECTED) {
            this.updateCell(letter, CellState.FILLED);
        }
    }

    updateCell(letter, cellState) {
        this.letter = letter;
        this.cellState = cellState;
        this.renderElement();
    }

    renderElement() {
        if (this.element) {
            this.element.textContent = this.letter;
            switch (this.cellState) {
                case CellState.PERFECT:
                    this.element.classList.add('perfect-cell');
                    break;
                case CellState.RIGHT:
                    this.element.classList.add('right-cell');
                    break;
                case CellState.WRONG:
                    this.element.classList.add('wrong-cell');
                    break;
                case CellState.SELECTED:
                    this.element.classList.add('selected-cell');
                    break;
                case CellState.FILLED:
                    this.element.classList.add('filled-cell');
                    break;
                case CellState.EMPTY:
                    this.element.classList.add('empty-cell');
                    break;
            }
        }
    }
}
