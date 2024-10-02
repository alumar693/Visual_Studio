let randomNumbers = new Array(10);

for(let i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i] = Math.random()*5+1;
}

for(let i = 0; i < randomNumbers.length; i++) {
    console.log("*".repeat(randomNumbers[i]));
}