class WordSorter {
   
    static inverseSorter(words) {
        let sortedWords = Array.from(words).sort().reverse();
        let wordsHTML = '';
        sortedWords.forEach(word => {
            wordsHTML += `<p>${word}</p>`
        });
        document.getElementById('output').innerHTML = wordsHTML;
    }

    static collectWords() {
        let words = new Set();
        
        document.getElementById('submit').addEventListener('click', function(event) {
            let textContent = document.getElementById('textBox').value.trim();
            if(textContent === "") {
                WordSorter.inverseSorter(words);
            } else {
                words.add(textContent);
            }
            document.getElementById('textBox').value = ''; 
        });
    }
}
WordSorter.collectWords();