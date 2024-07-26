import { WordleGame } from './WordleGame.js';
import { KeyboardInput } from './KeyboardInput.js';

document.addEventListener('DOMContentLoaded', () => {
    const game = WordleGame.startGame();
    const keyboard = game.keyboard;
    const board = game.board;
    
    keyboard.wordleBoard = board;
    const keyboardInput = new KeyboardInput(keyboard, board);
    console.log(game);  
});
