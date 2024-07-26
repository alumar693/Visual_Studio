import { WordleBoard } from './WordleBoard.js';
import { OnScreenKeyboard } from './OnScreenKeyboard.js';
import { ResultGuess } from './ResultGuess.js';
import { Dictionary } from './Dictionary.js';

export class WordleGame {
    constructor() {
        this.dictionary = new Dictionary();
        this.secretWord = this.dictionary.getSecretWord();
        this.currentAttempt = 0;
        this.board = new WordleBoard(this, this.dictionary);
        this.keyboard = new OnScreenKeyboard();
        this.MAX_ATTEMPTS = this.board.MAX_ROWS;
        this.suspectedWord = '';
    }

    static startGame() {
        return new WordleGame();
    }

    checkWord(suspectedWord) {
        const resultGuess = new ResultGuess();
        resultGuess.calculateResult(suspectedWord, this.secretWord);
        this.currentAttempt++;

        return resultGuess;
    }

    getCurrentAttempt() {
        return this.currentAttempt;
    }

    getKeyboard() {
        return this.keyboard;
    }

    getMaxAttempts() {
        return this.MAX_ATTEMPTS;
    }

}
