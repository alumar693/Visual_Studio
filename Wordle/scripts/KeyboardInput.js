
export class KeyboardInput {
    constructor(onScreenKeyboard) {
        this.onScreenKeyboard = onScreenKeyboard; 
        this.initializeKeyboardEvents();
    }

    initializeKeyboardEvents() {
        document.addEventListener('keydown', (event) => {
            const key = event.key.toUpperCase();
            this.handleKeyboardInput(event);
        });
    }

    handleKeyboardInput(event) {
        switch (true) {
            case (event.key.length === 1 && /^[a-zA-ZñÑ]$/.test(event.key)):
                this.onScreenKeyboard.handleInput(event.key.toUpperCase());
                break;
            case (event.key === 'Backspace'):
                this.onScreenKeyboard.handleInput('DELETE');
                break;
            case (event.key === 'Enter'):
                this.onScreenKeyboard.handleInput('SUBMIT');
                break;
            case (event.key === 'ArrowLeft'):
                this.onScreenKeyboard.handleInput('LEFT_ARROW');
                break;
            case (event.key === 'ArrowRight'):
                this.onScreenKeyboard.handleInput('RIGHT_ARROW');
                break;
        }
    }
}    