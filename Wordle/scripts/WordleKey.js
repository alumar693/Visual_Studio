import { KeyState } from './Enums.js';
export class WordleKey {
    constructor(letter, element){
        this.letter = letter;
        this.keyState = KeyState.UNUSED;
        this.element = element;
    }

    updateState(newState, key) {
        key.keyState = newState;
        if(key.letter === 'ENVIAR'){
            this.renderSubmitElement();
        }else if(key.letter === '⌫'){
            this.renderDeleteElement();
        }else{
            this.renderElement();
        }
    }

    renderElement() {
        switch (this.keyState) {
            case KeyState.PERFECT:
                this.element.className = 'perfect-character';
                break;
            case KeyState.RIGHT:
                this.element.className = 'right-character';
                break;
            case KeyState.WRONG:
                this.element.className = 'wrong-character';
                break;
            case KeyState.LOOKED:
                this.element.className = 'looked-character';
                break;
            default:
                this.element.className = 'unused-character';
                break;
        }
    }

    renderSubmitElement() {
        switch (this.keyState) {
            case KeyState.LOOKED:
                this.element.className = 'looked-submit-key';
                break;
            default:
                this.element.className = 'unused-submit-key';
        }
    }

    renderDeleteElement() {
        switch(this.keyState) {
            case KeyState.LOOKED:
                this.element.className = 'looked-delete-key';
                break;
            default:
                this.element.className = 'unused-delete-key';
        }
    }

    getKeyState(){
        return this.keyState;
    }

    getKey() {
        return this.keyState;
    }

    getLetter() {
        return this.letter;
    }
}