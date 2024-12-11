let text = document.body;
function zoomIn() {
    let currentSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    text.style.fontSize = (currentSize+1) + 'px';
}
function zoomOut() {
    let currentSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    text.style.fontSize = (currentSize - 1) + 'px';
}