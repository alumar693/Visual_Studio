import { WordleKey } from "./WordleKey.js";
import { KeyState } from "./Enums.js";
export class OnScreenKeyboard {

    constructor(wordleBoard){
        this.keys = new Map;
        this.wordleBoard = wordleBoard;
        this.newKeyboard();
        this.addEventListeners();
    }

    newKeyboard() {
        this.keyCreator('.submit-key');
        this.keyCreator('.delete-key');
        const keyElements = document.querySelectorAll('.character');
        keyElements.forEach(keyElement => {
            const letter = keyElement.textContent.trim();
            const wordleKey = new WordleKey(letter, keyElement)
            this.keys.set(letter, wordleKey);
        });
    }

    /**
     * Debe ser el elemento del html
     * @param {String} element 
     */
    keyCreator(element) {
        const keyElement = document.querySelector(element);
        const letter = keyElement.textContent.trim();
        const wordleKey = new WordleKey(letter, keyElement);
        this.keys.set(letter, wordleKey);
    }
    
    addEventListeners() {
        this.keys.forEach(key => {
            key.element.addEventListener('click', () => {
                this.handleInput(key.letter);
            });
            key.element.addEventListener('mouseover', () => {
                this.lookedKey(key);
            });

            key.element.addEventListener('mouseout', () => {
                this.resetLookedKey(key);
            });
        });
    }

    handleInput(key) {
        let selectedCell = this.wordleBoard.getSelectedCell();
    
        switch (key) {
            case 'DELETE':
            case '⌫':
                console.log('hola');
                this.wordleBoard.removeLetter();
                break;
            case 'SUBMIT':
            case 'ENVIAR':
                this.wordleBoard.submitWord();
                break;
            case 'LEFT_ARROW':
                this.wordleBoard.moveSelectionBackward();
                break;
            case 'RIGHT_ARROW':
                this.wordleBoard.moveSelectionForward();
                break;
            default:
                selectedCell.setLetter(key);
                console.log(this.wordleBoard.getSelectedColumnIndex());
                this.wordleBoard.moveSelectionForward();
                break;
        }
    }
    

    lookedKey(key) {
        if (key.keyState === KeyState.UNUSED) {
            key.updateState(KeyState.LOOKED, key);
        }
    }
    
      resetLookedKey(key) {
        if (key && key.keyState === KeyState.LOOKED) {
            key.updateState(KeyState.UNUSED, key);
        }
    }

    getKeys() {
        return this.keys;
    }
}