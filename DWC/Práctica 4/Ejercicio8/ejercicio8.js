class LetterCounter {

    static letterComparator(firstWord, secondWord) {
        let areEquals = false;
        if (firstWord.length === secondWord.length) {
           if(firstWord.split("").sort().join() === secondWord.split("").sort().join()) { //Separo las palabras por letras, los ordeno por orden alfabetico, las junto otra vez en un string y las comparo.
                areEquals = true;
           }
        }
        return areEquals;
    }
}
console.log(LetterCounter.letterComparator("hola", "aloh"));
console.log(LetterCounter.letterComparator("hola", "pepe"));