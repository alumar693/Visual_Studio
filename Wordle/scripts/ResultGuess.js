import { CellState } from './Enums.js';
import { WordleCell } from './WordleCell.js';

export class ResultGuess {
    constructor() {
        this.perfectLetters = 0;
        this.letters = [];
    }

    calculateResult(suspectedWord, secretWord) {  
            if (suspectedWord === secretWord) {
                this.isGuessed(suspectedWord);
            } else {
                this.isPartialMatch(suspectedWord, secretWord);
            }
    }

    isGuessed(suspectedWord) {
        for (let i = 0; i < suspectedWord.length; i++) {
            this.letters.push(new WordleCell(suspectedWord[i], CellState.PERFECT));
        }
        this.perfectLetters = suspectedWord.length;
    }

    isPartialMatch(suspectedWord, secretWord) {
        const secretWordCopy = [...secretWord];
        const letterStates = Array(suspectedWord.length).fill(CellState.WRONG);

        for (let i = 0; i < suspectedWord.length; i++) {
            if (suspectedWord[i] === secretWord[i]) {
                letterStates[i] = CellState.PERFECT;
                this.perfectLetters++;
                secretWordCopy[i] = null;
            }
        }

        for (let i = 0; i < suspectedWord.length; i++) {
            if (letterStates[i] === CellState.PERFECT) continue;
            const letter = suspectedWord[i];
            const indexInSecret = secretWordCopy.indexOf(letter);
            if (indexInSecret !== -1) {
                letterStates[i] = CellState.RIGHT;
                secretWordCopy[indexInSecret] = null;
            }
        }

        for (let i = 0; i < suspectedWord.length; i++) {
            this.letters.push(new WordleCell(suspectedWord[i], letterStates[i]));
        }
    }

    getPerfectLetters() {
        return this.perfectLetters;
    }

    getLetters() {
        return this.letters;
    }
}
